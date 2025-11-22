/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
  const subscriptionForm = document.querySelector(".subscription-form");
  const emailInput = subscriptionForm.querySelector('input[type="email"]');
  const messageDiv = document.querySelector(".message");

  subscriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    if (email === "") {
      showMessage("Please enter a valid email address.", "error");
    } else if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
    } else {
      showMessage(
        `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`,
        "success"
      );
      emailInput.value = ""; // Clear the input
    }
  });

  function showMessage(message, type) {
    messageDiv.innerHTML = message;
    messageDiv.className = "message"; // Reset classes
    messageDiv.classList.add(type);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});