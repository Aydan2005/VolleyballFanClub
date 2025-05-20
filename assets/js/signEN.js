const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const rightIcons = document.querySelector('.right-icons');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  rightIcons.classList.toggle('active');
});




const form2 = document.querySelector(".register-form2");

form2.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form2.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    const password = form2.querySelector(".password2");

    if (!allFilled) {
        alert("Zəhmət olmasa bütün sahələri doldurun.");
    } else if (password.value.length < 6) {
        alert("Parol ən azı 6 simvoldan ibarət olmalıdır.");
    } else {
        window.location.href = "indexEN.html";
    }
});


document.addEventListener("DOMContentLoaded", () => {

  const passwordInput2 = document.querySelector(".password2");
  const togglePassword2 = document.querySelector(".toggle-password2");

  if (passwordInput2 && togglePassword2) {
    togglePassword2.addEventListener("click", () => {
      const isPassword2 = passwordInput2.type === "password";
      passwordInput2.type = isPassword2 ? "text" : "password";
      togglePassword2.classList.toggle("fa-eye");
      togglePassword2.classList.toggle("fa-eye-slash");
    });
  }
});
