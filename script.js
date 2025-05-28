const products = [
  { id: 1, name: "Smartphone", price: 299.99 },
  { id: 2, name: "Laptop", price: 799.99 },
  { id: 3, name: "Headphones", price: 99.99 },
  { id: 4, name: "Smartwatch", price: 199.99 },
  { id: 5, name: "Bluetooth Speaker", price: 49.99 },
];

const productGrid = document.getElementById("productGrid");
const cartItems = [];
const cartPreview = document.getElementById("cartPreview");
const cartCount = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "bg-white p-4 rounded shadow text-center";

    productCard.innerHTML = `
      <h3 class="text-lg font-bold">${product.name}</h3>
      <p class="text-gray-600">$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})" class="mt-2 bg-blue-800 text-white px-3 py-1 rounded">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cartItems.push(product);
  updateCart();
}

function updateCart() {
  cartCount.innerText = cartItems.length;
  cartItemsList.innerHTML = "";

  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });

  cartTotal.innerText = total.toFixed(2);
}

document.getElementById("cartButton").addEventListener("click", () => {
  cartPreview.classList.toggle("hidden");
});

function checkout() {
  alert("Checkout process initiated!");
}

renderProducts();
