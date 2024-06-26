// Function to determine if the script is running in an iframe or not
function isRunningInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

// Function to handle the animation based on the scrollY position
function handleAnimation(scrollY) {
  const animatedElements = document.querySelectorAll(".animation");
  const widerFactor = 10; // Adjust this value to control the range of movement

  animatedElements.forEach((element, index) => {
    let newTransform;

    if (element.classList.contains("animate-float")) {
      newTransform = Math.sin(scrollY / 100 + index) * widerFactor * 10;
    } else if (element.classList.contains("animate-float-reverse")) {
      newTransform = Math.cos(scrollY / 100 + index) * widerFactor * 10;
    }

    element.style.transform = `translateY(${newTransform}px)`;
  });
}

// Check if the script is running inside an iframe
if (isRunningInIframe()) {
  // Listen for messages from the parent document when in production inside an iframe
  window.addEventListener("message", function (event) {
    if (event.data && typeof event.data.scrollY === "number") {
      handleAnimation(event.data.scrollY);
    }
  });
} else {
  // Directly listen to the scroll event when in development
  window.addEventListener("scroll", function () {
    handleAnimation(window.scrollY);
  });
}
