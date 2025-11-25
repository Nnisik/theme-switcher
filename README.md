# Theme switcher
Stress releaf and consentration boost advises web page with different themes.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Known Issues](#known-issues)

## Technologies used
* HTML
* Sass
* JavaScript
* TypeScript

## Getting Started
To get a local copy of this project up and running, follow these steps:
1. **Clone the repository:**
   ```bash
   https://github.com/Nnisik/theme-switcher.git
2. **Navigate to the project directory:**
   ```bash
   cd theme-switcher
3. **Generate css file for project:**
   ```bash
   sass --watch src/css/style.scss dist/style.css
4. **Run <i>index.html</i> in your local browser**

## Folder Structure
    ```bash
    portfolio-project/          
    ├── assets/                           
    │   └── images/  
    │   │   ├── dark-theme/
    │   │   ├── light-theme/
    │   │   └── neon-theme/   
    ├── dist/                           
    │   └── index.js              # JavaScript code generated from TypeScript code       
    ├── node_modules/                      
    ├── src/
    │   ├── js/      
    │   │   └── index.js
    │   ├── json/      
    │   ├──  style/  
    │   │   ├── main-style/
    │   │   └── mobile-style/     # Styles for the website (including light/dark themes)
    │   ├── ts/
    │   │   └── index.ts 
    ├── index.html                # The main HTML file
    └── README.md


### Todo
* set default page theme based on system theme
* optimise theme switching (reduse loading time)
* speed up theme changing 

### Issues
*currently everything is fixed