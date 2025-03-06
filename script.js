
// JavaScript for accordion effect
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

let currentIndex = 0;
const slides = document.querySelector('.carousel');
const totalSlides = slides.children.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Auto Slide Every 3 Seconds */
let autoSlide = setInterval(() => {
  nextSlide();
}, 3000);

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoSlide();
}

/* Reset Auto Slide Timer When User Clicks Navigation */
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
}

