const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

helloBtn.addEventListener("click", function () {
  message.textContent =
    "Hello! Thank you for visiting my portfolio.";
});