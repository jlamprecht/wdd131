document.getElementById('currentyear').innerHTML = (new Date().getFullYear());

document.getElementById('lastModified').innerHTML = document.lastModified;

const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    nav.classList.toggle('show');
});
