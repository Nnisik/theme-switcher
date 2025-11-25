function setLigthTheme() {
    // setting ligth color theme
    document.querySelector(":root").style.setProperty("--text-color", "#222430");
    document.querySelector(":root").style.setProperty("--bg-color", "#f7f7f7");
    document.querySelector(":root").style.setProperty("--theme-color", "#d2a5fd");
    document.querySelector(":root").style.setProperty("--acsent-color", "#7380f5");
    // setting images for ligth theme
    document.getElementById("img-1").src = "./assets/images/ligth-theme/kobu-agency-3hWg9QKl5k8-unsplash.jpg";
    document.getElementById("img-2").src = "./assets/images/ligth-theme/toa-heftiba-DakDfhDHMSA-unsplash.jpg";
    document.getElementById("img-3").src = "./assets/images/ligth-theme/tyler-nix-VZEj0iepzKA-unsplash.jpg";
    document.getElementById("img-4").src = "./assets/images/ligth-theme/monika-grabkowska-TAj4X5-eRqE-unsplash.jpg";
    document.getElementById("img-5").src = "./assets/images/ligth-theme/maddison-mcmurrin-GDumtPpJsT4-unsplash.jpg";

    localStorage.setItem('theme', 'light');
}

function setDarkTheme() {
    // setting dark theme
    document.querySelector(":root").style.setProperty("--text-color", "#f7f7f7");
    document.querySelector(":root").style.setProperty("--bg-color", "#222430");
    document.querySelector(":root").style.setProperty("--theme-color", "#d6ffec");
    document.querySelector(":root").style.setProperty("--acsent-color", "#bdff97");
    // setting dark theme images
    document.getElementById("img-1").src = "./assets/images/dark-theme/dose-juice-sTPy-oeA3h0-unsplash.jpg";
    document.getElementById("img-2").src = "./assets/images/dark-theme/kevin-mccutcheon-TcSckNRL9J8-unsplash.jpg";
    document.getElementById("img-3").src = "./assets/images/dark-theme/alabaster-co-UtRyYXcbK6A-unsplash.jpg";
    document.getElementById("img-4").src = "./assets/images/dark-theme/szabo-viktor-28ZbKOWiZfs-unsplash.jpg";
    document.getElementById("img-5").src = "./assets/images/dark-theme/tri-vo-R2rfHmSsh0M-unsplash.jpg";

    localStorage.setItem('theme', 'dark');
}

function setNeonTheme() {
    // setting neon theme
    document.querySelector(":root").style.setProperty("--text-color", "#28ff69;");
    document.querySelector(":root").style.setProperty("--bg-color", "#222430");
    document.querySelector(":root").style.setProperty("--theme-color", "#00ff4c");
    document.querySelector(":root").style.setProperty("--acsent-color", "#fffb2c");
    // setting images for neon theme
    document.getElementById("img-1").src = "./assets/images/neon-theme/trail-5yOnGsKUNGw-unsplash.jpg";
    document.getElementById("img-2").src = "./assets/images/neon-theme/daniel-apodaca-NwCIEX2UIL0-unsplash.jpg";
    document.getElementById("img-3").src = "./assets/images/neon-theme/jordan-mcdonald-xLG3BBiuT1Q-unsplash.jpg";
    document.getElementById("img-4").src = "./assets/images/neon-theme/dose-juice-Zvha13RXnZY-unsplash.jpg";
    document.getElementById("img-5").src = "./assets/images/neon-theme/asterisk-kwon-q_gjDWf9ths-unsplash.jpg";

    localStorage.setItem('theme', 'neon');
}

document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            setLigthTheme();
        }
        else if (theme === 'dark') {
            setDarkTheme();
        }
        else if (theme === 'neon') {
            setNeonTheme();
        }

    document.getElementById("ligth-theme-switch").onclick = () => {
        setLigthTheme();
    }

    document.getElementById("dark-theme-switch").onclick = () => {
        setDarkTheme();
    }

    document.getElementById("neon-theme-switch").onclick = () => {
        setNeonTheme();
    }
});