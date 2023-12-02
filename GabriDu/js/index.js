//botão ativar menu no modo mobile
function toggleMenu() {
    var overlay = document.querySelector(".overlay");
    var btnMobile = document.querySelector(".navbar-mobile");
    var btnMobile_span = document.querySelector(".navbar-mobile .material-symbols-outlined")
    var navbar = document.querySelector("#navbar .container");
    var links = navbar.querySelectorAll("a[href^='#']");

    links.forEach(e => {
        e.addEventListener("click", () => {
            if (navbar.classList.contains("act")) {
                navbar.classList.remove("act")
                toggleIcon();
            }
        })
    })
    function toggleIcon() {
        if (navbar.classList.contains("act"))
            btnMobile_span.textContent = "close";
        else
            btnMobile_span.textContent = "menu";
    }

    btnMobile.addEventListener("click", () => {
        navbar.classList.toggle("act");
        toggleIcon();
    });
    overlay.addEventListener("click", () => {
        if (navbar.classList.contains("act")) {
            navbar.classList.remove("act")
            toggleIcon();
        }
    })
}
toggleMenu();



//Envio de email: Tela de contato
function enviarMensagem() {
    var form = document.getElementById("contactForm");
    var name = form.querySelector("input[name='Nome']");
    var email = form.querySelector("input[name='Email']");
    var message = form.querySelector("textarea[name='Mensagem']");
    const structure = `
    Nome da pessoa: ${name.value},
    Email: ${email.value},
    Mensagem: ${message.value}
    `;
    window.open(`mailto:eduardolimaoliveira@souunisuam.com.br?subject=Message&body=${structure}`);
}