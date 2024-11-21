// Sample products
const products = [
    { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 15, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 20, image: "https://via.placeholder.com/150" },
];

// Cart array
let cart = [];

// Load products dynamically
const productList = document.getElementById("product-list");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = ""; // Clear cart items
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
}
