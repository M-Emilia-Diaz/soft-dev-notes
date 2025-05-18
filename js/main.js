// scroll suave para links de navegacion

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// validacion de formulario newsletter
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', function(e) {
    e.preventDefault();  //evita el envio automatico
    const email = emailInput.value.trim();

    if (email === '' || !validateEmail(email)) {
        alert('Por favor, ingresá un email valido.');
        emailInput.focus();
    } else {
        alert('¡Gracias por suscribirte!');
        form.reset(); //devuelve formulario limpio
    }
});

// funcion de validacion email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email)
}

// menu hamburguesa (mobile version)
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';
document.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// animacion de elementon en scroll
document.addEventListener('DOMContentLoaded',() => {

    const animatedElements = document.querySelectorAll('.animate');
    // console.log("🎯 Elementos encontrados:", animatedElements.length);

function showOnScroll() {
    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight - 50) {
        el.classList.add('active');
      }
      console.log("🔥 Ejecutando showOnScroll");
    });
  }

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load',showOnScroll); //algunos ya aparecen al cargar
});

// validacion de formulario en contacto 

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert ('Por favor, completá todos los campos.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Por favor, ingresá un correo válido.');
            return;
        }

        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        contactForm.reset();
    });
    }


    