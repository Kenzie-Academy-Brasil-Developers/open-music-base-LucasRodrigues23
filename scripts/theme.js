/* Desenvolva sua lógica aqui ... */
const darkMode = () => {
const buttonDarkMode = document.querySelector('#button_dark_mode');

if (localStorage.getItem('data-theme') == 'dark') {
    buttonDarkMode.checked == true;
}

buttonDarkMode.addEventListener('change', () =>{
    if (!buttonDarkMode.checked) {
        changeThemeLight()
    } else {
        changeThemeDark()
    }
})
}
darkMode()


const changeThemeDark = () => {
    let darkIcon = document.querySelector('#dark_mode_icon')
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    darkIcon.src = "../../assets/img/sun.png"
}

const changeThemeLight = () => {
    let darkIcon = document.querySelector('#dark_mode_icon')
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    darkIcon.src = "../../assets/img/moon.png"
}

const localTheme = () => {
    let darkIcon = document.querySelector('#dark_mode_icon')
    let theme = localStorage.getItem('data-theme');
    if (theme == 'dark') {
        changeThemeDark()
        darkIcon.src = "../../assets/img/sun.png"
    }
}
localTheme()