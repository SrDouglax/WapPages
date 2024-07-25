let currentSlide = 0;
const totalSlides = 2;
const wrapper = document.querySelector('.carousel-wrapper');

function updateCarousel() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
  updateImages();
}

function updateIndicators() {
  ['pointer1', 'pointer2', 'pointer3', 'pointer4', 'pointer5', 'pointer6'].forEach((id, index) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('bg-[#711D30]', index % 2 === currentSlide);
      element.classList.toggle('bg-[#ABABAB]', index % 2 !== currentSlide);
    }
  });
}

function updateImages() {
  const slides = document.querySelectorAll('.carousel-slide');
  slides.forEach((slide, index) => {
    const img = slide.querySelector('img');
    if (img) {
      if (index === currentSlide) {
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
      } else {
        img.style.opacity = '0';
        img.style.transform = index > currentSlide ? 'translateX(100px)' : 'translateX(-100px)';
      }
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

document.querySelectorAll('.arrow-left, .arrow-right').forEach(arrow => {
  arrow.addEventListener('click', arrow.classList.contains('arrow-left') ? prevSlide : nextSlide);
});

['pointer1', 'pointer2', 'pointer3', 'pointer4', 'pointer5', 'pointer6'].forEach((id, index) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => {
      currentSlide = index % 2;
      updateCarousel();
    });
  }
});

// Initialize the carousel
updateCarousel();

// Add listener for window resize
window.addEventListener('resize', updateCarousel);

// Add CSS for smooth transitions
const style = document.createElement('style');
style.textContent = `
  .carousel-slide img {
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
  }
`;
document.head.appendChild(style);