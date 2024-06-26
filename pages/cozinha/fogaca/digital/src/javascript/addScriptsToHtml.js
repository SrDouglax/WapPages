console.log(document);

const addScripts = () => {
  let script = _iframe.contentDocument.createElement("script");
  script.src = "./javascript/slider.js";
  script.type = "text/javascript";
  document.contentDocument.body.appendChild(script);

  script = document.contentDocument.createElement("script");
  script.src = "./javascript/imagesAnimation.js";
  script.type = "text/javascript";
  document.contentDocument.body.appendChild(script);

  script = document.contentDocument.createElement("script");
  script.src = "./javascript/senders.js";
  script.type = "text/javascript";
  document.contentDocument.body.appendChild(script);

  script = document.contentDocument.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js";
  script.type = "text/javascript";
  document.contentDocument.body.appendChild(script);
};

document.addEventListener("load", function () {
  let doc = document.contentDocument || document.contentWindow.document;

  if (doc.readyState === "complete") {
    addScripts();
  } else {
    doc.addEventListener("load", addScripts);
  }
});
