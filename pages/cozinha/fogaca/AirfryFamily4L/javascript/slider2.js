const sliderContainer = document.getElementById("slider_container");
const imagesSlider = [
  "./imgs/slider/airfryfamili4l-coxinhas.png",
  "./imgs/slider/airfryfamili4l-carne.png",
  "./imgs/slider/airfryfamili4l-hamburguer.png",
  "./imgs/slider/airfryfamili4l-peixe.png",
  "./imgs/slider/airfryfamili4l-batatafrita.png",
  "./imgs/slider/airfryfamili4l-bolo.png",
  "./imgs/slider/airfryfamili4l-paodequeijo.png",
  "./imgs/slider/airfryfamili4l-pizza.png",
];

let currentIndex = 0;

const createImageElement = (src) => {
  const image = document.createElement("img");
  image.src = src;
  const classes = "w-[50%] px-[1.5rem] sm:px-2 rounded-3xl".split(" ");
  image.classList.add(...classes);
  return image;
};

const CreateImagesTag = () => {
  for (let i = 0; i < imagesSlider.length * 3; i++) {
    const image = createImageElement(imagesSlider[i % imagesSlider.length]);
    sliderContainer.appendChild(image);
  }
};

const NextImageButton = document.getElementById("button_next_uasdhuas");
const PreviousButton = document.getElementById("btn_previous_uas");

const nextImage = () => {
  currentIndex++;
  if (currentIndex === imagesSlider.length * 2) {
    sliderContainer.style.transition = "none";
    currentIndex = imagesSlider.length;
    updateSlider();
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s";
    }, 0);
  } else {
    updateSlider();
  }
};

const previousImage = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesSlider.length - 2;
  }
  if (currentIndex === imagesSlider.length - 1) {
    sliderContainer.style.transition = "none";
    currentIndex = imagesSlider.length;
    updateSlider();
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s";
    }, 0);
  } else {
    updateSlider();
  }
};

const updateSlider = () => {
  const imageWidth = sliderContainer.children[0].offsetWidth;
  const offset = -currentIndex * imageWidth + 8;
  sliderContainer.style.transform = `translateX(${offset}px)`;
};

window.addEventListener("resize", updateSlider);
CreateImagesTag();
NextImageButton.addEventListener("click", nextImage);
PreviousButton.addEventListener("click", previousImage);

let startX = 0;
let distance = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  distance = startX - e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", () => {
  const threshold = 50;

  if (distance > threshold) {
    nextImage();
  } else if (distance < -threshold) {
    previousImage();
  }

  distance = 0;
});
