function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd1").value;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
    alert("Login successful");
    window.location.href = "cars.html"; //redirect to home page
    return;
    }
    }
    alert("Invalid email or password");
    }