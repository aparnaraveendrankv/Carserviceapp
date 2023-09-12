const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const timeslotInput = document.getElementById('timeslot');
const categoryInput = document.getElementById('category');
const descInput = document.getElementById('description');
const addBtn = document.getElementById('add-btn');
const filterDateInput = document.getElementById('filter-date');
const filterBtn = document.getElementById('filter-btn');
const filterCount = document.getElementById('filter-count');
const appointmentList = document.getElementById('appointment-list');
const filterCategoryInput = document.getElementById('filter-category');
const filterTimeslotInput = document.getElementById('filter-timeslot');
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
function renderAppointments() {
appointmentList.innerHTML = '';
appointments.forEach((appointment, index) => {
const li = document.createElement('li');
const date = new Date(appointment.date).toDateString();
li.innerHTML = `
<strong>${appointment.name}</strong>
<p>${date} - ${appointment.timeslot} - ${appointment.category}-
${appointment.desc}</p>
<button class="link" onclick="edit(${index})">
<i class="fas fa-edit"></i>
</button>
<button class="link" onclick="del(${index})">
<i class="fas fa-trash-alt"></i>
</button>
`;
appointmentList.appendChild(li);
});
}
function edit(index) {
const appointment = appointments[index];
nameInput.value = appointment.name;
dateInput.value = appointment.date;
timeslotInput.value = appointment.timeslot;
categoryInput.value = appointment.category;
descInput.value = appointment.desc;
appointments.splice(index, 1);
localStorage.setItem('appointments', JSON.stringify(appointments));
renderAppointments();
}
function del(index) {
appointments.splice(index, 1);
localStorage.setItem('appointments', JSON.stringify(appointments));
renderAppointments();
}
addBtn.addEventListener('click', () => {
if (nameInput.value && dateInput.value && timeslotInput.value && 
categoryInput.value && descInput.value) {
const appointment = {
name: nameInput.value,
date: dateInput.value,
timeslot: timeslotInput.value,
category: categoryInput.value,
desc: descInput.value,
};
// Check if the timeslot is already booked
const isBooked = appointments.some((appt) => {
return appt.date === appointment.date && appt.timeslot === 
appointment.timeslot;
});
if (isBooked) {
alert('This timeslot is already booked. Please select a different timeslot.');
return;
}
appointments.push(appointment);
localStorage.setItem('appointments', JSON.stringify(appointments));
nameInput.value = '';
dateInput.value = '';
timeslotInput.value = '';
categoryInput.value = '';
descInput.value = '';
renderAppointments();
} else {
alert('Please fill in all fields.');
}
});
filterBtn.addEventListener('click', () => {
if (filterDateInput.value && filterCategoryInput.value !== 'services' && 
filterTimeslotInput.value) {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.date === filterDateInput.value && 
appointment.category === filterCategoryInput.value && appointment.timeslot === 
filterTimeslotInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterDateInput.value && filterTimeslotInput.value) {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.date === filterDateInput.value && 
appointment.timeslot === filterTimeslotInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterCategoryInput.value !== 'services' && 
filterTimeslotInput.value) {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.category === filterCategoryInput.value && 
appointment.timeslot === filterTimeslotInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterTimeslotInput.value) {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.timeslot === filterTimeslotInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterDateInput.value && filterCategoryInput.value !== 
'services') {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.date === filterDateInput.value && 
appointment.category === filterCategoryInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterDateInput.value) {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.date === filterDateInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else if (filterCategoryInput.value !== 'services') {
const filteredAppointments = appointments.filter((appointment) => {
return appointment.category === filterCategoryInput.value;
});
filterCount.textContent = `Total Appointments: 
${filteredAppointments.length}`;
renderAppointments(filteredAppointments);
} else {
filterCount.textContent = '';
renderAppointments(appointments);
}
});
renderAppointments();
function renderAppointments() {
appointmentList.innerHTML = '';
appointments.forEach((appointment, index) => {
const li = document.createElement('li');
const date = new Date(appointment.date).toDateString();
const desc = appointment.description ? ` - ${appointment.description}`
: ''; 
li.innerHTML = `
<strong>${appointment.name}</strong>
<p>${date} - ${appointment.timeslot} - ${appointment.category}-
${desc}</p>
<button class="link" onclick="edit(${index})">
<i class="fas fa-edit"></i>
</button>
<button class="link" onclick="del(${index})">
<i class="fas fa-trash-alt"></i>
</button>
`;
appointmentList.appendChild(li);
});
}
// Get the logout button
const logoutBtn = document.getElementById("logout-btn");
// Add a click event listener to the logout button
logoutBtn.addEventListener("click", function() {
// Clear the local storage to remove any saved user data
window.reload;
// Redirect the user to the login page
window.location.href = "login.html";
});
