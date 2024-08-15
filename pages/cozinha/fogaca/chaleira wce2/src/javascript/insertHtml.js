const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Chaleira WAP</title>
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/slider.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <style>
      .swiper-slide {
        width: 75%;
      }
      .swiper-slide-prev, .swiper-slide-next {
        opacity: 0.5;
      }
    </style>

  </head>
  <body class="m-auto ">
    <div class="m-auto overflow-x-hidden max-w-vtex ">
      <header class="flex flex-col items-center">
        <div class="w-full" x-data="{ showVideo: false }">
          <img
            x-show="!showVideo"
            @click="showVideo = true"
            src="./images/chaleira_wce2_cover_video.png"
            alt="Video Thumbnail"
            class="hidden object-cover w-full h-full mt-10 md:block" />
          <iframe
            x-show="showVideo"
            loading="lazy"
            :src="showVideo ? 'https://www.youtube.com/embed/FkZ0bcu_Hwk?enablejsapi=1&autoplay=1' : ''"
            class="w-full mt-10 m-auto h-[40rem] hidden md:block"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
        <h1
          class="py-2 text-center text-white rounded-b-lg md:py-4 px-7 text-1xl font-poppins bg-red-default">
          PROSDÓCIMO
        </h1>
      </header>

      <section class="flex flex-col items-center mt-14 md:mt-36">
        <img src="./images/chaleira_wce2_fogaca_apontando_dedo_desktop.png" class="hidden w-full px-10 md:block" alt="Henrique Fogaca apontando dedo para o produto" />
        <img src="./images/chaleira_wce2_fogaca_apontando_dedo_mobile.png" class="w-full px-8 m-auto md:hidden" alt="Henrique Fogaca apontando dedo para o produto" />

        <div class="flex flex-col items-start gap-20 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div class="md:hidden m-auto -mt-10 md:mt-0">
            <h1 class="font-poppins leading-1 text-xl md:text-[2.18rem] font-bold md:hidden text-center uppercase">
              Água quente em minutos com praticidade e segurança
            </h1>
            <p class="mt-3 text-base font-light text-black font-inter md:mt-5 text-center  md:hidden">
              Com o acabamento sofisticado e durável da chaleira elétrica WAP, você ganha mais tempo no preparo das suas receitas favoritas. Seja no café da manhã ou chá da tarde, ela simplifica a rotina para que você se concentre apenas no que importa: o sabor.
            </p>
          </div>
          <div class="flex flex-col items-center justify-end text-center w-ful2 md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/chaleira_wce2_capacity-red.png" alt="Icone" />
            <h1 class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              1,7 LITROS<br class="hidden md:block" />
              DE CAPACIDADE
            </h1>
            <p class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Esquenta a quantidade ideal de água para suas bebidas e receitas.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-2 text-center md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/chaleira_wce2_power_red_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              DESLIGAMENTO<br class="hidden md:block" />
              AUTOMÁTICO
            </h1>
            <p class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Garante segurança máxima e economia de energia durante o uso.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-2 text-center md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/chaleira_wce2_filter-red.png" alt="Icon" />
            <h1
              class="mt-4 md:w-full text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              FILTRO QUE RETÉM <br class="hidden md:block" />
              AS IMPUREZAS
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Proporciona líquidos mais puros e saborosos a cada preparo.
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-col items-center justify-center  md:mt-20 mt-10">
        <div class="flex flex-col items-center justify-center mx-5">
          <h1 class="font-poppins leading-9 text-xl md:text-[2.18rem] font-bold hidden md:block uppercase">
            Água quente em minutos com praticidade e segurança
          </h1>
          <p class="mt-3 text-base font-light text-black font-inter md:mt-5  hidden md:block text-center">
            Com o acabamento sofisticado e durável da chaleira <span class="font-bold">elétrica WAP</span>, você ganha mais tempo no preparo das suas receitas favoritas. Seja no café da manhã ou chá da tarde, ela simplifica a rotina para que você se concentre apenas no que importa: o sabor.
          </p>
        </div>
        <img
          src="./images/chaleira_wce2_exposicao_produto.png"
          alt="Exposição de produtos"
          class="w-full mt-16 hidden md:block" />
        <img
          src="./images/chaleira_wce2_exposicao_produto_mobile.png"
          alt="Exposição de produtos Mobile"
          class="w-full mt-16 md:hidden" />
        </section>

      <section class="mx-10 mt-20 grid md:grid-cols-2 ">
        <div class="order-2 md:order-1 px-5 md:px-0">
          <img src="./images/chaleira_wce2_chaleira-fundo-red.png" alt="">
        </div>
        <div class="flex flex-col justify-center gap-5 order-1 md:order-2">
          <h1 class="font-poppins text-lg md:text-3xl font-bold uppercase">Rotina ágil e <br class="hidden md:block">deliciosa</h1>
          <p>Ferver água para provar opções de chás, café e outras bebidas quentes deliciosas pode ser mais rápido e prático com o uso da tecnologia. A <span class="font-bold">WAP CHALEIRA PROSDÓCIMO WCE2</span> aquece de uma só vez até 1,7 litros, ideal para sua rotina.</p>
        </div>
      </section>
      
      <section class="relative flex flex-col pb-10 text-white bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="z-20 flex-shrink-0 mt-8 px-4 space-y-6 md:mt-12 md:ml-28 mx:px-0">
            <h1 class="text-lg leading-none  mt-5 md:mt-0 md:tracking-tighter md:leading-9 font-black uppercase sm:text-[2.185rem] font-poppins flex flex-col">
              Experiência de preparo com segurança e sofisticação
            </h1>
            <p class="font-inter text-sm tracking-tight  sm:w-[75%]">
              Durável e sofisticada, o acabamento do corpo da <span class="font-bold">chaleira elétrica em aço inox</span> transforma qualquer ambiente com modernidade. Fique informado quando a água está em aquecimento direto na base, com o <span class="font-bold"></span>indicador luminoso</span>.
              <br><br>
              Além disso, o <span class="font-bold"></span>desligamento automático</span> garante máxima segurança durante o uso, impedindo que a água ferva até secar, e também proporciona economia de energia para toda família.  
            </p>
          </div>
          <div class="hidden md:flex items-start justify-end  md:w-full w-[120%] -translate-x-12">
            <img src="./images/chaleira_wce2_chaleira-wce2.png" class="" alt="" />
          </div>
        </div>
        <div class="flex flex-col flex-wrap items-center mt-5 pb-10">
          <div class="w-[40%] h-0.5 bg-white bg-opacity-20 rounded-full"></div>
          <h1 class="my-8 text-center uppercase sm:text-[2.25rem] md:my-5">
            Ideal para
          </h1>
          <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10 md:mx-10 mx-5 ">
            <div class="flex flex-col items-center justify-center md:w-40 w-32">
              <img src="./images/chaleira_wce2_cha.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CHÁ</h1>
            </div>
            <div class="flex flex-col items-center justify-center md:w-40 w-32">
              <img src="./images/chaleira_wce2_cafe.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CAFÉ</h1>
            </div>
            <div class="flex flex-col items-center justify-center md:w-40 w-32">
              <img src="./images/chaleira_wce2_chimarrao.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CHIMARRÃO</h1>
            </div>
            <div class="flex flex-col items-center justify-center md:w-40 w-32">
              <img src="./images/chaleira_wce2_macarrao.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">MACARRÃO</h1>
            </div>
            <div class="flex flex-col items-center justify-center md:w-40 w-32">
              <img src="./images/chaleira_wce2_arroz.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">ARROZ</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="grid  grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center order-1 md:order-2 ">
          <img src="./images/chaleira_wce2_produto-de-lado.png" class="hidden md:block" alt="">
          <img src="./images/chaleira_wce2_produto-de-lado-mobile.png" class="md:hidden -mt-[1rem]" alt="">
        </div>
        <div class="flex flex-col order-2 mx-5 -300 md:mt-0 md:ml-10 md:items-center md:justify-center md:order-1">
          <h1 class="font-poppins uppercase leading-9 text-xl md:text-3xl font-bold md:self-start">
            Água mais pura a cada gole
          </h1>
          <p class="mt-3 text-base font-light text-black font-inter md:mt-5">
            Consumir água limpa e saudável é essencial para o bem-estar! Com o filtro integrado, a <span class="font-bold">WAP CHALEIRA PROSDÓCIMO WCE2</span> retém impurezas e resíduos, fazendo com que a água consumida seja livre de contaminantes, promovendo qualidade de vida e bebidas mais saborosas.
            <br><br>
            Sua <span class="font-bold">base aquecedora 360°</span> permite o encaixe perfeito do jarro em qualquer ângulo. Isso traz mais conforto e liberdade para o uso cotidiano no preparo de várias receitas. O cabo elétrico da base giratória pode ser organizado facilmente no <span class="font-bold">porta fio</span> da chaleira elétrica.
          </p>
        </div>
      </section>

      <section class="hidden sm:flex justify-between space-x-5">
        <div class="flex-1 p-4 flex flex-col">
          <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-3.png" alt="Indicador luminoso" class="w-full h-auto">
          <h3 class="mt-3 text-center md:text-3xl mb-2 font-bold font-poppins">Indicador <br> luminoso</h3>
          <p class="text-base font-inter text-center mt-5">Saiba quando a água está em aquecimento na base com o indicador em LED.</p>
        </div>
        <div class="flex-1 p-4 flex flex-col">
          <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-2.png" alt="Porta fio na base" class="w-full h-auto">
          <h3 class="mt-3 md:text-3xl text-center mb-2 font-bold font-poppins">Porta fio <br> na base</h3>
          <p class="text-base font-inter text-center mt-5">Tenha maior facilidade no momento de guardar o cabo elétrico da chaleira utilizando o porta fio na base de aquecimento.</p>
        </div>
        <div class="flex-1 p-4 flex flex-col">
          <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-1.png" alt="Base 360° giratória" class="w-full h-auto">
          <h3 class="mt-3 md:text-3xl text-center mb-2 font-bold font-poppins">Base 360° <br> giratória</h3>
          <p class="text-base font-inter text-center mt-5">Encaixe a jarra da chaleira na base giratória 360° em qualquer ângulo com segurança e praticidade.</p>
        </div>
      </section>

      <!-- Mobile Slider -->
      <section class="swiper-container sm:hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide flex justify-center items-center p-5">
            <div class="flex-shrink-0 w-full p-4 flex flex-col bg-white">
              <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-1.png" alt="Indicador luminoso" class="w-full h-auto">
              <h3 class="font-poppins mt-7 text-center text-lg mb-2 font-bold uppercase">Indicador luminoso</h3>
              <p class="text-base text-center -mt-2">Saiba quando a água está em aquecimento na base com o indicador em LED.</p>
            </div>
          </div>
          <div class="swiper-slide flex justify-center items-center p-5">
            <div class="flex-shrink-0 w-full p-4 flex flex-col bg-white">
              <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-2.png" alt="Porta fio na base" class="w-full h-auto">
              <h3 class="font-poppins mt-7 text-lg text-center mb-2 font-bold uppercase">Porta fio na base</h3>
              <p class="text-base text-center -mt-2">Tenha maior facilidade no momento de guardar o cabo elétrico da chaleira utilizando o porta fio na base de aquecimento.</p>
            </div>
          </div>
          <div class="swiper-slide flex justify-center items-center p-5">
            <div class="flex-shrink-0 w-full p-4 flex flex-col bg-white">
              <img src="./images/chaleira_wce2_chaleira-wce2-detalhe-3.png" alt="Base 360° giratória" class="w-full h-auto">
              <h3 class="font-poppins mt-7 text-lg text-center mb-2 font-bold uppercase">Base 360° giratória</h3>
              <p class="text-base text-center -mt-2">Encaixe a jarra da chaleira na base giratória 360° em qualquer ângulo com segurança e praticidade.</p>
            </div>
          </div>
        </div>
      </section>


      <section class="flex md:flex-row flex-col items-center mt-10">
        <div class="md:w-1/2 px-5 md:mx-0">
          <img src="./images/chaleira_wce2_chaleira-wce2-fundo-vermelho.png" alt="Chaleira WAP PROSDÓCIMO WCE2" class="w-full h-auto">
        </div>
        <div class="md:w-1/2 px-5  mt-10 flex flex-col justify-center">
          <h1 class="md:text-4xl text-xl font-bold uppercase mb-4">Sabor tradicional, conforto que <br class="hidden md:block"> inova a rotina</h1>
          <p class="mb-4">
            Mantenha a tradição de preparar as bebidas favoritas do seu jeito, enquanto aproveita os benefícios da tecnologia que transformam sua rotina.
            <br class="hidden md:block"><br class="hidden md:block">
            Com a <span class="font-bold">WAP CHALEIRA PROSDÓCIMO WCE2</span>, você pode apreciar o ritual de cozinhar suas receitas preferidas, com o conforto e a praticidade que só uma chaleira elétrica pode oferecer. 
          </p>
        </div>
      </section>
      
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="./javascript/senders.js"></script>
    <script src="./javascript/slider.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
  </body>
</html>
`;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
