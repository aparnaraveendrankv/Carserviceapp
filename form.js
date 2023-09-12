const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
event.preventDefault(); 
const email = document.getElementById('email').value;
const password = document.getElementById('psw').value;
const passwordRepeat = document.getElementById('psw-repeat').value;
// Check that the password and password repeat fields match
if (password !== passwordRepeat) {
alert('Passwords do not match');
return;
}
// Check that the password meets the length and character requirements
if (password.length < 8) {
alert('Password must be at least 8 characters long');
return;
}
if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || 
!password.match(/[0-9]/)) {
alert('Password must contain at least one uppercase letter, one lowercase letter, and one number');
return;
}
const userData = {
email: email,
password: password
};
// Check if local storage already has an array of users
let users = JSON.parse(localStorage.getItem('users')) || [];
// Check if the user already exists in the users array
const userExists = users.some(function(user) {
return user.email === email;
});
if (userExists) {
alert('User already exists');
return;
}
// Add the new user to the users array and store it in local storage
users.push(userData);
localStorage.setItem('users', JSON.stringify(users));
alert('User registered successfully');
});
// Function to clear the input fields
function clearFunc() {
document.getElementById("email").value = "";
document.getElementById("psw").value = "";
document.getElementById("psw-repeat").value = "";
}