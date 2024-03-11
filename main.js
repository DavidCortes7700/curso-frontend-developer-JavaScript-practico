//variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//llamadas para eventos
menuEmail.addEventListener('click', toggleDesktopMenu);


//Funciones
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}