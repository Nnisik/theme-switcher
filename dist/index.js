"use strict";
window.onload = () => {
    try {
        localStorage.getItem('theme');
    }
    catch (e) {
        console.error("LocalStorage is not supported");
        localStorage.setItem('theme', 'light');
    }
};
