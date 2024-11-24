const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(selectedTheme === 'system' ? systemTheme : selectedTheme);
});

// Set theme on load
const savedTheme = localStorage.getItem('theme') || 'system';
themeSelect.value = savedTheme;
applyTheme(savedTheme);
d