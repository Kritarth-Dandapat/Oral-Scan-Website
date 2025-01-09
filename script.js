document.querySelectorAll('.feature-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(button => {
    button.addEventListener('click', function () {
      const faqContent = this.nextElementSibling;

      // Toggle visibility of the content
      if (faqContent.style.display === "block") {
        faqContent.style.display = "none";
      } else {
        faqContent.style.display = "block";
      }
    });
  });
});
