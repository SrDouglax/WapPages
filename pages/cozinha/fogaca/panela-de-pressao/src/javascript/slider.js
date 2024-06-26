const imagesData = [
  { url: './images/slider/1.png', title: 'ARROZ', description: '' },
  { url: './images/slider/2.png', title: 'FEIJÃO', description: '' },
  { url: './images/slider/3.png', title: 'VEGETAIS', description: '' },
  { url: './images/slider/4.png', title: 'SOPA', description: '' },
  { url: './images/slider/6.png', title: 'CARNE', description: '' },
  { url: './images/slider/5.png', title: 'FRANGO', description: '' },
  { url: './images/slider/7.png', title: 'PEIXE', description: '' },
  { url: './images/slider/8.png', title: 'REFOGAR', description: '' },
];

class ImageSlider {
  constructor(data, autoplaySpeed, pauseDuration, swapSpeed) {
    this.imagesData = data;
    this.pauseDuration = pauseDuration; 
    this.isPaused = false;
    this.activeIndex = 0;
    this.autoplaySpeed = autoplaySpeed;
    this.cardImage = document.getElementById('card-image');
    this.cardTitles = document.querySelectorAll('.card-title');
    this.cardDescriptions = document.querySelectorAll('.card-description');
    this.cardCounter = document.querySelectorAll('.card-counter');
    this.nextButton = document.querySelectorAll('.next');
    this.previousButton = document.querySelectorAll('.previous');
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.threshold = 50;
    this.swapSpeed = swapSpeed;
    this.initSlider();
    this.attachEventListeners();
    this.startAutoplay();
  }
  initSlider() {
    this.updateCard(this.activeIndex);
  }
  updateCardContent(index) {
    const cardData = this.imagesData[index];
    this.cardCounter.forEach(counterElement => {
      counterElement.textContent = `${index + 1} de ${this.imagesData.length}`;
    });
    this.cardImage.src = cardData.url;
    console.log(this.button)
    this.cardTitles.forEach(titleElement => {
      titleElement.textContent = cardData.title;
    });
    this.cardDescriptions.forEach(descriptionElement => {
      descriptionElement.textContent = cardData.description;
    });
  }
  updateCard(index) {
    this.cardImage.classList.remove('opacity-100');
    this.cardImage.classList.add('opacity-0');
    setTimeout(() => {
      this.updateCardContent(index);
      this.cardImage.classList.remove('opacity-0');
      this.cardImage.classList.add('opacity-100');
    }, this.swapSpeed);
  }
  attachEventListeners() {
    this.nextButton.forEach(button => {
      button.addEventListener('click', () => {
        this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
        this.updateCard(this.activeIndex);
        this.pauseAutoplay();
      });
    });
    this.previousButton.forEach(button => {
      button.addEventListener('click', () => {
        this.activeIndex = (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
        this.updateCard(this.activeIndex);
        this.pauseAutoplay();
      });
    });
    this.cardImage.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.pauseAutoplay();
    });
    this.cardImage.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipeGesture();
    });
  }
  handleSwipeGesture() {
    if (this.touchStartX - this.touchEndX > this.threshold) {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    } else if (this.touchEndX - this.touchStartX > this.threshold) {
      this.activeIndex = (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }
    if (!this.isPaused) {
      setTimeout(() => this.startAutoplay(), this.pauseDuration);
    }
  }
  pauseAutoplay() {
    if (!this.isPaused) {
      this.stopAutoplay();
      this.isPaused = true;
      setTimeout(() => {
        this.isPaused = false;
        this.startAutoplay();
      }, this.pauseDuration);
    }
  }
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }, this.autoplaySpeed);
  }
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

const autoPlaySpeed = 5000; 
const pauseDuration = 5000; 
const swapSpeed = 150;
const slider = new ImageSlider(imagesData, autoPlaySpeed, pauseDuration, swapSpeed);


document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões 'next' e aplica o estilo
  document.querySelectorAll('.next').forEach(button => {
    button.style.backgroundImage = "url('./images/icons/right_sign.png')";
  });

  // Seleciona todos os botões 'previous' e aplica o estilo
  document.querySelectorAll('.previous').forEach(button => {
    button.style.backgroundImage = "url('./images/icons/left_sign.png')";
  });
});

