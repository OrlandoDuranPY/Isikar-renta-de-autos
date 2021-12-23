//Variables
const navbar = document.querySelector('#navbar');

//Eventos

//Scroll Navbar
cargarEventos();

function cargarEventos(){
    window.addEventListener("scroll", navbarScroll);
}


//Funciones
function navbarScroll(){
    if(window.scrollY > 0){
        navbar.classList.add("nav-fixed");
    }else{
        navbar.classList.remove("nav-fixed");
    }
}