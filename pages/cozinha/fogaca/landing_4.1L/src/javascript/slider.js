// Selectors for DOM elements
const sliderContainer = document.getElementById("slider_container");
const nextImageButton = document.getElementById("button_next_uasdhuas");
const previousButton = document.getElementById("btn_previous_uas");

// Image paths for the slider
const imagePaths = [
  "./images/slider/1.png",
  "./images/slider/2.png",
  "./images/slider/3.png",
  "./images/slider/4.png",
  "./images/slider/5.png",
  "./images/slider/6.png",
];

let currentIndex = 0;

const createImageElement = (src) => {
  const image = document.createElement("img");
  image.src = src;
  image.classList.add(..."w-[50%] px-1 rounded-3xl".split(" "));
  return image;
};

const populateSliderWithImages = () => {
  const numberOfDuplicates = 3; 
  for (let i = 0; i < imagePaths.length * numberOfDuplicates; i++) {
    const imageElement = createImageElement(imagePaths[i % imagePaths.length]);
    sliderContainer.appendChild(imageElement);
  }
};

const updateSliderPosition = () => {
  const imageWidth = sliderContainer.children[0].offsetWidth;
  const offset = -currentIndex * imageWidth;
  sliderContainer.style.transform = `translateX(${offset}px)`;
};

const handleTransitionEnd = () => {
  const resetIndex = imagePaths.length;
  if (currentIndex === resetIndex * 2 || currentIndex === -1) {
    sliderContainer.style.transition = "none";
    currentIndex = resetIndex;
    updateSliderPosition();
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s ease";
    }, 0);
  }
};

nextImageButton.addEventListener("click", () => {
  currentIndex++;
  handleTransitionEnd();
  updateSliderPosition();
});

previousButton.addEventListener("click", () => {
  currentIndex--;
  handleTransitionEnd();
  updateSliderPosition();
});

window.addEventListener("resize", updateSliderPosition);

let touchStartX = 0;
let touchDistance = 0;

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  touchDistance = touchStartX - e.touches[0].clientX;
});

sliderContainer.addEventListener("touchend", () => {
  const swipeThreshold = 50;
  if (touchDistance > swipeThreshold) {
    nextImageButton.click();
  } else if (touchDistance < -swipeThreshold) {
    previousButton.click();
  }
  touchDistance = 0;
});

populateSliderWithImages();
