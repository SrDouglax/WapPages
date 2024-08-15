document.addEventListener("DOMContentLoaded", function() {
    const sliderData = [
        {
            image: "./imgs/lavadorabravo2250acessorios/lavadorabravo2250acessorios_acessorio-1.png",
            title: " Mangueira de alta pressão de 5M",
        },
        {
            image: "./imgs/lavadorabravo2250acessorios/lavadorabravo2250acessorios_acessorio-2.png",
            title: "Pistola de alta pressão",
        },
        {
            image: "./imgs/lavadorabravo2250acessorios/lavadorabravo2250acessorios_acessorio-3.png",
            title: "Aplicador de detergente",
        },
        {
            image: "./imgs/lavadorabravo2250acessorios/lavadorabravo2250acessorios_acessorio-4.png",
            title: "Engate rápido",
        }
    ];

    let currentIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const titleElement = document.getElementById('slider-title');

    const updateSlider = (index) => {
        const data = sliderData[index];
        imageElement.src = data.image;
        imageElement.alt = data.title;
        titleElement.textContent = data.title;
    };

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = currentIndex - 1 < 0 ? sliderData.length - 1 : currentIndex - 1;
        updateSlider(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderData.length;
        updateSlider(currentIndex);
    });

    updateSlider(currentIndex);
});
