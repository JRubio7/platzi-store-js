const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $hamburguerMenu = document.querySelector('.hamburger-menu');
const $mobileMenu = document.querySelector('.mobile-menu');
const $navShoppingCart = document.querySelector('.navbar-shopping-cart');
const $shoppingCartContainer = document.getElementById('shopping-cart-container');
const $cardsContainer = document.querySelector('.cards-container');
const $productDetailContainer = document.getElementById('product-detail');
const $productDetailCloseIcon = document.querySelector('.product-detail-close');

$menuEmail.addEventListener('click', toggleDesktopMenu);
$hamburguerMenu.addEventListener('click', toggleMobileMenu);
$navShoppingCart.addEventListener('click', toggleShoppingCartContainer);
$productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    $shoppingCartContainer.classList.add('inactive');
    $productDetailContainer.classList.add('inactive');
    $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
   $shoppingCartContainer.classList.add('inactive');
   $productDetailContainer.classList.add('inactive');

    $mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartContainer(){
    $mobileMenu.classList.add('inactive');
    $productDetailContainer.classList.add('inactive');
    $desktopMenu.classList.add('inactive');
    $shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    $shoppingCartContainer.classList.add('inactive');
    $productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    $productDetailContainer.classList.add('inactive');

}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 610,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Mouse',
    price: 60,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Cellphone',
    price: 320,
    image: 'https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Smartwatch',
    price: 150,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 610,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Mouse',
    price: 60,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Cellphone',
    price: 320,
    image: 'https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Smartwatch',
    price: 150,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(array){
    for(product of productList){ // product = element
        const $productCard = document.createElement('div');
        $productCard.classList.add('product-card');
    
        const $productImg = document.createElement('img');
        $productImg.setAttribute('src', product.image);
        $productImg.addEventListener('click', openProductDetailAside);
    
        const $productInfo = document.createElement('div');
        $productInfo.classList.add('product-info');
    
        const $productInfoDetail = document.createElement('div');
    
        const $productPrice = document.createElement('p');
        $productPrice.innerText = `$ ${product.price}`;
    
        const $productName = document.createElement('p');
        $productName.innerText = `${product.name}`;
    
        $productInfoDetail.append($productPrice, $productName);
    
    
        const $productFigure = document.createElement('figure'); 
        const $figureImg = document.createElement('img');
        $figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        $productFigure.appendChild($figureImg);
    
        $productInfo.append($productInfoDetail, $productFigure);
    
        $productCard.append($productImg, $productInfo);
    
        $cardsContainer.appendChild($productCard);
     
    }

}

renderProducts(productList);
