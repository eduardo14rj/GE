
// function ThemeInit() {
//     var body = document.querySelector("body");
//     var ball = document.querySelector("[switch-ball]")

//     function ObserverTheme() {
//         var theme = localStorage.getItem("theme");
//         if (theme == undefined) {
//             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//                 changeThemeDark();
//             } else {
//                 changeThemeLight();
//             }
//             setBallClass("auto");
//         } else {
//             if (theme == "dark") changeThemeDark()
//             if (theme == "light") changeThemeLight()
//         }
//     }

//     ObserverTheme();

//     function changeThemeDark(save) {
//         body.classList.add("dark");
//         setBallClass("dark")
//         if (save) localStorage.setItem("theme", "dark")
//         setTimeout(() => body.style.transition = "all .3s ease", 800)
//     }

//     function changeThemeLight(save) {
//         body.classList.remove("dark");
//         setBallClass("light")
//         if (save) localStorage.setItem("theme", "light")
//         setTimeout(() => body.style.transition = "all .3s ease", 800);
//     }

//     function changeThemeAuto() {
//         localStorage.removeItem("theme")
//         ObserverTheme();
//         setBallClass("auto")
//     }

//     function setBallClass(classe) {
//         ball.classList.remove.apply(ball.classList, Array.from(ball.classList));
//         ball.classList.add(classe);
//     }

//     var lightBtn = document.querySelector(".light_btn");
//     var darkBtn = document.querySelector(".dark_btn");
//     var autokBtn = document.querySelector(".auto_btn");

//     lightBtn.addEventListener("click", changeThemeLight);
//     darkBtn.addEventListener("click", changeThemeDark);
//     autokBtn.addEventListener("click", changeThemeAuto);
// }

// ThemeInit();

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
                changeThemeDark();
            } else {
                changeThemeLight();
            }
        } else {
            if (theme == "dark") changeThemeDark()
            if (theme == "light") changeThemeLight()
        }
    }
    ObserverTheme();

    function setActive(theme) {
        var span = switchActived.querySelector(".material-symbols-outlined");
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

    function changeThemeDark(save) {
        body.classList.add("dark");
        if (save) localStorage.setItem("theme", "dark")
        setTimeout(() => body.style.transition = "all .3s ease", 800)
        switchDropdown.classList.remove("active");
        setActive("dark");
    }

    function changeThemeLight(save) {
        body.classList.remove("dark");
        if (save) localStorage.setItem("theme", "light")
        setTimeout(() => body.style.transition = "all .3s ease", 800);
        switchDropdown.classList.remove("active");
        setActive("light");
    }

    function changeThemeAuto() {
        localStorage.removeItem("theme")
        ObserverTheme();
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
}
ThemeInit();