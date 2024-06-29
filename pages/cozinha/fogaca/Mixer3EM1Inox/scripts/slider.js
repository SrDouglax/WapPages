document.addEventListener("DOMContentLoaded", function() {
    const sliderData = [
        {
            image: "./imgs/desktop/mixer_3_em_1_detail_1.png",
            title: "Velocidade regulável",
            description: "Tenha controle total durante a preparação de receitas com a velocidade regulável, que permite selecionar a intensidade de forma intuitiva."
        },
        {
            image: "./imgs/desktop/mixer_3_em_1_detail_2.png",
            title: "Corpo ergonômico",
            description: "Desenvolvido para facilitar sua rotina, o design ergonômico do copo faz toda diferença no manuseio e na limpeza."
        },
        {
            image: "./imgs/desktop/mixer_3_em_1_detail_3.png",
            title: "Compatível com lava-louças",
            description: "De fácil limpeza, os acessórios e a haste podem ser lavados na sua lava-louças."
        }
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const titleElement = document.getElementById('slider-title');
    const descriptionElement = document.getElementById('slider-description');
    const pointers = document.querySelectorAll('.pointer');

    const updatePointerColors = (index) => {
        pointers.forEach((pointer, idx) => {
            if (idx === index) {
                pointer.classList.add('pointer-selected');
            } else {
                pointer.classList.remove('pointer-selected');
            }
        });
    };

    const updateSlider = (index) => {
        const data = sliderData[index];
        imageElement.src = data.image;
        imageElement.alt = data.title;
        titleElement.textContent = data.title;
        descriptionElement.textContent = data.description;
        updatePointerColors(index);
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = currentIndex - 1 < 0 ? sliderData.length - 1 : currentIndex - 1;
        updateSlider(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderData.length;
        updateSlider(currentIndex);
    });

    // Initialize the slider
    updateSlider(currentIndex);
});
