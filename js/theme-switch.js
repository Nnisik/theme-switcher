document.getElementById("ligth-theme-switch").onclick = () => {
    document.querySelector(":root").style.setProperty("--text-color", "#222430");
    document.querySelector(":root").style.setProperty("--bg-color", "#f7f7f7");
    document.querySelector(":root").style.setProperty("--theme-color", "#d2a5fd");
    document.querySelector(":root").style.setProperty("--acsent-color", "#7380f5");
}

document.getElementById("dark-theme-switch").onclick = () => {
    document.querySelector(":root").style.setProperty("--text-color", "#f7f7f7");
    document.querySelector(":root").style.setProperty("--bg-color", "#222430");
    document.querySelector(":root").style.setProperty("--theme-color", "#d6ffec");
    document.querySelector(":root").style.setProperty("--acsent-color", "#bdff97");
}

document.getElementById("neon-theme-switch").onclick = () => {
    document.querySelector(":root").style.setProperty("--text-color", "#28ff69;");
    document.querySelector(":root").style.setProperty("--bg-color", "#222430");
    document.querySelector(":root").style.setProperty("--theme-color", "#00ff4c");
    document.querySelector(":root").style.setProperty("--acsent-color", "#fffb2c");
}
