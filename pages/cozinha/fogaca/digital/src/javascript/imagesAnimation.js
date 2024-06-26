// Listen for messages from the parent document
document.addEventListener("scroll", function () {
  // Extract the scrollY value sent from the parent
  const scrollY = window.scrollY;

  // Select the elements you want to animate
  const animatedElements = document.querySelectorAll(".animation");

  animatedElements.forEach((element, index) => {
    let newTransform;
    const widerFactor = 10; // Adjust this value to control the range of movement

    if (element.classList.contains("animate-float")) {
      newTransform = Math.sin(scrollY / 100 + index) * widerFactor * 10; // Multiplied by 10 for more noticeable movement
    } else if (element.classList.contains("animate-float-reverse")) {
      newTransform = Math.cos(scrollY / 100 + index) * widerFactor * 10; // Multiplied by 10 for more noticeable movement
    }

    // Update the transform property
    element.style.transform = `translateY(${newTransform}px)`;
  });
});
