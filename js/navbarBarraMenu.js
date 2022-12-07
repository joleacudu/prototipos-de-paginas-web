const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIconoMobile = document.querySelector(".menu-barra");
const menuMobile = document.querySelector(".mobile-menu");

const carIcon = document.querySelector('.navbar-shopping-cart'); //Para cuando le den click tanto a la imagen del carro como al numero pueda salir el menu desplegable
const detailCarIcon = document.querySelector('#shoppingCartContainer');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuIconoMobile.addEventListener('click', toggleMobileMenu);

carIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    //para cerrar el menu del correo
    const detailCarIconClosed = menuMobile.classList.contains('incative');
    if(!detailCarIconClosed){
        detailCarIcon.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    //para cerrar el carrito de compra cada vez que abramos el menu mobile
    const detailCarIconClosed = menuMobile.classList.contains('incative');
    if(!detailCarIconClosed){
        detailCarIcon.classList.add('inactive');
    }

     // para abrir y cerrar el menu
    menuMobile.classList.toggle("inactive");
};

function toggleCarritoAside(){
    //para cerrar el menu mobile o el menu de escritorio cada vez que abramos el carrito de compra
    const menuMobileClosed = menuMobile.classList.contains('incative');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!menuMobileClosed || !desktopMenuClosed){
        menuMobile.classList.add('inactive');
        desktopMenu.classList.add('inactive')
    }

    // para abrir y cerrar el carrito
    detailCarIcon.classList.toggle('inactive');
    
};



