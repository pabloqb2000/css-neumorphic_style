const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
let dark = currentTheme == 'dark';

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (!dark) {
        document.body.classList.toggle('light-theme');
    }
}

document.addEventListener('keyup', (e) => {
    document.body.classList.toggle('light-theme');
    dark = !dark;
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
