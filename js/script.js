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
        } else {
            // Al termine dell'animazione di scrittura
            setTimeout(startPageTransition, 800);
        }
    }

    function startPageTransition() {
        // Scrolla la pagina verso l'alto facendo vedere le sezioni
        header.classList.add('shrink');
        body.classList.remove('intro-mode');

        // Fa comparire le sezioni con effetto
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('appear');
            }, index * 500);
        });

        // Mostra il footer
        setTimeout(() => {
            footer.style.display = 'block';
        }, sections.length * 400 + 500);
    }

    typeNome();

    // Particelle
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

        // Effetto dissolvenza e rimpicciolimento dell'header durante lo scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;
        
        // Più scrolli, più l'header diventa trasparente e piccolo
        let opacity = 1 - scrollY / 300;
        let scale = 1 - scrollY / 5500;
        let blur = scrollY / 100;
        
        // Imposta limiti minimi (non negativi)
        opacity = Math.max(opacity, 0);
        scale = Math.max(scale, 0.2);
        blur = Math.min(blur, 5); 

        header.style.opacity = opacity;
        header.style.transform = 'scale(${scale})';
        header.style.backdropFilter = 'blur(${blur}px)';
        header.style.webkitBackdropFilter = 'blur(${blur}px)';
    });

    setTimeout(() => {
        header.classList.remove('intro');
        body.classList.remove('intro-mode');

        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('appear');
            }, index * 500);
        });

        setTimeout(() => {
            footer.style.display = 'block';
        }, sections.length * 200 + 500);
    }, 6000); 
});

// Gestione accordion
document.addEventListener('DOMContentLoaded', function () {
     const acc = document.querySelectorAll('.accordion h3');
     acc.forEach(function (element) {
         element.addEventListener('click', function () {
             const panel = this.nextElementSibling;
             panel.classList.toggle('show');
         });
     });
});

window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const nome = document.getElementById('nome');
    const typing = document.getElementById('typing');

    const nomeTesto = "Nome Cognome";
    const qualificaTesto = "Tecnico Informatico / Software Engineer";

    const italianText = {
        contatti: "Contatti",
        linkedin: "LinkedIn",
        github: "GitHub",
        profiloTitle: "Profilo",
        profiloText: "Professionista IT con 4 anni di esperienza nella gestione di database, risoluzione di problemi software e supporto tecnico avanzato. Competenze in SQL, Python e automazione dei processi.",
        competenzeTitle: "Competenze Tecniche",
        competenzeLanguages: "Linguaggi di Programmazione:",
        competenzeDatabases: "Database:",
        competenzeTools: "Strumenti di Sviluppo:",
        competenzeMethodologies: "Metodologie:",
        competenzeCloud: "Cloud:",
        esperienzaTitle: "Esperienza Lavorativa",

        subsection1: "Azienda XYZ | Tecnico IT",
        ss1point1: "Gestione e ottimizzazione di database SQL per migliorare le performance di sistema, riducendo i tempi di risposta del 20%.",
        ss1point2: "Automazione di processi ripetitivi con Python, riducendo i tempi di elaborazione dei dati del 30%.",
        ss1point3: "Supporto tecnico e troubleshooting avanzato per i team di sviluppo.",
        subsection2: "Azienda ABC | Supporto Tecnico",
        ss2point1: "Analisi e risoluzione di incidenti software e gestione di ticket di supporto.",
        ss2point2: "Collaborazione con team di sviluppo per migliorare l'affidabilità dei sistemi e ridurre il downtime.",

        istruzioneTitle: "Istruzione",
        certificazioniTitle: "Certificazioni",
        lingueTitle: "Lingue",
        english: "Inglese: C1 (Fluente)",
        italian: "Italiano: Madrelingua"
    };

    const englishText = {
        contatti: "Contacts",
        linkedin: "LinkedIn",
        github: "GitHub",
        profiloTitle: "Profile",
        profiloText: "IT professional with 4 years of experience in database management, software troubleshooting, and advanced technical support. Skills in SQL, Python, and process automation.",
        competenzeTitle: "Technical Skills",
        competenzeLanguages: "Programming Languages:",
        competenzeDatabases: "Databases:",
        competenzeTools: "Development Tools:",
        competenzeMethodologies: "Methodologies:",
        competenzeCloud: "Cloud:",
        esperienzaTitle: "Work Experience",

        subsection1: "xxxxxxxxxxxxxxxxxxx",
        ss1point1: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        ss1point2: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        ss1point3: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        subsection2: "yyyyyyyyyyyyyyyyyyyy",
        ss2point1: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ss2point2: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",

        istruzioneTitle: "Education",
        certificazioniTitle: "Certifications",
        lingueTitle: "Languages",
        english: "English: C1 (Fluent)",
        italian: "Italian: Native Speaker"
    };

    function changeLanguage(language) {
        const text = language === 'it' ? italianText : englishText;

        document.getElementById('contatti').innerText = text.contatti;
        document.getElementById('linkedin').innerText = text.linkedin;
        document.getElementById('github').innerText = text.github;
        document.getElementById('profilo-title').innerText = text.profiloTitle;
        document.getElementById('profilo-text').innerText = text.profiloText;
        document.getElementById('competenze-title').innerText = text.competenzeTitle;
        document.getElementById('competenze-languages').innerText = text.competenzeLanguages;
        document.getElementById('competenze-databases').innerText = text.competenzeDatabases;
        document.getElementById('competenze-tools').innerText = text.competenzeTools;
        document.getElementById('competenze-methodologies').innerText = text.competenzeMethodologies;
        document.getElementById('competenze-cloud').innerText = text.competenzeCloud;
        document.getElementById('esperienza-title').innerText = text.esperienzaTitle;

        document.getElementById('subsection1-esperienza').innerText = text.subsection1;
        document.getElementById('ss1point1-esperienza').innerText = text.ss1point1;
        document.getElementById('ss1point2-esperienza').innerText = text.ss1point2;
        document.getElementById('ss1point3-esperienza').innerText = text.ss1point3;

        document.getElementById('subsection2-esperienza').innerText = text.subsection2;
        document.getElementById('ss2point1-esperienza').innerText = text.ss2point1;
        document.getElementById('ss2point2-esperienza').innerText = text.ss2point2;

        document.getElementById('istruzione-title').innerText = text.istruzioneTitle;
        document.getElementById('certificazioni-title').innerText = text.certificazioniTitle;
        document.getElementById('lingue-title').innerText = text.lingueTitle;
        document.getElementById('english').innerText = text.english;
        document.getElementById('italian').innerText = text.italian;
    }

    document.getElementById('italian-btn').addEventListener('click', () => changeLanguage('it'));
    document.getElementById('english-btn').addEventListener('click', () => changeLanguage('en'));

    // Impostazione iniziale lingua (italiano)
    changeLanguage('it');
});