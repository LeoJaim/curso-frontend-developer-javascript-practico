const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.getElementById("shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container');



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

const productList = []; //array de productos, q se completaría con una API a la base de datos

productList.push({
        name: 'Bike',
        prize: 133,
        Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
        name: 'Display',
        prize: 230,
        Image: 'https://images.philips.com/is/image/PhilipsConsumer/196V3LAB5_55-IMS-es_AR?$jpglarge$&wid=960',
});
productList.push({
        name: 'Mac',
        prize: 1100,
        Image: 'https://rossellimac.es/cdn/shop/files/mac_S032023MDT.png',
});

function renderProducts(prdList){
        for (product of prdList) {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
        
                const productImg = document.createElement('img');
                productImg.setAttribute('src',product.Image);
        
                const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
        
                const productInfoDiv = document.createElement('div');
        
                const productPrice = document.createElement('p');
                productPrice.innerText = '$' + product.prize;
                const productName = document.createElement('p');
                productName.innerText = product.name;
        
                productInfoDiv.appendChild(productPrice);
                productInfoDiv.appendChild(productName);
        
                const productInfoFigure = document.createElement('figure');
                const productImgCart = document.createElement('img');
                productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
                //meto los objets HTML en los padres
                productInfoFigure.appendChild(productImgCart);
        
                productInfo.appendChild(productInfoDiv);
                productInfo.appendChild(productInfoFigure);
        
                productCard.appendChild(productImg);
                productCard.appendChild(productInfo);
                cardsContainer.appendChild(productCard);
        }
}

renderProducts(productList);
