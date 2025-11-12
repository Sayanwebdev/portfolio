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
