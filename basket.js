function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cartItems.length;
    const cartButton = document.querySelector('.cart-button');
    cartButton.textContent = `Корзина (${cartCount})`;
}

// Вызовите эту функцию при загрузке страницы
updateCartCount();
