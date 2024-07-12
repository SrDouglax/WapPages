let currentSlide = 0;
const totalSlides = 2;
const wrapper = document.querySelector('.carousel-wrapper');

function updateCarousel() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
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

// Inicializar o carrossel
updateCarousel();

// Adicionar listener para redimensionamento da janela
window.addEventListener('resize', updateCarousel);