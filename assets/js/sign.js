// // const burger = document.getElementById('burger');
// // const navLinks = document.querySelector('.nav-links');
// // const rightIcons = document.querySelector('.right-icons');

// // burger.addEventListener('click', () => {
// //   navLinks.classList.toggle('active');
// //   rightIcons.classList.toggle('active');
// // });











// // const nameInput = document.querySelector(".name");
// // const surnameInput = document.querySelector(".surname");

// // function preventNumbers(e) {
// //     const value = e.target.value;
// //     e.target.value = value.replace(/[0-9]/g, "");
// // }

// // nameInput.addEventListener("input", preventNumbers);
// // surnameInput.addEventListener("input", preventNumbers);



// // const form1 = document.querySelector(".register-form1");

// // form1.addEventListener("submit", (e) => {
// //     e.preventDefault();

// //     const inputs = form1.querySelectorAll("input");
// //     let allFilled = true;

// //     inputs.forEach(input => {
// //         if (!input.value.trim()) {
// //             allFilled = false;
// //         }
// //     });

// //     const password = form1.querySelector(".password1");

// //     if (!allFilled) {
// //         alert("Zəhmət olmasa bütün sahələri doldurun.");
// //     } else if (password.value.length < 6) {
// //         alert("Parol ən azı 6 simvoldan ibarət olmalıdır.");
// //     } else {
// //         window.location.href = "index.html";
// //     }
// // });









// const form2 = document.querySelector(".register-form2");

// form2.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const inputs = form2.querySelectorAll("input");
//     let allFilled = true;

//     inputs.forEach(input => {
//         if (!input.value.trim()) {
//             allFilled = false;
//         }
//     });

//     const password = form2.querySelector(".password2");

//     if (!allFilled) {
//         alert("Zəhmət olmasa bütün sahələri doldurun.");
//     } else if (password.value.length < 6) {
//         alert("Parol ən azı 6 simvoldan ibarət olmalıdır.");
//     } else {
//         window.location.href = "indexEN.html";
//     }
// });







// // // document.addEventListener("DOMContentLoaded", () => {
// //   const passwordInput1 = form1.querySelector(".password1");
// //   const togglePassword1 = form1.querySelector(".toggle-password1");

// //   if (passwordInput1 && togglePassword1) {
// //     togglePassword1.addEventListener("click", () => {
// //       const isPassword1 = passwordInput1.type === "password";
// //       passwordInput1.type = isPassword1 ? "text" : "password";
// //       togglePassword1.classList.toggle("fa-eye");
// //       togglePassword1.classList.toggle("fa-eye-slash");
// //     });
// //   };
// // // });


// // // document.addEventListener("DOMContentLoaded", () => {
// //   const passwordInput2 = form2.querySelector(".password2");
// //   const togglePassword2 = form2.querySelector(".toggle-password2");

// //   if (passwordInput2 && togglePassword2) {
// //     togglePassword2.addEventListener("click", () => {
// //       const isPassword2 = passwordInput2.type === "password";
// //       passwordInput2.type = isPassword2 ? "text" : "password";
// //       togglePassword2.classList.toggle("fa-eye");
// //       togglePassword2.classList.toggle("fa-eye-slash");
// //     });
// //   };
// // // });






// // const passwordInput1 = document.querySelector(".password1");
// // const togglePassword1 = document.querySelector(".toggle-password1");

// // togglePassword1.addEventListener("click", () => {
// //   const isPassword1 = passwordInput1.type === "password";
// //   passwordInput1.type = isPassword1 ? "text" : "password";
// //   togglePassword1.classList.toggle("fa-eye");
// //   togglePassword1.classList.toggle("fa-eye-slash");
// // });



// // const passwordInput2 = document.querySelector(".password2");
// // const togglePassword2 = document.querySelector(".toggle-password2");

// // togglePassword2.addEventListener("click", () => {
// //   const isPassword2 = passwordInput2.type === "password";
// //   passwordInput2.type = isPassword2 ? "text" : "password";
// //   togglePassword2.classList.toggle("fa-eye");
// //   togglePassword2.classList.toggle("fa-eye-slash");
// // });








// // function setupPasswordToggle(passwordSelector, toggleSelector) {
// //   const passwordInput = document.querySelector(passwordSelector);
// //   const toggleIcon = document.querySelector(toggleSelector);

// //   if (passwordInput && toggleIcon) {
// //     toggleIcon.addEventListener("click", () => {
// //       const isPassword = passwordInput.type === "password";
// //       passwordInput.type = isPassword ? "text" : "password";
// //       toggleIcon.classList.toggle("fa-eye");
// //       toggleIcon.classList.toggle("fa-eye-slash");
// //     });
// //   }
// // }

// // setupPasswordToggle(".password1", ".toggle-password1");
// // setupPasswordToggle(".password2", ".toggle-password2");




// // document.addEventListener("DOMContentLoaded", () => {
// //   const passwordInput1 = document.querySelector(".password1");
// //   const togglePassword1 = document.querySelector(".toggle-password1");

// //   if (passwordInput1 && togglePassword1) {
// //     togglePassword1.addEventListener("click", () => {
// //       const isPassword1 = passwordInput1.type === "password";
// //       passwordInput1.type = isPassword1 ? "text" : "password";
// //       togglePassword1.classList.toggle("fa-eye");
// //       togglePassword1.classList.toggle("fa-eye-slash");
// //     });
// //   };
// // });
