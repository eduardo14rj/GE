function ThemeInit() {
    var body = document.querySelector("body");
    var switchActived = document.querySelector(".switch-actived");
    var switchDropdown = document.querySelector(".switch-dropdown");

    var btn_switch_light = document.querySelector(".switch-light");
    var btn_switch_dark = document.querySelector(".switch-dark");
    var btn_switch_auto = document.querySelector(".switch-auto");

    function ObserverTheme() {
        var theme = localStorage.getItem("theme");
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


    function setActive(theme, save = true) {
        var span = switchActived.querySelector(".material-symbols-outlined");
        if (save) {
            switch (theme) {
                case "light":
                    span.textContent = "light_mode";
                    break;
                case "dark":
                    span.textContent = "dark_mode";
                    break;
                default:
                    span.textContent = "tonality";
                    break;
            }
        }
    }

    function switchsetActive(theme) {
        switch (theme) {
            case "dark":
                btn_switch_auto.classList.remove("active");
                btn_switch_light.classList.remove("active");
                btn_switch_dark.classList.add("active");
                break;
            case "light":
                btn_switch_auto.classList.remove("active");
                btn_switch_light.classList.add("active");
                btn_switch_dark.classList.remove("active");
                break;
            case "auto":
                btn_switch_auto.classList.add("active");
                btn_switch_light.classList.remove("active");
                btn_switch_dark.classList.remove("active");
                break;
        }
    }

    function changeThemeDark(save = true) {
        body.classList.add("dark");
        if (save) {
            switchsetActive("dark");
            localStorage.setItem("theme", "dark")
        } else {
            switchsetActive("auto");
            setActive("auto", true);
        }
        setTimeout(() => body.style.transition = "all .3s ease", 800)
        switchDropdown.classList.remove("active");
        setActive("dark", save);
    }

    function changeThemeLight(save = true) {
        body.classList.remove("dark");
        if (save) {
            switchsetActive("light");
            localStorage.setItem("theme", "light")
        } else switchsetActive("auto");
        setTimeout(() => body.style.transition = "all .3s ease", 800);
        switchDropdown.classList.remove("active");
        setActive("light", save);
    }

    function changeThemeAuto() {
        localStorage.removeItem("theme")
        ObserverTheme();
        switchsetActive("auto")
        switchDropdown.classList.remove("active");
        setActive("auto");
    }

    //Abrir o dropdown
    switchActived.addEventListener("click", () => {
        switchDropdown.classList.toggle("active");
    })

    btn_switch_light.addEventListener("click", changeThemeLight);
    btn_switch_dark.addEventListener("click", changeThemeDark);
    btn_switch_auto.addEventListener("click", changeThemeAuto);
    ObserverTheme();
}
ThemeInit();