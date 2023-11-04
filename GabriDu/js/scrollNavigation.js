document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: 'smooth'
        });
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

