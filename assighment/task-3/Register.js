document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mobile = document.getElementById("mobile").value;

  const user = {
    name,
    email,
    password,
    mobile
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration Successful!");
  window.location.href = "login.html";
});