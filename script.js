// Theme toggle with persistence (fixed: explicitly add light-mode)
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');
const body = document.body;

// initialize theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  themeSwitch.checked = true;
  themeLabel.textContent = 'Dark Mode';
} else {
  // default -> light mode
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  themeSwitch.checked = false;
  themeLabel.textContent = 'Light Mode';
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // switch to dark
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    themeLabel.textContent = 'Dark Mode';
  } else {
    // switch to light
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeLabel.textContent = 'Light Mode';
  }
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
