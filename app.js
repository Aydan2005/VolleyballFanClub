// slider hissesi
const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");
let index = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active-dot"));
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlider();
}

setInterval(nextSlide, 5000);


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});


// slider hissesi

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const rightIcons = document.querySelector('.right-icons');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  rightIcons.classList.toggle('active');
});
