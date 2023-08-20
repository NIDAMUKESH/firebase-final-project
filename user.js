let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    Order.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart= document.querySelector('.shopping-cart');
document.querySelector('#shoppingcart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    Order.classList.remove('active');
    navbar.classList.remove('active');
    
}

let Order= document.querySelector('.OrderForm');
document.querySelector('#login-btn').onclick = () =>{
    Order.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    Order.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    Order.classList.remove('active');
    navbar.classList.remove('active');
}

const addButton = document.querySelectorAll('.add');
const subButton = document.querySelectorAll('.sub');
const quantityElements = document.querySelectorAll('.quantity');
const priceElements = document.querySelectorAll('.price');
const totalAmountElement = document.querySelector('.total-amount');

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener('click', () => {
        let quantity = parseInt(quantityElements[i].textContent);
        let price = parseFloat(priceElements[i].textContent.slice(1));
        quantity++;
        quantityElements[i].textContent = quantity;
        priceElements[i].textContent = '$' + (price + price).toFixed(2);
        updateTotal();
    });

    subButton[i].addEventListener('click', () => {
        let quantity = parseInt(quantityElements[i].textContent);
        let price = parseFloat(priceElements[i].textContent.slice(1));
        if (quantity > 0) {
            quantity--;
            quantityElements[i].textContent = quantity;
            priceElements[i].textContent = '$' + (price - price).toFixed(2);
            updateTotal();
        }
    });
}

function updateTotal() {
    let total = 0;
    for (let i = 0; i < quantityElements.length; i++) {
        total += parseFloat(priceElements[i].textContent.slice(1)) * parseInt(quantityElements[i].textContent);
    }
    totalAmountElement.textContent = '$' + total.toFixed(2);
}