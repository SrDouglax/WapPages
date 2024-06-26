function productInspect(event) {
    var infoBox = event.currentTarget.querySelector("#infoBox");
    infoBox.classList.remove("hidden");
}

function hideInspect(event) {
    var infoBox = event.currentTarget.querySelector("#infoBox");
    infoBox.classList.add("hidden");
}


const cards = [
    {
      title: "REVESTIMENTO ANTIADERENTE",
      description: "Uma cozinha inteligente é sinônimo de uma limpeza fácil. O revestimento antiaderente da air fryer 4L WAP evita que os alimentos grudem. Assim, você não se preocupa com a limpeza para uma experiência culinária sem complicações. ",
      imgPath: "./imgs/mobile/sdaairfry_inspect_01.png"
    },
    {
      title: "GRELHA REMOVÍVEL",
      description: "Tenha mais espaço, mais sabor, menos bagunça. A grelha removível oferece espaço de sobra para cozinhar as melhores receitas, com resultados deliciosos e uma limpeza prática.",
      imgPath: "./imgs/mobile/sdaairfry_inspect_02.png"
    },
    {
      title: "TIMER DE 60MIN",
      description: "Chega de preocupações com o tempo de cozimento! O timer de 60 minutos, com aviso sonoro, avisa o momento certo para finalizar o preparo dos alimentos.",
      imgPath: "./imgs/mobile/sdaairfry_inspect_03.png"
    },
    {
      title: "TEMPERATURA DE 80°C ATÉ 200°C",
      description: "O ajuste da temperatura dá controle total do cozimento a você. Prepare pratos saudáveis do seu jeito, sem complicações.",
      imgPath: "./imgs/mobile/sdaairfry_inspect_04.png"
    },
    {
      title: "CESTO QUADRADO",
      description: "Liberte sua criatividade na cozinha! Com o cesto quadrado, você tem mais espaço para preparar alimentos sem empilhar, garantindo resultados deliciosos em todas as suas receitas.",
      imgPath: "./imgs/mobile/sdaairfry_inspect_05.png"
    },
  ];

  let currentCardIndex = 0;

  function changeCard(direction) {
    currentCardIndex += direction;

    // Verifica os limites
    if (currentCardIndex >= cards.length) {
      currentCardIndex = 0;
    } else if (currentCardIndex < 0) {
      currentCardIndex = cards.length - 1;
    }

    // Atualiza o conteúdo do card
    img = document.getElementById('product-inspect-image');
    img.src = cards[currentCardIndex].imgPath;
    document.getElementById('cardTitle').textContent = cards[currentCardIndex].title;
    document.getElementById('cardDescription').textContent = cards[currentCardIndex].description;
  }

window.onload = function() {
  changeCard(0);
}