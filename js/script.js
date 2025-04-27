window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const nome = document.getElementById('nome');
    const typing = document.getElementById('typing');

    const nomeTesto = "Riccardo Morini"; 
    const qualificaTesto = "IT Technician / Software Developer";

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
        header.style.transform = `scale(${scale})`;
        header.style.backdropFilter = `blur(${blur}px)`;
        header.style.webkitBackdropFilter = `blur(${blur}px)`;
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

document.addEventListener('DOMContentLoaded', function () {
    const acc = document.querySelectorAll('.accordion h3');
    acc.forEach(function (element) {
        element.addEventListener('click', function () {
            const panel = this.nextElementSibling;
            panel.classList.toggle('show');
        });
    });
});

// Traduzione
window.addEventListener('DOMContentLoaded', () => {

    const italianText = {
        linkedin: "LinkedIn",
        github: "GitHub",

        profiloTitle: "Profilo",
        profiloText: "Professionista IT con 4 anni di esperienza nella gestione di database, risoluzione di problemi software e supporto tecnico avanzato. Competenze in SQL, Python e automazione dei processi.\nAffronto ogni sfida con entusiasmo, soprattutto quando offre la possibilità di acquisire nuove competenze.",
        
        competenzeTitle: "Competenze Tecniche",
        competenzeLanguages: "Linguaggi di Programmazione:",
        competenzeDatabases: "Database:",
        competenzeTools: "Strumenti di Sviluppo:",
        competenzeMethodologies: "Metodologie:",
        
        esperienzaTitle: "Esperienza Lavorativa",
        subsection1: "Azienda Incas Shaefer (Vigliano Biellese) | Tecnico Software",
        ss1point1: "Identificazione e risoluzione di bachi Software in ambiente di produzione",
        ss1point2: "Supporto tecnico diretto al cliente, da remoto ed in loco",
        ss1point3: "Gestione, analisi ed ottimizzazione di database SQL",
        ss1point4: "Reperibilità notturna e trasferte per fornire assistenza diretta durante operazioni di magazzino straordinarie",
        subsection2: "Azienda Teoresi Group (Monaco di Baviera) | Stagista",
        ss2point1: `Studio del progetto <a href="https://github.com/project-chip/connectedhomeip" target="_blank">CHIP ("Matter")</a>, oggetto di tesi, e sviluppo di soluzioni IoT su RaspberryPi, inerenti al progetto`,
        ss2point2: "Realizzazione di automazioni Python e Schell in ambiente Linux",

        istruzioneTitle: "Istruzione",
        istruzione1: "Diploma di Tecnico Superiore (100/100) - ITS Biotecnologie",
        istruzione2: "Diploma Liceo Scientifico A.Gramsci (81/100) - Scienze Applicate",

        certificazioniTitle: "Certificazioni",
        certification1: `<a href="assets/ScanFirst.pdf" download>First English Certificate</a>`,
        certification2: `Diploma di completamento <a href="assets/Certificate of Achievement - Miami.pdf" download>English course</a>, svolto in Miami (grade C1-2)`,
        certification3: `Attestato di partecipazione all'<a href="assets/ScanHackathlon" download>Hackathlon</a>: progettazione di apparecchiature biomediche`,
        certification4: `Certificato <a href="assets/ScrumFundamentalsCertified-Riccardomorini-916750.pdf" download>Scrum Fundamentals</a>`,
        certification5: `Corso sulla <a href="assets/Attestato corso sicurezza_Morini.pdf" download>Sicurezza</a> dei lavoratori`,
        certification6: `<a href="assets/MoriniPW.odt" download>Tesi</a> conclusiva per lo stage in Teoresi, sede tedesca`,

        lingueTitle: "Lingue",
        german: "Tedesco: livello base",
        english: "Inglese: C1 (Fluente)",
        italian: "Italiano: Madrelingua"
    };

    const englishText = {
        linkedin: "LinkedIn",
        github: "GitHub",

        profiloTitle: "Profile",
        profiloText: "IT professional with 4 years of experience in database management, software troubleshooting, and advanced technical support. Skills in SQL, Python, and process automation.\nI approach every challenge with enthusiasm, especially when it offers a chance to acquire new skills",
        
        competenzeTitle: "Technical Skills",
        competenzeLanguages: "Programming Languages:",
        competenzeDatabases: "Databases:",
        competenzeTools: "Development Tools:",
        competenzeMethodologies: "Methodologies:",

        esperienzaTitle: "Work Experience",
        subsection1: "Incas Shaefer Company (Vigliano Biellese) | Software Technician",
        ss1point1: "Identifying and troubleshooting Software bugs in a production environment",
        ss1point2: "Direct customer technical support, remotely and on-site",
        ss1point3: "SQL database management, analysis and optimization",
        ss1point4: "Nighttime on-call and travel to provide direct assistance during extraordinary warehouse operations",
        subsection2: "Company Teoresi Group (Munich) | Intern",
        ss2point1: `Study of the <a href="https://github.com/project-chip/connectedhomeip" target="_blank">CHIP ("Matter")</a> project, subject of thesis, and development of IoT solutions on RaspberryPi, inherent to the project`,
        ss2point2: "Implementation of Python and Schell automations in Linux environment.",

        istruzioneTitle: "Education",
        istruzione1: "Graduated as Seperior Technician Diploma (100/100) - ITS Biotechnology",
        istruzione2: "Scientific High School Gradiation (81/100) - Applied Science",

        certificazioniTitle: "Certifications",
        certification1: `<a href="assets/ScanFirst.pdf" download>First English</a> Certificate`,
        certification2: `<a href="assets/Certificate of Achievement - Miami.pdf" download>English course</a>Certificate in Miami grade (C1-2)`,
        certification3: `<a href="assets/ScanHackathlon" download>Hackathlon</a>Certification: biomedical equipment design`,
        certification4: `<a href="assets/ScrumFundamentalsCertified-Riccardomorini-916750.pdf" download>Scrum Fundamentals</a> Certification`,
        certification5: `Worker <a href="assets/Attestato corso sicurezza_Morini.pdf" download>Safety Course</a>`,
        certification6: `Final <a href="assets/MoriniPW.odt" download>Thesis</a> for internship in Theoresi, German office`,

        lingueTitle: "Languages",
        german: "German: basic level",
        english: "English: C1 (Fluent)",
        italian: "Italian: Native Speaker"
    };

    function changeLanguage(language) {
        const text = language === 'it' ? italianText : englishText;
    
        // Cambia solo il testo visibile, non l'href dei link
        document.getElementById('linkedin').innerText = text.linkedin;
        document.getElementById('github').innerText = text.github;
    
        document.getElementById('profilo-title').innerText = text.profiloTitle;
        document.getElementById('profilo-text').innerText = text.profiloText;
    
        document.getElementById('competenze-title').innerText = text.competenzeTitle;
        document.getElementById('competenze-languages').innerText = text.competenzeLanguages;
        document.getElementById('competenze-databases').innerText = text.competenzeDatabases;
        document.getElementById('competenze-tools').innerText = text.competenzeTools;
        document.getElementById('competenze-methodologies').innerText = text.competenzeMethodologies;
    
        document.getElementById('esperienza-title').innerText = text.esperienzaTitle;
        document.getElementById('subsection1-esperienza').innerText = text.subsection1;
        document.getElementById('ss1point1-esperienza').innerText = text.ss1point1;
        document.getElementById('ss1point2-esperienza').innerText = text.ss1point2;
        document.getElementById('ss1point3-esperienza').innerText = text.ss1point3;
        document.getElementById('ss1point4-esperienza').innerText = text.ss1point4;
        document.getElementById('subsection2-esperienza').innerText = text.subsection2;
        document.getElementById('ss2point1-esperienza').innerHTML = text.ss2point1;
        document.getElementById('ss2point2-esperienza').innerText = text.ss2point2;
    
        document.getElementById('istruzione-title').innerText = text.istruzioneTitle;
        document.getElementById('istruzione-line1').innerText = text.istruzione1;
        document.getElementById('istruzione-line2').innerText = text.istruzione2;
    
        document.getElementById('certificazioni-title').innerHTML = text.certificazioniTitle;
        document.getElementById('certificazioni-line1').innerHTML = text.certification1;
        document.getElementById('certificazioni-line2').innerHTML = text.certification2;
        document.getElementById('certificazioni-line3').innerHTML = text.certification3;
        document.getElementById('certificazioni-line4').innerHTML = text.certification4;
        document.getElementById('certificazioni-line5').innerHTML = text.certification5;
        document.getElementById('certificazioni-line6').innerHTML = text.certification6;
    
        document.getElementById('lingue-title').innerText = text.lingueTitle;
        document.getElementById('german').innerText = text.german;
        document.getElementById('english').innerText = text.english;
        document.getElementById('italian').innerText = text.italian;
    
    }
    

    document.getElementById('italian-btn').addEventListener('click', () => changeLanguage('it'));
    document.getElementById('english-btn').addEventListener('click', () => changeLanguage('en'));

    // Impostazione iniziale lingua (italiano)
    changeLanguage('it');
});

document.getElementById('italian-btn').addEventListener('click', () => {
    console.log('Cambio lingua a Italiano');
    changeLanguage('it');
});

document.getElementById('english-btn').addEventListener('click', () => {
    console.log('Cambio lingua a Inglese');
    changeLanguage('en');
});