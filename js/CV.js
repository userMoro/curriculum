window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const body = document.body;
  const sections = document.querySelectorAll('section');
  const footer = document.querySelector('footer');

  // Attiva intro
  header.classList.add('intro');
  body.classList.add('intro-mode');

  // Dopo 2 secondi, rimuovi l'intro e avvia le animazioni delle sezioni
  setTimeout(() => {
      header.classList.remove('intro');
      body.classList.remove('intro-mode');

      // Fa apparire le sezioni una alla volta
      sections.forEach((section, index) => {
          setTimeout(() => {
              section.classList.add('appear');
          }, index * 500);
      });

      // Mostra il footer alla fine
      setTimeout(() => {
          footer.style.display = 'block';
      }, sections.length * 200 + 500);

  }, 2000);
});

// Aggiungere animazioni di apparizione durante lo scorrimento
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  sections.forEach(function (section) {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 150) {
          section.classList.add('appear');
      } else {
          section.classList.remove('appear');
      }
  });
});

// Funzione per aprire/chiudere l'accordion
const acc = document.querySelectorAll('.accordion h3');
acc.forEach(function (element) {
  element.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
  });
});
