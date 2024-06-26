function sendHeight() {
  let height = document.body.scrollHeight;
  window.parent.postMessage({ frameHeight: height }, "*");
}

document.addEventListener("DOMContentLoaded", sendHeight);
setInterval(sendHeight, 5000);
window.addEventListener("resize", sendHeight);
