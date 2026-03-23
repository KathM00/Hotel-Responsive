// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU RESPONSIVE (Mejorado con abrir/cerrar)
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    /* Mostrar menú */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu');
        });
    }

    /* Ocultar menú */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu');
        });
    }

    /* Ocultar menú al hacer click en un link */
    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


    // 2. EFECTO HEADER TRANSPARENTE A SCROLL
    const header = document.getElementById('header');
    
    const scrollHeader = () =>{
        // Cuando el scroll es mayor a 50px, añadir la clase 'header--scroll'
        if(window.scrollY >= 50) header.classList.add('header--scroll');
        else header.classList.remove('header--scroll');
    }
    window.addEventListener('scroll', scrollHeader);
    scrollHeader(); // Ejecutar al cargar para verificar posición inicial


    // 3. FORMULARIO DE CONTACTO DINÁMICO (Teléfono)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const phoneInputGroup = document.getElementById('phone-input-group');
        const phoneInput = document.getElementById('phone');
        
        // Escuchar cambios en los radio buttons del método de contacto
        contactForm.addEventListener('change', (e) => {
            if (e.target.name === 'contact_method') {
                if (e.target.value === 'phone') {
                    // Mostrar campo teléfono, hacerlo requerido
                    phoneInputGroup.style.display = 'block';
                    phoneInput.setAttribute('required', '');
                } else {
                    // Ocultar campo teléfono, quitar requerido
                    phoneInputGroup.style.display = 'none';
                    phoneInput.removeAttribute('required');
                }
            }
        });
    }


    // 4. INTERACTIVIDAD SERVICIOS (Tu código existente)
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            serviceItems.forEach(el => el.classList.remove('is-active'));
            item.classList.add('is-active');
        });
    });
});