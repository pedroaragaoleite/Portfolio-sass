const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn_burguer');
const nav = document.querySelector('.nav');
const manuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburguer.classList.add('open');
        nav.classList.add('open');
        manuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        manuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}
