
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-container");
let total = 0;

cartData.forEach((item, index) => {
  let div = document.createElement("div");
  div.innerHTML = `<p>${item.name} - ₹${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>`;
  total += item.price;
  container.appendChild(div);
});

document.getElementById("total").innerText = "Total: ₹" + total;

function removeItem(i) {
  cartData.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cartData));
  location.reload();
}
