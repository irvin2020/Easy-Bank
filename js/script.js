const menuIcon = document.getElementById('header__icon')
const menu = document.getElementById('header__nav');
const menuBg = document.getElementById('nav-bg');
function menuBgToggle(){
    menuBg.classList.toggle('nav-bg--toggle');
    menu.classList.toggle('header__nav--toggle');
    if(menuIcon.attributes.src.textContent == 'images/icon-hamburger.svg'){
        menuIcon.setAttribute('src', 'images/icon-close.svg');
    } else {
        menuIcon.setAttribute('src', 'images/icon-hamburger.svg');
    }
}
menuIcon.addEventListener('click', menuBgToggle);