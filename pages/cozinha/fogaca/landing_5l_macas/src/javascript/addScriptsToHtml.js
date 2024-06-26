const addScripts = () => {
  let script = iframe.contentDocument.createElement("script");
  script.src = "./javascript/slider.js";
  script.type = "text/javascript";
  iframe.contentDocument.body.appendChild(script);

  script = iframe.contentDocument.createElement("script");
  script.src = "./javascript/imagesAnimation.js";
  script.type = "text/javascript";
  iframe.contentDocument.body.appendChild(script);

  script = iframe.contentDocument.createElement("script");
  script.src = "./javascript/senders.js";
  script.type = "text/javascript";
  iframe.contentDocument.body.appendChild(script);

  script = iframe.contentDocument.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js";
  script.type = "text/javascript";
  iframe.contentDocument.body.appendChild(script);
};

iframe.addEventListener("load", function () {
  let doc = iframe.contentDocument || iframe.contentWindow.document;

  if (doc.readyState === "complete") {
    addScripts();
  } else {
    doc.addEventListener("load", addScripts);
  }
});
