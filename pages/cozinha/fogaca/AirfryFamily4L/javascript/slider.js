const contentMap = {
    '#5A2730': {
      title: 'Traga mais personalidade para sua cozinha',
      description: 'Dê um toque único de personalidade à sua cozinha sem perder o estilo minimalista e moderno. A <span class="font-bold">air fryer vermelha</span> da WAP é a escolha ideal para dar <span class="font-bold">personalidade</span> ao ambiente. Ousada e sofisticada, ela é a melhor protagonista para cozinhas mais elegantes.',
      descriptionBgColor: '#5A2730',
      mainImagePath: './imgs/desktop/sdaairfry_slider_i01-main.png',
      detailImagePath: './imgs/desktop/sdaairfry_slider_i01-detail.png',
    },
    '#2E2E2E': {
      title: 'Um toque de sofisticação para A SUA COZINHA',
      description: 'Quer uma cozinha sofisticada e elegante? Aposte na <span class="font-bold">air fryer preta</span> da WAP! Com um design moderno e ousado, esse tom adiciona um toque de sofisticação ao seu ambiente, além de ser uma opção prática e funcional para o preparo das receitas do seu dia a dia.',
      descriptionBgColor: '#2E2E2E',
      mainImagePath: './imgs/desktop/sdaairfry_slider_i02-main.png',
      detailImagePath: './imgs/desktop/sdaairfry_slider_i02-detail.png',
    },
    '#858585': {
      title: 'Sua cozinha mais moderna',
      description: 'Transforme sua cozinha com estilo e praticidade! Mais moderna e funcional, a <span class="font-bold">air fryer cinza</span> da WAP é uma opção clássica e elegante que se encaixa perfeitamente em qualquer estilo de decoração. Além disso, é fácil de limpar e acrescenta um toque de glamour, valorizando o ambiente.',
      descriptionBgColor: '#858585',
      mainImagePath: './imgs/desktop/sdaairfry_slider_i03-main.png',
      detailImagePath: './imgs/desktop/sdaairfry_slider_i03-detail.png',
    }
  };
  
  function selectButton(color) {
    // Primeiro, remover a aura de todos os botões
    document.querySelectorAll('.bg-gray-200').forEach(el => {
      el.classList.remove('ring-4', 'ring-gray-300');
    });
  
    // Encontrar o botão específico baseado na cor e adicionar a aura apenas a ele
    const selectedButton = document.querySelector(`[onclick="selectButton('${color}')"]`);
    if (selectedButton) {
      selectedButton.classList.add('ring-4', 'ring-gray-300');
    }
  
    // Atualizar o texto, a descrição e a imagem com base no mapa de conteúdo
    const data = contentMap[color];
    document.getElementById('main-text').textContent = data.title;
    document.getElementById('main-description').innerHTML = data.description;  // Mudança aqui para innerHTML para renderizar o HTML
    document.getElementById('text-info').style.backgroundColor = data.descriptionBgColor;

    document.getElementById('image-detail').src = data.detailImagePath;
    document.getElementById('image-detail').alt = `Image for ${data.title}`;

    document.getElementById('image-main').src = data.mainImagePath;
    document.getElementById('image-main').alt = `Image for ${data.title}`;
}

// Inicializar o slider com a primeira cor
window.addEventListener('load', function() {
  selectButton('#5A2730');
})