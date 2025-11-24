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
* CSS

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
    ├── src/
    │   ├── js/      
    │   │   └── index.js
    │   └── style/  
    │   │   ├── main-style/
    │   │   └── mobile-style/     # Styles for the website (including light/dark themes)
    ├── index.html                # The main HTML file
    └── README.md


### Todo
* remember currently selected theme after reloading page
* set default page theme based on system theme
* optimise theme switching (reduse loading  time)
* optimise fonts not to overlap 
* speed up theme changing 

### Issues
* on smaller screens elements overlap each other (not super serious but still)
    * on main subtext element is on top of section title
* for dark and neon theme some text is unreadable