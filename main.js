const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $hamburguerMenu = document.querySelector('.hamburger-menu');
const $mobileMenu = document.querySelector('.mobile-menu');
const $navShoppingCart = document.querySelector('.navbar-shopping-cart');
const $productDetail = document.querySelector('.product-detail');

$menuEmail.addEventListener('click', toggleDesktopMenu);
$hamburguerMenu.addEventListener('click', toggleMobileMenu);
$navShoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu(){
    $productDetail.classList.add('inactive');

    $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
   $productDetail.classList.add('inactive');

    $mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
   $mobileMenu.classList.add('inactive');

    $productDetail.classList.toggle('inactive');
}
