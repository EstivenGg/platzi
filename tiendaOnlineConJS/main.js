const menuEmail = document.querySelector('.navbar-email');
const destokpMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoCompras = document.querySelector('.navbar-shopping-cart')
const asideShpping = document.querySelector('#shopping-cart-cont')
const cardsContainer = document.querySelector('.cards-container')
const cartaVoladora= document.querySelector ('#product-detail-cont')
const cerrarCartaVoladora = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoCompras.addEventListener('click', toggleCarrito)
cerrarCartaVoladora.addEventListener('click',cerrarCarta )

function toggleDesktopMenu() {
    //Asi lo hice yo  >:c
    /*     if(destokpMenu.classList.contains ('inactive')){
           
            destokpMenu.classList.remove('inactive');
    
        }else{
           
            destokpMenu.classList.add('inactive');
        } */

    //Asi era:
    if (!asideShpping.classList.contains('inactive')) {
        asideShpping.classList.toggle('inactive');
    }else if(!cartaVoladora.classList.contains('inactive')){
        cartaVoladora.classList.toggle('inactive')
    }
    destokpMenu.classList.toggle('inactive');


};

function toggleMobileMenu() {
    if (!asideShpping.classList.contains('inactive')) {
        asideShpping.classList.toggle('inactive');
    }else if(!cartaVoladora.classList.contains('inactive')){
        cartaVoladora.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    } else if (!destokpMenu.classList.contains('inactive')){
        destokpMenu.classList.toggle('inactive');
    } else if(!cartaVoladora.classList.contains('inactive')){
        cartaVoladora.classList.toggle('inactive')
    }
    asideShpping.classList.toggle('inactive');
}

function abrirCarta (){
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    } else if (!destokpMenu.classList.contains('inactive')){
        destokpMenu.classList.toggle('inactive');
    }else  if (!asideShpping.classList.contains('inactive')) {
        asideShpping.classList.toggle('inactive');
    }
    cartaVoladora.classList.remove('inactive')
}
 function cerrarCarta(){
    cartaVoladora.classList.add('inactive')
 }

const productList = [];


productList.push({
    name:'Bike',
    price:'120',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Pantalla',
    price:'1000',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Pc',
    price:'600',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProdcuts(arr) {
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img1= document.createElement('img')
        img1.setAttribute('src', product.img)
        
        const productinfo=document.createElement('div')
        productinfo.classList.add('product-info')
        
    
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const figure = document.createElement('figure')
        const addCart= document.createElement('img')
        addCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(addCart)
        productinfo.appendChild(productInfoDiv);
        productinfo.appendChild(figure);
        productCard.appendChild(img1)
        productCard.appendChild(productinfo)
        productCard.addEventListener('click', abrirCarta)
        cardsContainer.appendChild(productCard)
    }
}

renderProdcuts (productList)