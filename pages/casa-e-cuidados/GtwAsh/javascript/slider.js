const pointerTexts = {
  pointer1: {
    title: "Tecnologia que simplifica a limpeza",
    description: `
      Manter pequenas churrasqueiras, lareiras e fogões a lenha sempre prontos para uso não precisa mais ser um desafio. <span class="font-bold">O Aspirador de Cinzas WAP GTW ASH</span> proporciona uma limpeza potente dos resíduos deixados pela queima de carvão e lenha.
      <br><br>
      Projetado para coletar apenas <span class="font-bold">cinzas frias</span>, o equipamento é versátil e está pronto para te acompanhar nos desafios, com seus <span class="font-bold">1400W de potência</span>. Apesar do design compacto, o <span class="font-bold">recipiente de aço</span> tem capacidade para aspirar até 4 litros de cinzas.  `,
    mobileImagePath: './imgs/mobile/ASH_GTW_slider-1.png'
  },
  pointer2: {
    title: "Tecnologia que simplifica a limpeza",
    description: `
      Por que escolher o <span class="font-bold">GTW ASH</span> ao invés de um aspirador comum para remover as cinzas de lareiras, churrasqueiras e fogões a lenha?
      Diferentemente das partículas de pó presentes no cotidiano, as cinzas são finas e podem danificar de forma irreversível o motor de um aspirador comum durante a tarefa de limpeza. `,
    mobileImagePath: './imgs/mobile/ASH_GTW_slider-2.png'
  }
};

document.getElementById('pointer1').addEventListener('click', function() {
  updateContent('pointer1');
});

document.getElementById('pointer2').addEventListener('click', function() {
  updateContent('pointer2');
});

document.getElementById('arrow-left').addEventListener('click', function() {
  updateContent('pointer1');
});

document.getElementById('arrow-right').addEventListener('click', function() {
  updateContent('pointer2');
});

function updateContent(pointerId) {
  document.getElementById('content-text').innerHTML = pointerTexts[pointerId]['description'];
  document.getElementById('slider-mobile').src = pointerTexts[pointerId]['mobileImagePath'];
  
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');
  const container = document.getElementById('content-container');

  if ((pointerId === 'pointer1' && container.classList.contains('md:flex-row-reverse')) ||
      (pointerId === 'pointer2' && !container.classList.contains('md:flex-row-reverse'))) {
    
    if (pointerId === 'pointer1') {
      container.classList.remove('md:flex-row-reverse');
      container.classList.add('md:flex-row');
      arrowLeft.classList.add('hidden');     
      arrowRight.classList.remove('hidden'); 
    } else {
      container.classList.remove('md:flex-row');
      container.classList.add('md:flex-row-reverse');
      arrowLeft.classList.remove('hidden');  
      arrowRight.classList.add('hidden');  
    }
  }

  const pointers = ['pointer1', 'pointer2'];
  pointers.forEach(id => {
    const element = document.getElementById(id);
    if (id === pointerId) {
      element.classList.add('bg-[#711D30]');
      element.classList.remove('bg-[#ABABAB]');
    } else {
      element.classList.remove('bg-[#711D30]');
      element.classList.add('bg-[#ABABAB]');
    }
  });
}

window.onload = function() {
  updateContent('pointer1');
};