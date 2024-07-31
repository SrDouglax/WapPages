const acessorios = {
    "1": {
        description: "Alcança áreas de limpeza maiores e aumenta sua produtividade e conforto durante as tarefas.",
        imageUrl: "./imgs/acessories/1.png"
    },
    "2": {
        description: "Remova poeira, sujeira e detritos até nos lugares mais difíceis de alcançar com o bico canto e escova. ",
        imageUrl: "./imgs/acessories/3.png"
    },
    "3": {
        description: "Lavável, ele captura partículas de poeira, alérgenos e impurezas, garantindo ambientes saudável para todos.",
        imageUrl: "./imgs/acessories/5.png"
    },
    "4": {
        description: "O bico múltiplo é capaz de lidar com várias superfícies e tipos de sujeira, desde poeira e detritos sólidos até líquidos.",
        imageUrl: "./imgs/acessories/2.png"
    },
    "5": {
        description: "Fácil de limpar e reutilizável, o filtro de espuma é altamente eficaz na captura de partículas finas e poeira.",
        imageUrl: "./imgs/acessories/6.png"
    },
    "6": {
        description: "Com o extensor de bico, o GTW INOX 20i alcança áreas de difícil acesso, como cantos e frestas, para uma limpeza mais completa. ",
        imageUrl: "./imgs/acessories/4.png"
    }
};
const options = document.querySelectorAll('.option');
const centralImage = document.getElementById('centralImage');
const centralDescription = document.getElementById('centralDescription');

// Função para atualizar a seleção
function updateSelection(option) {
    // Remove a cor de fundo de todas as opções
    options.forEach(opt => {
        opt.classList.remove('bg-[#757679]');
        opt.classList.add('bg-[#D9D9D9]');
    });
    
    // Adiciona a cor de fundo à opção clicada
    option.classList.remove('bg-[#D9D9D9]');
    option.classList.add('bg-[#757679]');
    
    // Atualiza a imagem e descrição central
    const id = option.getAttribute('data-id');
    const acessorio = acessorios[id];
    
    centralImage.src = acessorio.imageUrl;
    centralDescription.textContent = acessorio.description;
}

// Adiciona o evento de clique a todas as opções
options.forEach(option => {
    option.addEventListener('click', function() {
        updateSelection(this);
    });
});

