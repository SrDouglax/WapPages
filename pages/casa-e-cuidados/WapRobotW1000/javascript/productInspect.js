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
    description: "Os <span class='font-semibold'>sensores antiqueda</span> e de redirecionamento permitem uma movimentação segura e sem quedas durante a aspiração.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-0.png"
  },
  { 
    description: " As <span class='font-semibold'>escovas laterais</span> puxam toda sujeira e a direcionam para o canal de sucção do robô.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-1.png"
  },
  {
    description: " As <span class='font-semibold'>rodas emborrachadas</span> facilitam a limpeza em diversos tipos de superfícies sem riscar, como madeira, carpete, tapete e pisos frios.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-2.png"
  },
  {
    description: " Capture toda a sujeira e armazene no compartilhamento de pó com a <span class='font-semibold'>escova principal.</span>",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-3.png"
  },
  {
    description: "Para uma limpeza uniforme em todo o piso, o <span class='font-semibold'>tanque de água inteligente</span> libera água em 3 níveis de umidade, isso evita pisos encharcados durante a passagem de pano.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-4.png"
  },
  {
    description: "Sofisticado, o <span class='font-semibold'>acabamento em vidro</span> do aspirador robô eleva o estilo dos ambientes, facilitando a manutenção com durabilidade e resistência.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-6.png"
  },
  {
    description: "Com o <span class='font-semibold'>recipiente 2 em 1</span> (água e pó), ele aspira o pó e pode também limpar com água, tornando sua casa impecável e a manutenção mais prática.",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-7.png"
  },
  {
    description: " Faça a conexão via WAP CONNECT e acione o aspirador quando quiser com a praticidade dos <span class='font-semibold'>comandos de voz.</span>",
    imgPath: "./imgs/mobile/ROBOTW1000-product-inspect-5.png"
  },
];

let startSelect = 0
let currentCardIndex = 0;


function changeCard(direction) {
  currentCardIndex += direction;
  // Check limits
  if (currentCardIndex >= cards.length) {
      currentCardIndex = 0;
  } else if (currentCardIndex < 0) {
      currentCardIndex = cards.length - 1;
  }
  // Update the card content
  const img = document.getElementById('mobile-product-inspect-img');
  img.src = cards[currentCardIndex].imgPath;
  document.getElementById('cardDescription').innerHTML = cards[currentCardIndex].description;
}

window.addEventListener('load', function(event) {
  changeCard(startSelect);
})