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
    <link rel="stylesheet" href="styles/leafsAnimation.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />

  </head>

  </head>
  <body class="m-auto ">
    <div class="m-auto overflow-x-hidden max-w-vtex ">
      <header class="flex flex-col items-center">
        <div class="w-full" x-data="{ showVideo: false }">
          <img
            x-show="!showVideo"
            @click="showVideo = true"
            src="./images/cover_video.png"
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
        <img
          src="./images/fogaca_apontando_dedo_desktop.png"
          class="hidden w-full px-10 md:block"
          alt="Henrique Fogaca apontando dedo para o produto" />
        <img
          src="./images/fogaca_apontando_dedo_mobile.png"
          class="w-full px-8 m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto" />

        <div
          class="flex flex-col items-start gap-20 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div
            class="flex flex-col items-center justify-end text-center w-ful2 md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/icons/capacity-red.png" alt="Icone" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              1,7 LITROS<br class="hidden md:block" />
              DE CAPACIDADE
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Aquece a quantidade ideal de água para as bebidas e receitas favoritas de toda família. 
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-2 text-center md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/icons/power_red_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              DESLIGAMENTO<br class="hidden md:block" />
              AUTOMÁTICO
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Ao finalizar o aquecimento, a chaleira emite um aviso sonoro e desliga imediatamente.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-2 text-center md:mx-2 md:w-1/4">
            <img class="w-10 md:w-[3.7rem]" src="./images/icons/filter-red.png" alt="Icon" />
            <h1
              class="mt-4 md:w-full  text-lg font-black leading-tight text-center text-black uppercase md:text-[1.375rem] font-poppins">
              FILTRO QUE RETÉM <br class="hidden md:block" />
              AS IMPUREZAS
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              O filtro fixo é ideal para o preparo de líquidos mais puros e saborosos em cada uso.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative flex flex-col pb-10 mt-[7rem] md:mt-[13rem] text-white bg-black-default md:rounded-3xl">
        <div class="grid grid-cols-2 gap-4">
          <div class="z-20 flex-shrink-0 mt-8 ml-8 space-y-6 md:mt-12 md:ml-28">
            <h1 class="text-lg leading-none  md:tracking-tighter md:leading-9 font-black uppercase sm:text-[2.185rem] font-poppins flex flex-col">
              PRATICIDADE E A TEMPERATURA CERTA PARA O CAFÉZINHO 
            </h1>
            <p class="font-inter text-sm tracking-tight w-[200%] sm:w-[75%]">
              Transforme os momentos na cozinha em experiências funcionais que se adaptam ao seu estilo de vida. <b class="font-bold">A Chaleira Elétrica Prosdócimo WAP</b> é a companheira ideal no preparo do seu café, chá, chimarrão, macarrão e arroz. 
            </p>
          </div>
          <div class="flex items-start justify-end  w-[120%] md:w-full   ">
            <img
              src="./images/produto_com_alimento.png"
              class=" -translate-y-[2rem] -translate-x-[1rem] md:-translate-y-[4.5rem] md:translate-x-[0rem] md:mr-14 md:w-full"
              alt="" />
          </div>
        </div>
        <div class="flex flex-col flex-wrap items-center mt-10">
          <div class="w-[40%] h-0.5 bg-white bg-opacity-20 rounded-full"></div>
          <h1 class="my-8 text-center uppercase sm:text-[2.25rem] md:my-14">
            SUA ROTINA MUITO MAIS <b class="font-bold">PRÁTICA</b>
          </h1>
          <div class="flex flex-wrap items-center justify-center gap-5 mx-10 ">
            <div class="flex flex-col items-center justify-center w-40">
              <img src="./images/cafe.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CAFÉ</h1>
            </div>
            <div class="flex flex-col items-center justify-center w-40">
              <img src="./images/chimarrao.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CHIMARRÃO</h1>
            </div>
            <div class="flex flex-col items-center justify-center w-40">
              <img src="./images/cha.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">CHÁ</h1>
            </div>
            <div class="flex flex-col items-center justify-center w-40">
              <img src="./images/macarrao.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">MACARRÃO</h1>
            </div>
            <div class="flex flex-col items-center justify-center w-40">
              <img src="./images/arroz.png" alt="">
              <h1 class="md:text-[1rem] text-sm mt-3 font-bold font-poppins">ARROZ</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center order-2 md:order-1 ">
          <img src="./images/produto-de-lado.png" class="hidden md:block" alt="">
          <img src="./images/produto-de-lado-mobile.png" class="md:hidden" alt="">
        </div>
        <div class="flex flex-col order-1 mt-10 ml-5 md:mt-0 md:ml-10 md:items-center md:justify-center md:order-2">
          <h1 class="font-poppins leading-9 text-xl md:text-[2.18rem] font-bold">
            TEMPERATURA E <br class="md:hidden"> FUNCIONALIDADE IDEAL
          </h1>
          <p class="mt-3 text-base font-light text-black font-inter md:mt-5">
            Para prevenir o superaquecimento do produto e economizar energia, a <b class="font-bold">Chaleira Elétrica Prosdócimo WAP</b> desliga automaticamente ao finalizar o aquecimento. Além disso, o indicador luminoso acompanha o processo de aquecimento, mostrando o funcionamento do produto.  
            <br><br>
            A chaleira também acompanha o botão Pop-Up, o qual facilita a abertura da tampa, tornando o processo mais seguro, evitando o derramamento de conteúdo no momento de servir. 
          </p>
        </div>
      </section>

      <section class="flex flex-col mt-24 md:flex-row md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col md:w-[90%] ">
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1
              class="text-2xl leading-9 md:text-[2.25rem] -top-[1rem] font-bold font-poppins uppercase">
              ELEGÂNCIA E <br class="hidden md:block"/>DURABILIDADE
            </h1>
            <p class="mt-3 text-base font-light text-black font-inter md:mt-[0.7rem]">
              Prática e com um design único, o acabamento em aço inox <b class="font-bold">Chaleira Elétrica Prosdócimo WAP</b> traz sofisticação à sua cozinha. Mas não só isso! Ela assegura que você e sua família não consumam metais prejudiciais à saúde.
              <br><br>
              Mais resistente, higiênica e durável, a chaleira é equipada com um indicador de nível de água e um filtro que retém impurezas, garantindo líquidos mais puros e saborosos em cada uso.
            </p>
          </div>
          <img
            class="left-0 w-full px-5 mt-10 md:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <div class="flex flex-col mx-8 md:px-0 md:mr-5 md:ml-20">
            <h1
              class=" mt-8 text-[1.625rem] leading-9 font-bold uppercase  font-poppins">
              descubra o chef que existe em você
            </h1>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter ">
              Aprenda receitas exclusivas, assinados pelo chef Henrique Fogaça, e transforme o cardápio da sua casa com pratos simples e deliciosos.
            </p>
            <p class="mt-3 text-base w-[80%] font-light text-black font-inter">
              Deixe suas refeições ainda melhores! Desperte o chef que há em você com a
              linha de cozinha da WAP.
            </p>
            <div class="flex items-center justify-center mt-10 md:justify-start wf">
              <span
                class="px-6 py-3 font-bold text-white rounded-lg cursor-pointer font-poppins bg-red-default"
                onclick="window.open('https://wap.ind.br/receitas', '_blank')">
                ACESSE AS RECEITAS DA WAP
              </span>
            </div>
          </div>
        </div>
        <div class="flex-col items-center justify-center hidden w-full m-auto md:flex">
          <img
            src="./images/fogaca_mao_na_cintura_fundo_vermelho.png"
            alt="Henrique fogaça com a mão na cintura" />
        </div>
      </section>

      <section class="bg-black-default mt-44 md:pb-0 pb-10 md:h-[25rem] grid grid-cols-2 rounded-t-2xl">
        <div class="ml-5 md:ml-[6.75rem] mt-[3.67rem]">
          <h1 class="font-bold text-white uppercase font-poppins text-2xl md:text-[3.4rem]">
            DESLIGAMENTO
           </h1>
          <h2 class="text-lg md:text-[2.4rem] font-light md:mt-5 text-white uppercase font-poppins">AUTOMÁTICO</h2>
          <p class="mt-5 md:text-[1.25rem] text-sm font-normal tracking-tight text-white font-inter">
            Além de promover segurança e economia de energia, o mecanismo evita o superaquecimento do produto, desligando-o automaticamente após finalizar o preparo.
         </p>
        </div>
        <div class="flex flex-col md:items-start md:justify-center md:ml-20 ">
          <img src="./images/produto_cima.png" class="-translate-y-8 md:-translate-y-16" alt="">
        </div>
      </section>

      <section class="grid m-auto md:mx-10 md:grid-cols-2">
        <div class="ml-[5%] md:w-full md:ml-0 flex flex-col w-[70%] rounded-b-full bg-red-default">
          <div
            class="flex flex-col gap-8 mt-5 ml-5 lg:m-auto md:justify-center"
          >
            <h1 class="mt-10 text-2xl md:text-[2rem] font-bold text-black md:mt-20 md:pl-5 text-white font-poppins">
              DETALHES QUE <br />
              FAZEM A DIFEREÇA
            </h1>
            <p class="text-white mb-20 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]">
              Seus momentos na cozinha podem se tornar experiências ainda mais saudáveis. Ótimo para a preparação de chás e demais bebidas, a chaleira possui um filtro fixo que oferece uma água mais pura para beber, uma vez que retém impurezas e prolonga a vida útil do aparelho.
              <br><br>
              Acompanhe o nível exato da água aquecida, inserida na Chaleira Elétrica Prosdócimo WAP, utilizando o visor e o marcador, e tenha controle total do preparo do início ao fim.
            </p>
          </div>
          <img
            class="m-auto -mt-16 w-[20rem] translate-y-5 lg:mr-0 md:w-[30rem]"
            src="./images/chaleira-inclinada.png"
            alt="Fritadeira airfry"
          />
        </div>

        <div
          class="flex flex-col gap-[2.5rem] mt-20 items-center md:items-start md:ml-14 lg:mt-28 cards-section"
        >
          <div class="flex flex-col items-center justify-center text-center md:items-start md:text-start">
            <img class="w-[3rem]" src="./images/icons/filter-black.png" alt="" />
            <h1 class="w-full mt-[0.93rem] font-black uppercase lg:text-start lg:text-2xl md:text-xl text-black-default font-poppins">
              FILTRO QUE RETÉM AS IMPUREZAS
            </h1>
            <p
              class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1"
            >
            Assegurando líquidos mais puros e saborosos em cada uso.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center md:items-start md:text-start">
            <img
              class="w-[3rem]"
              src="./images/icons/indicator-black.png"
              alt="WAP AIRFRY GRAND FAMILY PROSDÓCIMO"
            />
            <h1 class="w-full mt-[0.93rem] font-black uppercase lg:text-start lg:text-2xl md:text-xl text-black-default font-poppins">
              INDICADOR DE NÍVEL DE ÁGUA
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Facilita na visualização da quantidade de água, garantindo medidas mais precisas. 
            </p>
          </div>
          <div class="flex flex-col items-center justify-center text-center md:items-start md:text-start">
            <img class="w-[3rem]" src="./images/icons/power_icon.png" alt="" />
            <h1 class="w-full mt-[0.93rem] font-black uppercase lg:text-start lg:text-2xl md:text-xl text-black-default font-poppins">
              BOTÃO POP-UP FÁCIL DE ABRIR
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Basta tocar no botão da alça, e a tampa se abrirá automaticamente. 
          </div>

          <div class="flex flex-col items-center justify-center text-center md:items-start md:text-start">
            <img class="w-[3rem]" src="./images/icons/light-black.png" alt="" />
            <h1 class="w-full mt-[0.93rem] font-black uppercase lg:text-start lg:text-2xl md:text-xl text-black-default font-poppins">
              INDICADOR LUMINOSO
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Acompanha o processo de aquecimento, fornecendo informações sobre o funcionamento do dispositivo.
            </p>
          </div>
        </div>
      </section>

      <section class="grid m-auto lg:mt-0 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center order-2 pt-20 pb-20 md:order-1 lg:items-start md:pl-20 gap-y-12">
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start ">
            <img
              class="w-[3rem]"
              src="./images/icons/cable-black.png"
              alt="" />
              <h1
              class="w-full mt-[0.93rem] font-black uppercase lg:text-start lg:text-2xl md:text-xl text-black-default font-poppins">
              PORTA FIO NA BASE
            </h1>
            <p
              class="font-inter lg:w-[25rem] lg:text-lg w-3/4 font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Perfeito para manter sua cozinha em ordem, evitando bagunça de cabos pelo ambiente. 
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <img
              class="w-[3rem]"
              src="./images/icons/360-black.png"
              alt="Icone lava louça" />
            <h1
              class="w-full mt-[0.93rem] font-black uppercase lg:text-start md:text-2xl text-black-default font-poppins">
              BASE 360° GIRATÓRIA
            </h1>
            <p
              class="font-inter lg:w-[25rem] lg:text-lg w-3/4 font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Torna o preparo de bebidas diárias uma tarefa descomplicada. Você pode encaixar a chaleira em qualquer ângulo, e ela começará a aquecer a água instantaneamente.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center order-1 md:order-2">
          <img
            class="hidden md:block"
            src="./images/fogaca_sorrindo.png"
            alt="Foto fogaça sorrindo" />
          <img
            class="px-5 mt-10 md:hidden"
            src="./images/fogaca_sorrindo_mobile.png"
            alt="Foto fogaça sorrindo" />
        </div>
      </section>

      <section class="relative flex items-center justify-center m-auto max-w-screen-2xl">
        <img
          class="object-fill lg:hidden"
          src="./images/fogaca_na_cozinha_mobile.png"
          alt="" />
        <img
          class="hidden object-fill mt-20 lg:block"
          src="./images/fogaca_na_cozinha.png"
          alt="" />
      </section>
    </div>
    <script src="./javascript/senders.js"></script>
    <script src="./javascript/productInspect.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
  </body>
</html>

`;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
