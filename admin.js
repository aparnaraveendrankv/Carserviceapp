// Define the login credentials
const ADMIN_USERNAME = "maxwheel123.maxcom";
const ADMIN_PASSWORD = "maxw123";
// Add event listener to the "Login" button
function login() {
const enteredUsername = document.getElementById("email").value;
const enteredPassword = document.getElementById("pwd1").value;
if (enteredUsername === ADMIN_USERNAME && enteredPassword === 
ADMIN_PASSWORD) {
// If the credentials match, redirect to the admin portal page
window.location.href = "appoinment.html";
} else {
// If the credentials don't match, show a pop-up message
alert("Access Denied");
}
}
// Function to clear the input fields
function clearFunc() {
document.getElementById("email").value = "";
document.getElementById("pwd1").value = "";
}