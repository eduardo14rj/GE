
function ThemeInit() {
    var body = document.querySelector("body");
    var ball = document.querySelector("[switch-ball]")
    
    function ObserverTheme() {
        var theme = localStorage.getItem("theme");
        if (theme == undefined) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                changeThemeDark();
            } else {
                changeThemeLight();
            }
            setBallClass("auto");
        } else {
            if (theme == "dark") changeThemeDark()
            if (theme == "light") changeThemeLight()
        }
    }

    ObserverTheme();

    function changeThemeDark(save) {
        body.classList.add("dark");
        setBallClass("dark")
        if (save) localStorage.setItem("theme", "dark")
        setTimeout(() => body.style.transition = "all .3s ease", 800)
    }

    function changeThemeLight(save) {
        body.classList.remove("dark");
        setBallClass("light")
        if (save) localStorage.setItem("theme", "light")
        setTimeout(() => body.style.transition = "all .3s ease", 800);
    }

    function changeThemeAuto() {
        localStorage.removeItem("theme")
        ObserverTheme();
        setBallClass("auto")
    }

    function setBallClass(classe) {
        ball.classList.remove.apply(ball.classList, Array.from(ball.classList));
        ball.classList.add(classe);
    }

    var lightBtn = document.querySelector(".light_btn");
    var darkBtn = document.querySelector(".dark_btn");
    var autokBtn = document.querySelector(".auto_btn");

    lightBtn.addEventListener("click", changeThemeLight);
    darkBtn.addEventListener("click", changeThemeDark);
    autokBtn.addEventListener("click", changeThemeAuto);
}

ThemeInit();