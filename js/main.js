// js/main.js

// 1. MENU RESPONSIVE
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

// 2. INTERACTIVIDAD SERVICIOS (Para móviles)
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        // Quitar activo de otros y poner en este
        serviceItems.forEach(el => el.classList.remove('is-active'));
        item.classList.add('is-active');
    });
});

// 3. EFECTO HEADER STICKY
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY >= 80) header.classList.add('header--scroll');
    else header.classList.remove('header--scroll');
});