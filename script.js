// Theme toggle with persistence (use Tailwind's `dark` class on <html>)
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');
const htmlEl = document.documentElement; // <html>

// initialize theme from localStorage (fall back to system preference)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  htmlEl.classList.add('dark');
  themeSwitch.checked = true;
  themeLabel.textContent = 'Dark Mode';
} else if (savedTheme === 'light') {
  htmlEl.classList.remove('dark');
  themeSwitch.checked = false;
  themeLabel.textContent = 'Light Mode';
} else {
  // no saved preference -> follow system
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    htmlEl.classList.add('dark');
    themeSwitch.checked = true;
    themeLabel.textContent = 'Dark Mode';
  } else {
    htmlEl.classList.remove('dark');
    themeSwitch.checked = false;
    themeLabel.textContent = 'Light Mode';
  }
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // switch to dark (Tailwind expects 'dark' class on <html>)
    htmlEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeLabel.textContent = 'Dark Mode';
  } else {
    // switch to light
    htmlEl.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeLabel.textContent = 'Light Mode';
  }
  // bg-effects.js listens to the themeSwitch 'change' event and to storage for cross-window sync
});



// Contact form - opens mailto with message contents (no backend)
const contactForm = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('c_name').value.trim();
  const email = document.getElementById('c_email').value.trim();
  const message = document.getElementById('c_message').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    status.style.color = 'orangered';
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailto = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;

  status.textContent = 'Opening your mail client…';
  status.style.color = 'green';
});

// Clear form button
document.getElementById('clearForm').addEventListener('click', () => {
  contactForm.reset();
  status.textContent = '';
});

// --- Habit Tracker demo export/import handlers (used by Projects card) ---
(function(){
  const EXPORT_KEY = 'habits-demo';
  const exportBtn = document.getElementById('exportHabitsBtn');
  const importInput = document.getElementById('importHabitsInput');
  const clearBtn = document.getElementById('clearHabitsBtn');
  const messageEl = document.getElementById('habitMessage');

  function notify(msg, color) {
    if (messageEl) {
      messageEl.textContent = msg;
      messageEl.style.color = color || '';
    }
  }

  // Provide a small sample dataset if none exists — useful when downloading a demo backup
  function getOrCreateDemoData() {
    const raw = localStorage.getItem(EXPORT_KEY);
    if (raw) return raw;
    const sample = [
      { id: 1, name: 'Drink water', target: 1, entries: { }, created: new Date().toISOString() },
      { id: 2, name: 'Read 20 pages', target: 1, entries: { }, created: new Date().toISOString() }
    ];
    const json = JSON.stringify(sample, null, 2);
    return json;
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const json = getOrCreateDemoData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'habits-backup.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      notify('Downloaded habits JSON (habits-backup.json).', 'green');
    });
  }

  if (importInput) {
    importInput.addEventListener('change', (ev) => {
      const f = ev.target.files && ev.target.files[0];
      if (!f) return notify('No file selected for import.', 'orangered');
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          // store the imported JSON under the demo key
          localStorage.setItem(EXPORT_KEY, JSON.stringify(parsed));
          notify('Imported JSON into localStorage (key: ' + EXPORT_KEY + ').', 'green');
        } catch (err) {
          notify('Import failed — invalid JSON file.', 'orangered');
        }
      };
      reader.readAsText(f);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem(EXPORT_KEY);
      notify('Local data cleared (key: ' + EXPORT_KEY + ').', 'orange');
    });
  }
})();
