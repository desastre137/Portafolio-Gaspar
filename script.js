const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeButton.textContent = body.classList.contains('dark-mode') ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro';
});
