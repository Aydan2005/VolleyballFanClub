document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mesajınız göndərildi!');
});


const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const rightIcons = document.querySelector('.right-icons');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  rightIcons.classList.toggle('active');
});

document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault();
    window.location.href = "indexEN.html";
})