const form = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

  // Simple validation for username, email, and password
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (username === "") {
        usernameError.textContent = "Username is required.";
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format.";
    }

    if (password === "") {
        passwordError.textContent = "Password is required.";
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
    }

    // If all fields are valid, submit the form
    if (
        username !== "" &&
        email !== "" &&
        isValidEmail(email) &&
        password !== "" &&
        password.length >= 8
    ) {
    // You can replace this with actual form submission logic
    alert("Form submitted successfully!");
    form.reset(); // Clear the form after submission
    }
});

// Function to validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
