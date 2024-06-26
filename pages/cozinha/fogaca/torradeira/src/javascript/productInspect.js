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
    title: "TEXTURA ORIGINAL",
    description: "No modo ‘Descongelar’, pães congelados se transformam em fatias torradas em questão de minutos. "
  },
  {
    title: "MANTENHA O SABOR",
    description: "Com o modo ‘Reaquecer’, os pães do dia anterior continuam quentinhos, sem tostar, mantendo o sabor original."
  },
  {
      title: "ESCOLHA A CROCÂNCIA PERFEITA",
      description: "Com 7 níveis de tostagem, você tem o controle total sobre o ponto da sua torrada, garantindo que ela fique do jeito que você gosta."
  },
  {
      title: "VERSATILIDADE NO PREPARO",
      description: "A abertura extralarga permite que você prepare uma variedade de pães, seja ele francês ou fatiado, para torradas deliciosas."
  },
  {
    title: "ELEVAÇÃO AUTOMÁTICA",
    description: "Suas fatias de pão são automaticamente elevadas quando atingem a tostagem desejada, garantindo segurança e praticidade."
  },
  {
    title: "CONTROLE TOTAL",
    description: "A função ‘Cancelar’ permite que você interrompa o processo de tostagem a qualquer momento."
  },
];

let currentCardIndex = 0;
function changeCard(direction) {
  currentCardIndex += direction;
  if (currentCardIndex >= cards.length) {
    currentCardIndex = 0;
  } else if (currentCardIndex < 0) {
    currentCardIndex = cards.length - 1;
  }
  document.getElementById('cardTitle').textContent = cards[currentCardIndex].title;
  document.getElementById('cardDescription').textContent = cards[currentCardIndex].description;
}

changeCard(0);