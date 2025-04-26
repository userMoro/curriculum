window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const nome = document.getElementById('nome');
    const typing = document.getElementById('typing');

    const nomeTesto = "Nome Cognome"; // <-- cambia con il tuo
    const qualificaTesto = "Tecnico Informatico / Software Engineer";

    let index = 0;

    function typeNome() {
        if (index < nomeTesto.length) {
            nome.innerHTML += nomeTesto.charAt(index);
            index++;
            setTimeout(typeNome, 100); // battitura lenta per il nome
        } else {
            index = 0;
            setTimeout(typeQualifica, 800);
        }
    }

    function typeQualifica() {
        if (index < qualificaTesto.length) {
            typing.innerHTML += qualificaTesto.charAt(index);
            index++;
            setTimeout(typeQualifica, 50); // battitura più veloce per la qualifica
        }
    }

    typeNome();

    // Particelle verde acqua
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 1 + 0.5;
        }
        update() {
            this.y += this.speedY;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 255, 150, 0.6)'; // verde acqua
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    setTimeout(() => {
        header.classList.remove('intro');
        body.classList.remove('intro-mode');
        footer.classList.add('show-footer');
        sections.forEach(section => section.classList.add('appear'));
    }, 1500); // transizione di intro-mode

    // Gestione parallax
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        document.querySelector('.parallax').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Accordion
    const accordions = document.querySelectorAll('.accordion h3');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const panel = accordion.nextElementSibling;
            panel.classList.toggle('show');
        });
    });
});
