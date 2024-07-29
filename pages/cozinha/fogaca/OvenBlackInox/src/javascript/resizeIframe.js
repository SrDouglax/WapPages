const iframe2 = document.getElementById("product-iframe-page");

window.addEventListener(
  "message",
  function (event) {
    if (event.data.frameHeight) {
      console.log(event.data.frameHeight)
      iframe2.style.height = event.data.frameHeight + "px";
    }
  },
  false,
);

window.addEventListener("scroll", () => {
  iframe2.contentWindow.postMessage({ scrollY: window.scrollY }, "*");
});