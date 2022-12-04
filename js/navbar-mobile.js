const menuIconoMobile = document.querySelector(".menu-barra");
const menuMobile = document.querySelector(".mobile-menu");

menuIconoMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    menuMobile.classList.toggle("inactive")
}

