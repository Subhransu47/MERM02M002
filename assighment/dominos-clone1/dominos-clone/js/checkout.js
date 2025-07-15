
if (localStorage.getItem("loggedIn") !== "true") {
  alert("You must login to proceed to checkout.");
  window.location.href = "login.html";
}

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if (!name || !address || !phone) {
    document.getElementById("message").innerText = "Please fill all fields.";
    return;
  }

  localStorage.removeItem("cart");
  document.getElementById("message").innerText = "✅ Order Placed Successfully!";
  this.reset();
});
