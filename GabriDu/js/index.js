//botão ativar menu no modo mobile
function toggleMenu() {
    var overlay = document.querySelector(".overlay");
    var btnMobile = document.querySelector(".navbar-mobile");
    var btnMobile_span = document.querySelector(".navbar-mobile .material-symbols-outlined")
    var navbar = document.querySelector("#navbar .container");
    var links = navbar.querySelectorAll("a[href^='#']");

    links.forEach(e => {
        e.addEventListener("click", () => {
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active")
                toggleIcon();
            }
        })
    })
    function toggleIcon() {
        if (navbar.classList.contains("active"))
            btnMobile_span.textContent = "close";
        else
            btnMobile_span.textContent = "menu";
    }

    btnMobile.addEventListener("click", () => {
        navbar.classList.toggle("active");
        toggleIcon();
    });
    overlay.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active")
            toggleIcon();
        }
    })
}
toggleMenu();
