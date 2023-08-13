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

const boxes = document.querySelectorAll('.box');
const totalElement = document.querySelector('.total');

let total = 105.00; // Initial total value

boxes.forEach(box => {
    const priceElement = box.querySelector('.price');
    const quantityElement = box.querySelector('.quantity');
    const addButton = box.querySelector('.add');
    const subButton = box.querySelector('.sub');

    let price = parseFloat(priceElement.textContent.replace('$', ''));
    let quantity = 1;

    addButton.addEventListener('click', () => {
        price *= 2;
        quantity++;
        total += price;
        updateUI();
    });

    subButton.addEventListener('click', () => {
        if (quantity > 1) {
            price /= 2;
            quantity--;
            total -= price;
            updateUI();
        }
    });

    function updateUI() {
        priceElement.textContent = `$${price.toFixed(2)}`;
        quantityElement.textContent = quantity;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
});
function updateUI() {
    priceElement.textContent = `$${price.toFixed(2)}`;
    quantityElement.textContent = quantity;
}