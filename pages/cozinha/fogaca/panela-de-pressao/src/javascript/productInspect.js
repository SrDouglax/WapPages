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
      title: "NÍVEL DE COZIMENTO",
      description: "Selecione o nível de cozimento. Aperte essa função até indicar a opção desejada (Baixo, Médio ou Alto) no visor luminoso."
    },
    {
      title: "SELETOR DE TEMPO",
      description: "Alteração do tempo de cocção na função manual ou nas demais funções pré-definidas."
    },
    {
        title: "SELETOR MANTER AQUECIDO / CANCELAR",
        description: "Cancele qualquer função programada ou mantenha seus alimentos na temperatura certa até serem servidos."
    },
    {
        title: "PROGRAMAR PREPARO",
        description: "Cozinhe o seu alimento com o tempo programado de 10 minutos até 24 horas."
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
    document.getElementById('cardTitle').textContent = cards[currentCardIndex].title;
    document.getElementById('cardDescription').textContent = cards[currentCardIndex].description;
  }

  // Inicializa com o primeiro card
  changeCard(0);