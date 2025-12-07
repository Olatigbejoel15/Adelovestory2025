function loginUser() {
window.location.href = "dashboard.html";
}


function updateMessage() {
const msg = document.getElementById("input-msg").value;
const name = document.getElementById("input-name").value;


document.getElementById("bridesmaid-msg").textContent = msg;
document.getElementById("bridesmaid-name").textContent = "— " + name;
}