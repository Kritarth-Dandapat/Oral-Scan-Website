
// JavaScript for accordion effect
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

