
function ThemeInit() {
    var theme = localStorage.getItem("theme");

    function ObserverTheme() {
        if (theme == undefined) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                changeThemeDark(false);
            } else {
                changeThemeLight(false);
            }
        } else {
            if (theme == "dark") changeThemeDark()
            if (theme == "light") changeThemeLight()
        }
    }
    ObserverTheme();

    function changeThemeDark(save) {
        var body = document.querySelector("body");
        body.classList.add("dark");
        if (save) localStorage.setItem("theme", "dark")
        setTimeout(() => body.style.transition = "all .3s ease", 800)
    }
    function changeThemeLight(save) {
        var body = document.querySelector("body");
        body.classList.remove("dark");
        if (save) localStorage.setItem("theme", "light")
        setTimeout(() => body.style.transition = "all .3s ease", 800);
    }

    function changeThemeAuto() {
        localStorage.removeItem("theme")
        ObserverTheme();
    }

    var lightBtn = document.querySelector(".light_btn");
    var darkBtn = document.querySelector(".dark_btn");
    var autokBtn = document.querySelector(".auto_btn");

    lightBtn.addEventListener("click", changeThemeLight);
    darkBtn.addEventListener("click", changeThemeDark);
    autokBtn.addEventListener("click", changeThemeAuto);
}

ThemeInit();