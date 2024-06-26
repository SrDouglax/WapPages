window.addEventListener("message", function (event) {
  const scrollY = event.data.scrollY;

  const animatedElements = document.querySelectorAll(".animation");

  animatedElements.forEach((element, index) => {
    let newTransform;
    const widerFactor = 10; // Adjust this value to control the range of movement
    const subtleFactor = 2; // Adjust this value to control the range of movement

    if (element.classList.contains("animate-float")) {
      newTransform = Math.sin(scrollY / 100 + index) * widerFactor * 10; // Multiplied by 10 for more noticeable movement
    } else if (element.classList.contains("animate-float-reverse")) {
      newTransform = Math.cos(scrollY / 100 + index) * widerFactor * 10; // Multiplied by 10 for more noticeable movement
    } else if (element.classList.contains("animate-subtle")) {
      newTransform = Math.cos(scrollY / 100 + index) * subtleFactor * 10;
    } 
    element.style.transform = `translateY(${newTransform}px)`;
  });
});
