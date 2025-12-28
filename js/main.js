const menuBurger = document.querySelector('.menu-burger')
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')
const header = document.querySelector('.header')

menuBurger.addEventListener('click', function(){

    menuMobile.classList.toggle('menu-mobile--active');
    menuBurger.classList.toggle('menu-burger--active');

    if (menuMobile.classList.contains('menu-mobile--active')){
        body.classList.add('fixed')
    } else{
        body.classList.remove('fixed')
    }

    if (menuMobile.classList.contains('menu-mobile--active')){
        header.classList.add('active')
    } else{
        header.classList.remove('active')
    }

});
