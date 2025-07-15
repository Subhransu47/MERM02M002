
function register() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  if (!email || !password) return showMessage("Fill all fields.");
  localStorage.setItem("user", JSON.stringify({ email, password }));
  showMessage("Registered successfully ✅");
}

function login() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    localStorage.setItem("loggedIn", "true");
    showMessage("Logged in successfully ✅");
    setTimeout(() => window.location.href = "index.html", 1000);
  } else {
    showMessage("Invalid credentials ❌");
  }
}

function showMessage(msg) {
  document.getElementById("authMessage").innerText = msg;
}
