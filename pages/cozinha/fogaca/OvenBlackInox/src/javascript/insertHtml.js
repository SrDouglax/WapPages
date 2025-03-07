const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Fritadeira AirFry Oven</title>
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/slider.css" />
    <link rel="stylesheet" href="styles/leafsAnimation.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </head>
  <body class="m-auto max-w-vtex">
    <div class="overflow-x-hidden">
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
        <img src="./images/fogaca_apontando_dedo_desktop.png" class="hidden w-full px-10 md:block" alt="Henrique Fogaca apontando dedo para o produto" />
        <img src="./images/fogaca_apontando_dedo_mobile.png" class="w-full px-6 m-auto md:hidden" alt="Henrique Fogaca apontando dedo para o produto" />

        <div class="flex flex-col items-start mx-10 mt-20 gap-12 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div class="flex flex-col items-center justify-end w-full px-1 tracking-tighter text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/icon_arco_red.png" alt="Icone" />
            <h1 class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              PAINEL DIGITAL
            </h1>
            <p class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Oferece 10 funções pré-programadas, incluindo receitas clássicas de air fryer e a função reaquecer. 
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-end w-full px-1 tracking-tighter text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/light_icon.png" alt="Icon" />

            <h1
              class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              PORTA COM VISOR
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Com abertura lateral, visor e luz interna permite monitorar refeições sem abrir, mantendo o calor. 
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full px-1 tracking-tighter text-center md:mx-5 md:w-1/4">
            <img class="w-10 md:w-14" src="./images/icons/circulacao_360_icon.png" alt="Icon" />
            <h1
              class="mt-4 text-base font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins">
              CIRCULAÇÃO DE AR
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Assa o alimento por igual, crocante por fora e macio por dentro, sem excesso de óleo, para pratos mais saudáveis. 
            </p>
          </div>
        </div>
      </section>

      
      <section class="flex flex-col gap-2 mt-52 text-white md:mt-40 bg-black-default md:rounded-3xl">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative z-10 -mt-[10rem] px-5 md:px-0 space-y-6 md:mt-16 md:ml-20 md:order-1 order-2">
            <h1 class="text-xl font-bold uppercase  md:text-3xl font-poppins md:w-full w-[90%]">
              DESCUBRA UMA NOVA ERA DE SABORES COM A FRITADEIRA AIRFRY OVEN DIGITAL BLACK INOX
            </h1>
            <p class="font-inter font-light tracking-tighter text-sm sm:text-base sm:pt-10 md:pt-20 lg:pt-0  lg:w-[90%]">
              A WAP combinou as funcionalidades das fritadeiras airfryer com as de fornos convencionais, o que permite fritar, grelhar, tostar e desidratar alimentos, tudo em um único aparelho. 
              <br><br>
              Seus dois andares possibilitam cozinhar diferentes tipos de alimentos simultaneamente. Com temperatura ajustável de 30°C a 200°C, é ideal para famílias grandes ou para receber convidados e servir pratos de forma eficiente e saudável. 
            </p>
          </div>
          <div class="relative flex items-start justify-start md:w-[120%] md:order-2 order-1">
            <!-- Desktop -->
            <img src="./images/produto_com_alimento.png" 
                 class="hidden md:block mr-5 -translate-y-[5rem] -translate-x-[4rem] w-full" 
                 alt="Descrição da imagem para acessibilidade" />
        
            <!-- Mobile -->
            <img src="./images/produto_com_alimento.png" 
                 class="block md:hidden w-[80%] m-auto -translate-y-[10rem]" 
                 alt="Descrição da imagem para acessibilidade" />
          </div>
        </div>

        <div class="flex flex-col-reverse gap-4 px-5 pb-20 mt-10 md:-mt-5 md:px-20 lg:grid lg:grid-cols-2">
          <div class="flex items-center justify-center px-4 md:px-8 md:py-8">
            <img
              src="./images/pão_de_queijo.png"
              alt="Bandeija com alimento"
              class="object-contain w-full h-full lg:-mt-8 lg:translate-y-10 -mt-44 translate-y-44" />
          </div>
          <div class="flex flex-col items-center justify-center gap-4  font-poppins">
            <h1 class="text-center">
              <span class="text-4xl font-bold md:text-7xl">12 LITROS</span><br />
              <span class="text-xl font-light md:text-5xl">DE CAPACIDADE</span>
            </h1>
            <p class="md:text-center font-inter font-light tracking-tighter text-sm sm:text-base md:w-[80%] w-full">
              Economize tempo e esforço na cozinha utilizando toda a ampla capacidade de 12 litros da <span class="font-bold">WAP AIRFRY OVEN DIGITAL BLACK</span>. Prove pratos deliciosos e crocantes sem esperar, economizando tempo e esforço.
            </p>
          </div>
        </div>
      </section>

      <!--Slider-->
      <section class="grid mx-5 mt-20 lg:mt-0 lg:ml-20 md:grid-cols-2">
        <div class="flex flex-col md:gap-10 md:justify-center md:ml-0">
          <div class="flex flex-col h-auto gap-3 mt-10 md:mt-0">
            <img src="./images/icons/icon_arco.png" alt="logo" class="w-10 md:w-14" />
            <h1 class="font-black text-xl md:text-2xl  text-black-default font-poppins">
              10 FUNÇÕES <br />
              PRÉ-PROGRAMADAS
            </h1>
            <p class="text-base tracking-tighter text-black-default font-light font-inter lg:w-[80%] w-[95%]">
              Para uma rotina culinária prática, conte com as 10 funções pré-programadas que incluem <span class="font-bold">receitas clássicas de airfryer e a função reaquecer</span>
            </p>
          </div>

          <!--Controler desktop-->
          <div
            class="hidden md:flex flex-col items-start justify-center h-[10rem] rounded-l-full bg-red-default">
            <div class="flex flex-col gap-5 ml-20 text-white">
              <div class="flex flex-col text-start">
                <h2 class="text-2xl font-bold card-title"></h2>
                <p class="text-base card-description font-poppins"></p>
              </div>
              <div class="flex items-center justify-center gap-5">
                <div class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer previous" style="background-image: url('./images/icons/left_sign.png')"></div>
                <div class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer next" style="background-image: url('./images/icons/right_sign.png')"></div>
              </div>
            </div>
          </div>
        </div>
        <!--Images do slider-->
        <div
          class="flex flex-col items-center justify-center w-full mt-10 lg:pb-20 sm:mt-20 md:mt-20 md:-ml-10">
          <div
            class="relative flex items-center justify-center h-full mr-5 md:mx-0 sm:mx-20">
            <img src="./images/slider/background_image.png" class="" alt="" />
            <img
              alt="Imagens de alimentos"
              id="card-image"
              class="absolute z-10 px-2 mt-10 mb-10 transition-opacity duration-500 rounded-3xl" />
          </div>
        </div>
        <!--Controler mobile-->
        <div
          class="grid items-center justify-center grid-cols-2 py-8 mt-10 text-white rounded-full md:hidden bg-red-default">
          <div class="flex flex-col items-start justify-start h-full">
            <h2
              class="text-black font-poppins ml-5 text-lg card-title font-bold leading-[120.5%] uppercase"></h2>
            <p class="ml-5 text-base card-description font-inter"></p>
          </div>
          <div class="flex items-center justify-center h-full mt-5">
            <div class="mr-2 bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 previous" style="background-image: url('./images/icons/left_sign.png')"></div>
            <div class="bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 next" style="background-image: url('./images/icons/right_sign.png')"></div>
          </div>
        </div>
      </section>

      <section class="flex flex-col md:items-center justify-center px-5 md:mt-20 mt-10">
        <h1 class="w-11/12 text-xl font-bold md:text-4xl md:text-center font-poppins">
          VERSATILIDADE PARA VOCÊ EXPLORAR<br class="hidden md:block" />TODAS AS
          POSSIBILIDADES
        </h1>
        <p class="w-11/12 mt-6 md:w-2/3 text-black-default md:text-center">
          A fritadeira <span class="font-bold">AIRFRY OVEN DIGITAL BLACK INOX PROSDÓCIMO WA0D2</span> é a melhor escolha para quem deseja preparar pratos deliciosos e saudáveis todos os dias. Diga adeus ao óleo e descubra uma maneira diferente de cozinhar suas receitas favoritas, sem abrir mão do sabor.
        </p>
        <!--Moisaico desktop-->
        <img src="./images/produto_grid.png" alt="Exposição de produtos" class="w-full mt-16 hidden md:block" />
        <!--Moisaico mobile-->
        <img src="./images/produto_grid_mobile.png" alt="Exposição de produtos" class="w-full mt-16 md:hidden" />
      </section>

      <section class="md:mt-40 mt-20 ml-5">
        <h2 class="uppercase md:text-4xl font-poppins">conjunto completo de acessórios</h2>
        <h1 class="md:text-5xl text-2xl font-bold font-poppins uppercase">+ Possibilidades</h1>
      </section>
      <!--Mais posibilidades desktop-->
      <section class="hidden relative md:flex h-[40rem] flex-col items-center justify-center mt-[30rem] bg-black-default rounded-2xl">
        <div class="relative  -translate-y-[25rem] w-[948px] h-[948px]">
          <img src="./images/mais-possibilidades-sessao.png" class="absolute" alt="">
          <div class="absolute w-[15rem] text-black left-[8.5rem] ">
            <h1 class="text-2xl font-bold font-poppins">
              PORTA REMOVÍVEL
            </h1>
            <p class="tracking-tighter font-inter">Para facilitar sua limpeza</p>
          </div>
          <div class="absolute w-[15rem] text-black left-[44rem] top-[9rem] ">
            <h1 class="text-2xl font-bold font-poppins">
              CESTO
            </h1>
            <p class="tracking-tighter font-inter">O cesto removível com 4,5 litros é perfeito para porções generosas.</p>
          </div>
          <div class="absolute text-white w-[18rem] text-black left-[1rem] text-end -bottom-[13rem]">
            <h1 class="text-2xl font-bold font-poppins">
              BANDEJA COLETORA
            </h1>
            <p class="tracking-tighter font-inter">A bandeja coletora de gordura assegura que suas refeições sejam tão saudáveis quanto deliciosas.</p>
          </div>
          <div class="absolute text-white w-[18rem] text-black right-[4rem] -bottom-[22rem]">
            <h1 class="text-2xl font-bold font-poppins uppercase">
              Bandejas antiaderente
            </h1>
            <p class="tracking-tighter font-inter">As duas bandejas com camada antiaderente oferecem versatilidade na preparação dos pratos.</p>
          </div>
        </div>
      </section>
     
      <!--Mais posibilidades mobile-->
      <section class="md:hidden flex flex-col items-center justify-center mt-[16rem] bg-black-default ">
        <div class="relative fle h-[320px] w-[25rem]">
          <img class="absolute -translate-y-[14.5rem]" src="./images/mais-possibilidades-sessao-mobile.png" alt="" class="h-[120%]">
          <div class="absolute left-[3rem] -top-[12rem]">
            <h1 class="text-lg font-bold font-poppins leading-tight">
              PORTA <br> REMOVÍVEL
            </h1>
            <p class="text-sm tracking-tighter font-inter">Para facilitar <br> sua limpeza.</p>
          </div>
          <div class="absolute  text-end right-[3.5rem] -top-[15rem] w-[32%]">
            <h1 class="text-lg font-bold font-poppins">
              CESTO
            </h1>
            <p class="text-sm text-end tracking-tighter font-inter">O cesto removível com 4,5 litros é perfeito para porções generosas.</p>
          </div>
          <div class="absolute text-white left-[13rem] bottom-[2rem]">
            <h1 class="text-lg font-bold font-poppins">
              BANDEJAS <br> ANTIADERENTE
            </h1>
            <p class="text-sm w-[85%] tracking-tighter font-inter">As duas bandejas com camada antiaderente oferecem versatilidade na preparação dos pratos.</p>
          </div>
          <div class="absolute text-white text-end right-[15.8rem] bottom-[2.5rem]">
            <h1 class="text-lg font-bold font-poppins">
              BANDEJA <br> COLETORA
            </h1>
            <p class="text-sm tracking-tighter font-inter">A bandeja coletora <br> de gordura assegura <br> que suas refeições <br> sejam tão saudáveis <br> quanto deliciosas.</p>
          </div>
        </div>
      </section>

      <section class="grid lg:grid-cols-2 m-auto md:ml-10  mt-10 md:mt-0">
        <div class="flex flex-col gap-[2.5rem]  md:items-start  justify-center items-center md:ml-28 md:mt-0 ">
          <div class="flex flex-col items-center justify-center  text-center md:text-start md:justify-start md:items-start">
            <img class="w-[3rem]" src="./images/icons/bubble_black.png" alt="" />
            <h1 class="mt-3 text-base font-bold md:text-2xl font-poppins">
              FÁCIL LIMPEZA
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1">
              A dupla camada antiaderente marmorizada GrayStone, além de conferir charme aos acessórios, garante que os alimentos não grudem. 
              <br><br>
              A porta com abertura lateral é removível para tornar a limpeza uma tarefa rápida e descomplicada. 
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center md:text-start md:justify-start md:items-start">
            <img class="w-[3rem] md:hidden" src="./images/icons/icon_arco.png" alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <img class="w-[3rem] hidden md:block" src="./images/icons/arch_black.png" alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 text-base font-bold md:text-2xl font-poppins">
              PAINEL DIGITAL
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Facilite seu dia na cozinha com um painel digital moderno e fácil de usar. Selecione uma das 10 funções pré-programadas de forma intuitiva com um toque. 
            </p>
          </div>
        </div>
        <div class="flex-col hidden md:flex items-end pb-[3rem] rounded-b-full lg:bg-red-default md:-mt-4">
          <img
            class="translate-y-[6rem] hidden lg:block  "
            src="./images/produto_para_esquerda.png"
            alt="Fritadeira airfry" 
          />
      </div>
      </section>

      <section class="grid ml-5 mt-14 md:mt-32 md:mx-0 lg:grid-cols-2">

        <img
          class="w-[30rem] sm:block hidden sm:mt-0 mt-10 mx-auto"
          src="./images/fogaca_sorrindo.png"
          alt="Henrique fogaça com a mão na cintura" 
        />

        <div class="flex flex-col md:px-0 md:mr-5 md:ml-20">
          <h1 class="text-xl md:text-4xl -top-[1rem] font-extrabold font-poppins">
            FAÇA FRITURAS SEM <br class="hidden md:block" />
            UTILIZAR ÓLEO
          </h1>

          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            Vá além das batatas fritas! Agora, preparar o almoço em família ou porções para encontros entre amigos está mais fácil – e saudável - do que nunca. 
            <br><br>
            Faça escolhas saudáveis assando, cozinhando e fritando ingredientes sem óleo ou manteiga, usando alta tecnologia e máximo desempenho.  
          </p>
          <img
            class="left-0 w-full mt-10 sm:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <h1 class="hidden mt-16 text-4xl font-extrabold md:block font-poppins">
            CARDÁPIO DE CHEF
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            CARDÁDIO DE CHEF
          </h1>
          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            Aprenda receitas exclusivas, assinados pelo chef Henrique Fogaça, e transforme
            o cardápio da sua casa com pratos simples e deliciosos.<br /><br />

            Compartilhando ingredientes e dicas de preparo, Fogaça trouxe receitas
            selecionadas para explorar ao máximo toda linha cozinha WAP.
          </p>
          <div class="mt-10 m-auto md:ml-0">
            <span
              class="px-4 py-2 font-bold text-white rounded-full cursor-pointer font-poppins bg-red-default"
              onclick="window.open('https://wap.ind.br/receitas', '_blank')">
              ACESSE AS RECEITAS DA WAP
            </span>
          </div>
        </div>

      </section>

      <section
        class="relative grid m-auto mt-20 overflow-visible text-white lg:mt-80 lg:pb-10 bg-black-default lg:rounded-3xl lg:grid-cols-2">
        <div class="w-[85%] m-auto mt-10 lg:mx-0 lg:ml-20 lg:mt-20">
          <h3 class="font-light font-poppin text-[1.25rem] lg:text-[2.5rem]">
            CIRCULAÇÃO DE AR
          </h3>
          <h1
            class="lg:text-[5.625rem] -mt-4 lg:-mt-8 text-[2.8rem] font-bold font-poppins">
            EM 360°
          </h1>
          <p
            class="font-light lg:text-[1.25rem]  md:w-[90%] tracking-tighter font-inter">
            A tecnologia de circulação de ar em 360° garante um cozimento uniforme do
            alimento, deixando-o crocante por fora e macio por dentro, além de eliminar o
            óleo em excesso, proporcionando pratos mais saudáveis. 
          </p>
        </div>
        <img
          class="m-auto mt-10 mb-[-10%] lg:mb-0 w-[18rem] lg:w-[30rem] lg:-mt-40"
          src="./images/circulacao_360.png"
          alt="Circulação de ar 360 graus" />
      </section>

      <section class="grid m-auto -mt-5 lg:grid-cols-2">
        <div class="flex flex-col pb-20 rounded-b-full lg:bg-red-default">
          <div class="flex flex-col gap-8 mx-5 lg:m-auto md:justify-center">
            <h1
              class="mt-32 text-2xl font-bold text-black md:pl-5 lg:text-white font-poppins">
              MAIS POSSIBILIDADES,<br />
              SEM PERDER O SABOR
            </h1>
            <p class="lg:text-white mb-4 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[95%] md:w-[26rem]">
              A Fritadeira Elétrica <span class="font-bold">WAP AIRFRY OVEN DIGITAL BLACK INOX</span> é potente e espaçosa, ideal para preparar alimentos maiores e em grandes quantidades. Quer ver exemplos? 
              <br><br>
              Faça um frango suculento, bolos deliciosos, batata frita ou até mesmo uma pizza bem recheada para compartilhar com os amigos, tudo de forma rápida e descomplicada. 
            </p>
          </div>
          <img class="hidden px-10 lg:block" src="./images/produto_com_batata.png" alt="Fritadeira airfry"/>
          <img class="lg:hidden mt-10" src="./images/cesto_com_alimento.png" alt="Fritadeira airfry"/>
        </div>

        <div class="flex flex-col gap-[2.5rem] md:items-start mx-5 md:mt-14 md:ml-20 lg:py-14 ">
          <div class="flex flex-col md:items-start items-center">
            <img class="w-10 md:w-14" src="./images/icons/timer_icon.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              TIMER DE 120 MIN
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1 text-center md:text-start">
              Tenha controle total no processo de cozimento com o timer, que emite um aviso sonoro ao final do preparo dos alimentos.
            </p>
          </div>

          <div class="flex flex-col md:items-start items-center">
            <img
              class="w-10 md:w-14"
              src="./images/icons/temperature_icon.png"
              alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              TEMPERATURA DE ATÉ 200º C
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1 text-center md:text-start">
              O seletor de temperatura, com variação de 30°C a 200°C, permite que você escolha a opção ideal para diversos preparos.
            </p>
          </div>

          <div class="flex flex-col md:items-start items-center">
            <img class="w-10 md:w-14" src="./images/icons/lava_louca.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">USE NA LAVA-LOUÇAS</h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1 text-center md:text-start">
              Após o uso, você pode higienizar os acessórios da OVEN BLACK WAP na lava-louça de forma prática.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative flex items-center justify-center pb-4 mt-10 m-auto max-w-screen-2xl">
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
  </body>
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
  <script src="./javascript/imagesAnimation.js"></script>
  <script src="./javascript/senders.js"></script>
  <script src="./javascript/slider.js"></script>
</html>
`;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
    