const carIcon = document.querySelector('.navbar-shopping-cart'); //Para cuando le den click tanto a la imagen del carro como al numero pueda salir el menu desplegable
const detailCarIcon = document.querySelector('.product-detail');

carIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){
    detailCarIcon.classList.toggle('inactive');
}