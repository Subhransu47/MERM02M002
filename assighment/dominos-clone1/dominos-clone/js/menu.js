
const menu = [
  { id: 1, name: "Margherita", price: 199, image: "#" },
  { id: 2, name: "Farmhouse", price: 299, image: "#" }
];

let container = document.getElementById("menu-container");

menu.forEach(pizza => {
  let div = document.createElement("div");
  div.classList.add("pizza-card");
  div.innerHTML = `
    <h3>${pizza.name}</h3>
    <p>₹${pizza.price}</p>
    <button onclick="addToCart(${pizza.id})">Add to Cart</button>`;
  container.appendChild(div);
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let selected = menu.find(pizza => pizza.id === id);
  cart.push(selected);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Pizza added to cart!");
}
