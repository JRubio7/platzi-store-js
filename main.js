const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $hamburguerMenu = document.querySelector('.hamburger-menu');
const $mobileMenu = document.querySelector('.mobile-menu');

$menuEmail.addEventListener('click', toggleDesktopMenu);
$hamburguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    $mobileMenu.classList.toggle('inactive');
}


