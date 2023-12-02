document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        const offset = 120; // Substitua 50 pelo valor de deslocamento desejado em pixels
        const duration = 140; // Tempo de animação em milissegundos
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;

            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);

            window.scrollTo({
                top: window.scrollY + (targetPosition - window.scrollY) * percent,
                behavior: 'smooth'
            });

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    });
});


// // Função para verificar se a seção está visível na tela

(function() {
    'use strict';
  
    var section = document.querySelectorAll("section[id]");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition + 121) {
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
  })();
