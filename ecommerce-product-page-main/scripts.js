const toggleMenu = document.getElementsByClassName('toggle-menu')[0];
const toggleMenuImgs = document.querySelectorAll('.toggle-menu-img');
const menu = document.querySelector('nav');
const left = document.querySelector('.swipe-left');
const right = document.querySelector('.swipe-right');
const images = document.querySelectorAll('.product-image');
const increase = document.querySelector('.increase-item');
const decrease = document.querySelector('.reduce-item');
const amount = document.querySelector('.item-count');
const addToCart = document.querySelector('.add-to-cart');
const cart = document.querySelector('.cart');
const shopingCart = document.querySelector('.shoping-cart');
const emptyShoppingCartCase = document.querySelector('.cart-content-empty-case');
const hasItemsShoppingCartCase = document.querySelector('.cart-content-full-case');
const body = document.querySelector('body');
const thumbnailImages = document.querySelectorAll('.product-thumbnail');
let selectedImageOrder = 0;
let selectedAmount = 0;
let addedAmount = 0;


toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleMenuImgs.forEach(element => {
        element.classList.toggle('hide');
        element.classList.toggle('show');
    });
});

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'NAV'){
        toggleMenuImgs.forEach(element => {
            element.classList.toggle('hide');
            element.classList.toggle('show');
        });
        menu.classList.remove('open');
    } 
} );

left.addEventListener('click', () => {
    if (selectedImageOrder > 0) {
        selectedImageOrder--;
    }else {
        selectedImageOrder = images.length - 1;
    }
    images.forEach((image) => {
        image.classList.remove('show');
        image.classList.add('hide');
    });
    images[selectedImageOrder].classList.remove('hide');
    images[selectedImageOrder].classList.add('show');
});

right.addEventListener('click', () => {
    if (selectedImageOrder < images.length - 1) {
        selectedImageOrder++;
    }else {
        selectedImageOrder = 0;
    }
    images.forEach((image) => {
        image.classList.remove('show');
        image.classList.add('hide');
    });
    images[selectedImageOrder].classList.remove('hide');
    images[selectedImageOrder].classList.add('show');
});


increase.addEventListener('click', () => {
    selectedAmount++;
    amount.textContent = selectedAmount;
});

decrease.addEventListener('click', () => {
    if (selectedAmount > 0) {
        selectedAmount--;
        amount.textContent = selectedAmount;
    }
});

addToCart.addEventListener('click', () => {
    addedAmount += selectedAmount;
    selectedAmount = 0;
    amount.textContent = selectedAmount;
});

cart.addEventListener('click', () => {
    if(addedAmount > 0) {
        emptyShoppingCartCase.style.display = 'none';
        hasItemsShoppingCartCase.style.display = 'block';
    }else {
        emptyShoppingCartCase.style.display = 'flex';
        hasItemsShoppingCartCase.style.display = 'none';
    }
    shopingCart.classList.toggle('show');
});



thumbnailImages.forEach((thumbnailImage, index) => {
    thumbnailImage.addEventListener('click', () => {
        images.forEach((image) => {
            image.classList.remove('show');
            image.classList.add('hide');
        });
        images[index].classList.remove('hide');
        images[index].classList.add('show');
    });
});
