// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. MENU RESPONSIVE
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle');

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.toggle('show-menu');
        });
    }

    const navLink = document.querySelectorAll('.nav__link');
    const linkAction = () =>{
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));


    // 2. EFECTO HEADER STICKY
    const header = document.getElementById('header');
    const scrollHeader = () =>{
        if(window.scrollY >= 50) header.classList.add('header--scroll');
        else header.classList.remove('header--scroll');
    }
    window.addEventListener('scroll', scrollHeader);


    // 3. FORMULARIO DE CONTACTO (DINÁMICO)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const phoneInputGroup = document.getElementById('phone-input-group');
        const phoneInput = document.getElementById('phone');
        
        contactForm.addEventListener('change', (e) => {
            if (e.target.name === 'contact_method') {
                if (e.target.value === 'phone') {
                    phoneInputGroup.style.display = 'block';
                    phoneInput.setAttribute('required', '');
                } else {
                    phoneInputGroup.style.display = 'none';
                    phoneInput.removeAttribute('required');
                }
            }
        });
    }


    // 4. LÓGICA DEL CARRUSEL DE SERVICIOS
    const track = document.getElementById('carousel-track');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    if (track && nextBtn && prevBtn) {
        let index = 0;

        const moveCarousel = () => {
            const slideWidth = track.firstElementChild.getBoundingClientRect().width;
            const gap = 20; // El mismo que en SCSS
            track.style.transform = `translateX(-${(slideWidth + gap) * index}px)`;
        };

        nextBtn.addEventListener('click', () => {
            const itemsInView = window.innerWidth >= 768 ? 3 : 1;
            if (index < track.children.length - itemsInView) {
                index++;
                moveCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
                moveCarousel();
            }
        });

        window.addEventListener('resize', () => {
            index = 0;
            moveCarousel();
        });
    }

    // 5. INTERACTIVIDAD HOVER (CLICK EN MÓVIL)
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            serviceItems.forEach(el => el.classList.remove('is-active'));
            item.classList.add('is-active');
        });
    });
});