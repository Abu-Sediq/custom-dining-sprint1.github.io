document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.querySelector(".splash a.btn");
  const authSection = document.getElementById("auth-section");
  const loginForm = document.querySelector(".login-form form");
  const registerForm = document.querySelector(".register-form form");
  const forgotPasswordLink = document.querySelector(".forgot-password");

  // Smooth scroll to authentication section when "Get Started" is clicked
  getStartedBtn.addEventListener("click", function (e) {
    e.preventDefault();
    authSection.scrollIntoView({ behavior: "smooth" });
  });

  // Login form submission handler
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
      alert("Please enter both email/phone and password.");
      return;
    }

    // Placeholder login logic
    console.log("Logging in with:", { email, password });
    alert("Login successful");
  });

  // Register form submission handler
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Placeholder register logic
    console.log("Registering:", { name, email, password });
    alert("Registration successful");
  });

  // Forgot password handler
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Password recovery link has been sent to your email.");
  });

  // Optionally toggle between forms with link clicks (smooth user experience)
  const registerToggle = document.querySelector('.login-form a[href="#register-form"]');
  const loginToggle = document.querySelector('.register-form a[href="#auth-section"]');

  registerToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("register-form").scrollIntoView({ behavior: "smooth" });
  });

  loginToggle.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-form").scrollIntoView({ behavior: "smooth" });
  });
});
