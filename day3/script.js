const form = document.querySelector("#userForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent =
        `Hello ${name.value}! Your email is ${email.value}.`;
});