// js/main.js

// 1. MENU RESPONSIVE (Mejorado con accesibilidad)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        // Opcional: cambiar icono de barras a 'X'
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// 2. VALIDACIÓN DE FORMULARIO DE CONTACTO
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga [cite: 742]
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Validación simple [cite: 768, 2831]
        if(nombre.trim() === "" || email.trim() === "") {
            showFeedback("Por favor, completa los campos obligatorios.", "error");
        } else {
            showFeedback("¡Gracias! Tu mensaje ha sido enviado con éxito.", "success");
            contactForm.reset();
        }
    });
}

function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `form-feedback ${type}`;
    setTimeout(() => { feedback.style.display = 'none'; }, 5000);
}

// 3. SMOOTH SCROLL (Navegación fluida)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});