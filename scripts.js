let cart = [];
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartTable = document.querySelector('.cart-table');
    cartTable.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Price</th>
        </tr>
    `;

    let total = 0;
    for (const item of cart) {
        cartTable.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
            </tr>
        `;
        total += item.price;
    }

    cartTable.innerHTML += `
        <tr>
            <th>Total</th>
            <th>₹${total}</th>
        </tr>
    `;
}
