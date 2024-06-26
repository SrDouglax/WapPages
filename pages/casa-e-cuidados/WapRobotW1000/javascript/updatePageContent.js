const contentMap = {
    'LIMPEZA 3 EM 1': {
      imgSrc: './imgs/desktop/ROBOTW1000-slidecontent1.png',
      imgSrcMobile: './imgs/desktop/ROBOTW1000-slidecontent1-mobile.png',
      title: 'Limpeza 3 em 1',
      paragraph: 'Ao mesmo tempo, varre, aspira e passa pano para uma casa limpa com autonomia.',
      headerId: 'header-1'
    },
    'CONTROLE REMOTO E APP': {
      imgSrc: './imgs/desktop/ROBOTW1000-slidecontent2.png',
      imgSrcMobile: './imgs/desktop/ROBOTW1000-slidecontent2-mobile.png',
      title: 'Controle remoto e app',
      paragraph: 'Praticidade e personalização total das tarefas domésticas do seu lar.',
      headerId: 'header-2'
    },
    'NAVEGAÇÃO DE GYRO': {
      imgSrc: './imgs/desktop/ROBOTW1000-slidecontent3.png',
      imgSrcMobile: './imgs/desktop/ROBOTW1000-slidecontent3-mobile.png',
      title: 'Navegação de GYRO',
      paragraph: 'Realiza o mapeamento em tempo real para uma movimentação eficiente durante a limpeza.',
      headerId: 'header-3'
    },
    'BATERIA SEMPRE CARREGADA': {
      imgSrc: './imgs/desktop/ROBOTW1000-slidecontent4.png',
      imgSrcMobile: './imgs/desktop/ROBOTW1000-slidecontent4-mobile.png',
      title: 'Bateria sempre carregada',
      paragraph: 'Proporciona mobilidade e segurança ao retornar sozinho para a base.',
      headerId: 'header-4'
    }
  };
  
  function updatePageContent(optionName) {
    const { imgSrc, title, paragraph, headerId, imgSrcMobile } = contentMap[optionName];
  
    // Atualiza os elementos com as novas informações
    document.getElementById('mainImage').src = imgSrc;
    document.getElementById('mainImageMobile').src = imgSrcMobile;
    document.getElementById('mainTitle').innerHTML = title;
    document.getElementById('mainParagraph').innerHTML = paragraph;
  
    // Itera sobre os possíveis IDs dos botões de cabeçalho
    for (let i = 1; i <= 4; i++) {
      const headerElement = document.getElementById(`header-${i}`);
      
      // Checa se é o botão atualmente clicado
      if (headerElement.id === headerId) {
        // Aplica a cor com opacidade reduzida ao botão atual
        headerElement.style.backgroundColor = '#C8CACE'; // Cor original sem opacidade
        } else {
          headerElement.style.backgroundColor = 'rgba(200, 202, 206, 0.5)'; // #C8CACE com 50% de opacidade
      }
    }
  }
  
  
  

window.addEventListener('DOMContentLoaded', () => {
    // Set the default content
    updatePageContent('LIMPEZA 3 EM 1');

})