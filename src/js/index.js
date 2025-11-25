function setNewTheme(theme) {
    localStorage.setItem('theme', theme);

    fetch('./public/json/data-themes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            else {
                console.log('Response OK:', response.status);
            }
            return response.json()})
        .then(data => {
            console.log('Loaded JSON:', data);
            console.log("Used theme: ", data[theme]);

            document.querySelector(":root").style.setProperty("--text-color", data[theme].textColor);
            document.querySelector(":root").style.setProperty("--bg-color", data[theme].backgroundColor);
            document.querySelector(":root").style.setProperty("--theme-color", data[theme].themeColor);
            document.querySelector(":root").style.setProperty("--acsent-color", data[theme].acsentColor);

            colorPalett.images.forEach((imageSrc, index) => {
                document.getElementById(`img-${index + 1}`).src = "./assets/images/" + theme + theme.imageSrc;
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener("DOMContentLoaded", () => {

    setNewTheme(localStorage.getItem('theme'));

    document.getElementById("ligth-theme-switch").onclick = () => {
        setNewTheme("light");
    }

    document.getElementById("dark-theme-switch").onclick = () => {
        setNewTheme("dark");
    }

    document.getElementById("neon-theme-switch").onclick = () => {
        setNewTheme("neon");
    }
});