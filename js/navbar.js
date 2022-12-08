const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIconoMobile = document.querySelector(".menu-barra");
const menuMobile = document.querySelector(".mobile-menu");

const carIcon = document.querySelector('.navbar-shopping-cart'); //Para cuando le den click tanto a la imagen del carro como al numero pueda salir el menu desplegable
const detailCarIcon = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container'); //se llama este elemento para agregarlo al html mediante js con appendChild
const productDetail = document.querySelector('#productDetail');
const closeProductDetail = document.querySelector('.product-detail-close');

const productList = [];

menuEmail.addEventListener('click', toggleDesktopMenu);

menuIconoMobile.addEventListener('click', toggleMobileMenu);

carIcon.addEventListener('click', toggleCarritoAside);

closeProductDetail.addEventListener('click', cerrarVentanaEmergenteProductDetail);

function toggleDesktopMenu(){
    //para cerrar el menu del correo
    const detailCarIconClosed = menuMobile.classList.contains('incative');
    const productDetailClosed =productDetail.classList.contains('incative');
    
    if(!detailCarIconClosed || !productDetailClosed){
        detailCarIcon.classList.add('inactive');
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    //para cerrar el carrito de compra cada vez que abramos el menu mobile
    const detailCarIconClosed = menuMobile.classList.contains('incative');
    const productDetailClosed =productDetail.classList.contains('incative');

    if(!detailCarIconClosed || !productDetailClosed){
        detailCarIcon.classList.add('inactive');
        productDetail.classList.add('inactive');
    }

     // para abrir y cerrar el menu
    menuMobile.classList.toggle("inactive");
};

function toggleCarritoAside(){
    //para cerrar el menu mobile o el menu de escritorio cada vez que abramos el carrito de compra
    const menuMobileClosed = menuMobile.classList.contains('incative');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const productDetailClosed =productDetail.classList.contains('incative');
    if(!menuMobileClosed || !desktopMenuClosed || !productDetailClosed){
        menuMobile.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }

    // para abrir y cerrar el carrito
    detailCarIcon.classList.toggle('inactive');
    
};

//para renderizar los productor y verlos en la pagina de inicio
function renderProducts(array){
    for(product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)
        productImg.addEventListener('click', abrirVentanaEmergenteProductDetail) //para la ventana de los detalles del producto
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info-buy')
    
        const priceAndName = document.createElement('div')
        const name = document.createElement('p')
        name.innerText = product.name
        const price = document.createElement('p')
        price.innerText = '$'+product.price
        
        const figure = document.createElement('figure')
        const figureImg = document.createElement('img')
        figureImg.setAttribute('src', './logos e iconos/Icons/bt_add_to_cart.svg')
        
        figure.appendChild(figureImg)
    
        priceAndName.appendChild(name)
        priceAndName.appendChild(price)
    
        productInfo.appendChild(priceAndName)
        productInfo.appendChild(figure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    };
};

//ventana emergente para ver los detalles del producto para agregarlo al carrito de compras
function abrirVentanaEmergenteProductDetail(){
    const detailCarIconClosed = menuMobile.classList.contains('incative');
    const menuMobileClosed = menuMobile.classList.contains('incative');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!detailCarIconClosed || !menuMobileClosed || !desktopMenuClosed){
        detailCarIcon.classList.add('inactive');
        menuMobile.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.remove('inactive')
};

function cerrarVentanaEmergenteProductDetail(){
    productDetail.classList.add('inactive')
};

productList.push({
    name: 'Bike',
    price: 320,
    Image: 'https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg'
});
productList.push({
    name: 'Tv',
    price: 520,
    Image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/03/xiaomi-mi-tv-4s-65-1903953.jpg?tf=1080x'
});
productList.push({
    name: 'Computador',
    price: 3200,
    Image: 'https://i.linio.com/p/7385a48f126c512a9b29f21074307b53-product.webp'
});

renderProducts(productList)


