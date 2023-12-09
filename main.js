const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');



menuEmail.addEventListener('click',toggleDesktopMenu);
mobileBurguer.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleProductDetail);

function toggleDesktopMenu(){
        const isProductDetailClose  = asideProductDetail.classList.contains('inactive');

        if (!isProductDetailClose){
                asideProductDetail.classList.add('inactive');
        }
        desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
        const isProductDetailClose  = asideProductDetail.classList.contains('inactive');

        if (!isProductDetailClose){
                asideProductDetail.classList.add('inactive');
        }
        mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
        const isMobileClosed = mobileMenu.classList.contains('inactive');
        const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

        if (!isDesktopMenuClosed){
                desktopMenu.classList.add('inactive');
        }

        if (!isMobileClosed){
                mobileMenu.classList.add('inactive');
        }
        asideProductDetail.classList.toggle('inactive');
      
}