const cardsContainer = document.querySelector('.cards-container') //se llama este elemento para agregarlo al html mediante js con appendChild

const productList = [];

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

function renderProducts(array){
    for(product of array){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)
    
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
}

renderProducts(productList)

//product detail