const themeSwitch = document.getElementById('theme-switch');

function loadThemeMode() {
  const theme = localStorage.getItem('theme');
  document.documentElement.dataset.theme = theme || 'light';
}

themeSwitch.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

// On application load
loadThemeMode();
