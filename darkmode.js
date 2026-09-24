const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

const iconBulan = 'https://cdn-icons-png.magnific.com/256/391/391097.png?semt=ais_white_label';
const iconMatahari = 'https://static.vecteezy.com/system/resources/previews/014/282/744/non_2x/settings-brightness-glyph-inverted-icon-free-vector.jpg';

function applyTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add('dark');
    themeIcon.src = iconMatahari;
  } else {
    htmlElement.classList.remove('dark');
    themeIcon.src = iconBulan;
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme === 'dark');

themeToggleBtn.addEventListener('click', () => {
  const isDarkNow = htmlElement.classList.contains('dark');
  applyTheme(!isDarkNow);
});