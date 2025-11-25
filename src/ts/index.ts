window.onload = () => {
    try {
        localStorage.getItem('theme');
    }
    catch (e) {
        let theme: string = "light";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        }
        console.error("LocalStorage is not supported");
        localStorage.setItem('theme', theme);
    }
};