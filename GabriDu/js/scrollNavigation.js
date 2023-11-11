document.querySelectorAll('a').forEach(anchor => {
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


// Função para verificar se a seção está visível na tela
function isElementOnScreen(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll(){
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach((section, index) => {
        if (isElementOnScreen(section)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
}

// Ativar o item do menu quando a seção correspondente estiver visível
window.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);

