// traduzioni
const translations = {
    it: {
      contatti: 'Contatti',
      profilo_title: 'Profilo',
      profilo_text: 'Professionista IT con 4 anni di esperienza nella gestione di database, risoluzione di problemi software e supporto tecnico avanzato. Competenze in SQL, Python e automazione dei processi.',
      competenze_title: 'Competenze Tecniche',
      competenze_list: [
        '<li><strong>Linguaggi di Programmazione:</strong> SQL, Python, JavaScript</li>',
        '<li><strong>Database:</strong> MySQL, PostgreSQL, MongoDB</li>',
        '<li><strong>Strumenti di Sviluppo:</strong> Git, Docker, Jenkins</li>',
        '<li><strong>Metodologie:</strong> Agile, Scrum</li>',
        '<li><strong>Cloud:</strong> AWS, Google Cloud</li>'
      ],
      esperienza_title: 'Esperienza Lavorativa',
      esperienza_list: [
        {
          titolo: 'Azienda XYZ | Tecnico IT',
          descrizione: [
            'Gestione e ottimizzazione di database SQL per migliorare le performance di sistema, riducendo i tempi di risposta del 20%.',
            'Automazione di processi ripetitivi con Python, riducendo i tempi di elaborazione dei dati del 30%.',
            'Supporto tecnico e troubleshooting avanzato per i team di sviluppo.'
          ]
        },
        {
          titolo: 'Azienda ABC | Supporto Tecnico',
          descrizione: [
            'Analisi e risoluzione di incidenti software e gestione di ticket di supporto.',
            'Collaborazione con team di sviluppo per migliorare l\'affidabilità dei sistemi e ridurre il downtime.'
          ]
        }
      ],
      istruzione_title: 'Istruzione',
      istruzione_text: '<strong>Diploma di Tecnico Informatico</strong> - Istituto Tecnico XYZ, 2018',
      certificazioni_title: 'Certificazioni',
      certificazioni_list: [
        '<li>Certificazione AWS Certified Solutions Architect - 2022</li>',
        '<li>Certificazione CompTIA A+ - 2021</li>'
      ],
      lingue_title: 'Lingue',
      lingue_list: [
        '<p><strong>Inglese:</strong> C1 (Fluente)</p>',
        '<p><strong>Italiano:</strong> Madrelingua</p>'
      ]
    },
    en: {
      contatti: 'Contacts',
      profilo_title: 'Profile',
      profilo_text: 'IT professional with 4 years of experience in database management, software troubleshooting, and advanced technical support. Skilled in SQL, Python, and process automation.',
      competenze_title: 'Technical Skills',
      competenze_list: [
        '<li><strong>Programming Languages:</strong> SQL, Python, JavaScript</li>',
        '<li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>',
        '<li><strong>Development Tools:</strong> Git, Docker, Jenkins</li>',
        '<li><strong>Methodologies:</strong> Agile, Scrum</li>',
        '<li><strong>Cloud:</strong> AWS, Google Cloud</li>'
      ],
      esperienza_title: 'Work Experience',
      esperienza_list: [
        {
          titolo: 'Company XYZ | IT Technician',
          descrizione: [
            'Managed and optimized SQL databases to improve system performance, reducing response times by 20%.',
            'Automated repetitive processes with Python, cutting data processing times by 30%.',
            'Provided advanced technical support for development teams.'
          ]
        },
        {
          titolo: 'Company ABC | Technical Support',
          descrizione: [
            'Analyzed and resolved software incidents and managed support tickets.',
            'Collaborated with development teams to improve system reliability and reduce downtime.'
          ]
        }
      ],
      istruzione_title: 'Education',
      istruzione_text: '<strong>IT Technician Diploma</strong> - Technical Institute XYZ, 2018',
      certificazioni_title: 'Certifications',
      certificazioni_list: [
        '<li>AWS Certified Solutions Architect - 2022</li>',
        '<li>CompTIA A+ Certification - 2021</li>'
      ],
      lingue_title: 'Languages',
      lingue_list: [
        '<p><strong>English:</strong> C1 (Fluent)</p>',
        '<p><strong>Italian:</strong> Native speaker</p>'
      ]
    }
  };
  
  function changeLanguage(lang) {
    // testo statico
    document.querySelector('[data-i18n="contatti"]').textContent = translations[lang].contatti;
    document.querySelector('[data-i18n="profilo_title"]').textContent = translations[lang].profilo_title;
    document.querySelector('[data-i18n="profilo_text"]').textContent = translations[lang].profilo_text;
    document.querySelector('[data-i18n="competenze_title"]').textContent = translations[lang].competenze_title;
    // lista competenze
    document.querySelector('[data-i18n="competenze_list"]').innerHTML = translations[lang].competenze_list.join('');
    // esperienza
    const acc = document.querySelector('[data-i18n="esperienza_list"]');
    acc.innerHTML = '';
    translations[lang].esperienza_list.forEach(item => {
      const h3 = document.createElement('h3');
      h3.textContent = item.titolo;
      const panel = document.createElement('div');
      panel.className = 'panel';
      panel.innerHTML = '<ul>' + item.descrizione.map(li => `<li>${li}</li>`).join('') + '</ul>';
      acc.append(h3, panel);
      h3.addEventListener('click', () => panel.classList.toggle('show'));
    });
    // istruzione
    document.querySelector('[data-i18n="istruzione_text"]').innerHTML = translations[lang].istruzione_text;
    // certificazioni
    document.querySelector('[data-i18n="certificazioni_title"]').textContent = translations[lang].certificazioni_title;
    document.querySelector('[data-i18n="certificazioni_list"]').innerHTML = translations[lang].certificazioni_list.join('');
    // lingue
    document.querySelector('[data-i18n="lingue_title"]').textContent = translations[lang].lingue_title;
    document.querySelector('[data-i18n="lingue_list"]').innerHTML = translations[lang].lingue_list.join('');
  }
  
  function init() {
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
  
      function initParticles() {
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
  
      initParticles();
      animate();
  
      window.addEventListener('resize', function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
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
  
      // Gestione cambio lingua
      document.getElementById('btn-it').addEventListener('click', () => changeLanguage('it'));
      document.getElementById('btn-en').addEventListener('click', () => changeLanguage('en'));
  }
  
  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
  } else {
      init();
  }