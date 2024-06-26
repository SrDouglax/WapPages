const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Panela de Pressão</title>
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
  <main class="m-auto max-w-vtex">
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
        <img
          src="./images/fogaca_apontando_dedo_desktop.png"
          class="hidden w-full px-10 md:block"
          alt="Henrique Fogaca apontando dedo para o produto" />
        <img
          src="./images/fogaca_apontando_dedo_mobile.png"
          class="w-full px-6 m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto" />

        <div
          class="flex flex-col items-start gap-12 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28">
          <div
            class="flex flex-col items-center justify-end w-full text-center md:mx-5">
            <img class="w-10 md:w-14" src="./images/icons/lock_red.png" alt="Icone" />
            <h1
              class="mt-10 text-lg font-bold leading-snug text-center text-black uppercase md:text-2xl font-poppins">
              10 DISPOSITIVOS DE <br class="hidden md:block"> SEGURANÇA
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Os dispositivos de segurança da panela elétrica garantem a sua proteção e a da sua família.
            </p>
          </div>

          <div
            class="flex flex-col items-center justify-end w-full text-center md:mx-5">
            <img class="w-10 md:w-14" src="./images/icons/chef_red.png" alt="Icon" />
            <h1
              class="mt-10 text-lg font-bold leading-snug text-center text-black uppercase md:text-2xl font-poppins">
              FUNÇÕES PRÉ-<br class="hidden md:block">PROGRAMADAS
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              As 10 funções pré-definidas alcançam resultados saborosos no preparo de receitas conhecidas.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-end w-full text-center md:mx-5">
            <img class="w-10 md:w-14" src="./images/icons/arch_red.png" alt="Icon" />
            <h1
              class="mt-10 text-lg font-bold leading-snug text-center text-black uppercase md:text-2xl font-poppins">
              PAINEL DIGITAL <br class="hidden md:block"> COM TIMER
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter">
              Tenha liberdade para definir o tempo de cozimento e programar o preparo das refeições.
            </p>
          </div>
        </div>
      </section>

      <section class="grid grid-rows-2 mx-8 mt-20 md:mt-40 md:grid-rows-1 gap-x-10 md:grid-cols-2">
        <div>
          <img src="./images/produto-com-alimento-dentro.png" alt="">
        </div>
        <div class="flex flex-col justify-center -mt-10 md:mt-0">
          <h1 class="mt-4 text-base font-bold leading-snug text-black uppercase text-black-default md:text-4xl font-poppins">
            SEGURANÇA E PRATICIDADE PARA COMIDAS MUITO MAIS SABOROSAS
          </h1>
          <p class="mt-4 text-base font-light leading-5 text-black font-inter">
            Para você fazer suas receitas com confiança e muito sabor, combinamos praticidade e segurança em um só produto para mudar sua experiência culinária. 
            <br><br>
            Com grande capacidade, a panela elétrica é ideal para preparar alimentos de lenta cocção ou que exigem altas temperaturas.
            <br><br>
            São 3 níveis de cozimento para que você possa preparar receitas tamanho família com segurança. 
          </p>
        </div>
      </section>

      <section
      class="flex flex-col gap-2 pb-16 mt-20 text-white md:mt-72 bg-black-default md:rounded-3xl">
      <div class="relative grid grid-cols-2 gap-8">
        <img
        class="absolute object-fill w-[5rem] animation -top-16 left-5 md:-top-14 md:left-[0rem] md:w-[15rem] animate-subtle" src="./images/effect_imgs/effect_img_1.png" alt="" />
        <div class="relative z-10 flex flex-col w-[110%] items-center mt-20 ml-1 md:mt-40">
          <h1 class="uppercase text-4xl z-10 font-bold md:text-[3.5rem] leading-tight  font-poppins">
            6 LITROS
          </h1>
          <p class="z-10 text-lg font-light md:text-3xl font-poppins">
            DE CAPACIDADE
          </p>
          <p
            class="hidden sm:block font-inter mt-5 text-center z-10 font-light tracking-tighter text-sm sm:text-base lg:w-[50%]">
            O cesto com a capacidade de 6 litros permite o preparo de grandes porções com segurança e praticidade para a família toda.
          </p>
        </div>
        
        <div class="relative flex items-start justify-start w-[120%]">
          <img
            class="absolute z-10 hidden md:block animation object-fill md:-top-14 w-[2rem] md:w-[8rem] md:-left-36 left-8 animate-float"
            src="./images/effect_imgs/effect_img_2.png"
            alt="Imagem de efeito" />
          <img
            class="absolute z-10 animation object-fill w-[4rem] right-5 -top-[1rem] md:top-10 md:w-[8rem] md:right-20 animate-subtle  md:animate-float"
            src="./images/effect_imgs/effect_img_4.png"
            alt="Imagem de efeito" />

          <img
            class="absolute z-10  object-fill animation animate-subtle right-[1rem] md:right-14 top-[5rem] lg:top-[19rem] w-[5rem] md:w-[15rem]" src="./images/effect_imgs/effect_img_3.png" alt="Imagem de efeito" />
          <img
            src="./images/produto_com_alimento.png"
            class="mr-0 mx-12 -translate-y-[2rem] w-[14rem] -translate-x-[5rem] sm:-translate-y-[2rem] md:-translate-y-[10rem] md:-translate-x-[8rem] md:mr-5 md:w-full"
            alt="" />
        </div>
      </div>
      <p class="sm:hidden font-inter -mt-5 text-center z-10 font-light tracking-tighter text-sm sm:text-base lg:w-[70%]">
          O cesto com a capacidade de 6 litros permite o preparo de grandes porções com segurança e praticidade para a família toda.
      </p>
      <div class="flex flex-wrap items-center w-full gap-10 px-2 mt-12 md:-mt-28 sm:px-10 md:mx-0 md:gap-2 md:flex-nowrap justify-evenly">
        <div class="flex flex-col items-center justify-center w-40 h-48">
          <img class="object-cover object-center w-40 h-48" src="./images/mini_slider/arroz.png" alt="Arroz" />
          <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">ARROZ</h1>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-48">
          <img class="object-cover object-center w-40 h-48" src="./images/mini_slider/vegetais.png" alt="Vegetais" />
          <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">VEGETAIS</h1>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-48">
          <img class="object-cover object-center w-40 h-48" src="./images/mini_slider/carne.png" alt="Carne" />
          <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">CARNE</h1>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-48">
          <img class="object-cover object-center w-40 h-48" src="./images/mini_slider/sopa.png" alt="Sopa" />
          <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">SOPA</h1>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-48">
          <img class="object-cover object-center w-40 h-48" src="./images/mini_slider/feijao.png" alt="Sopa" />
          <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">FEIJÃO</h1>
        </div>
      </div>
    </section>

      <section class="grid mx-5 mt-20 lg:mt-0 md:ml-20 md:grid-cols-2">
        <div class="flex flex-col md:gap-10 md:justify-center md:ml-0">
          <div class="flex flex-col h-auto gap-3 mt-10 md:mt-0">
            <img src="./images/icons/arch_red.png" alt="logo" class="w-10 md:w-14" />
            <h1 class="text-lg font-black md:text-4xl text-black-default font-poppins">
              10 FUNÇÕES <br />
              PRÉ-PROGRAMADAS
            </h1>
            <p
              class="text-base tracking-tighter text-black-default font-light font-inter lg:w-[80%] w-[70%]">
              Com as funções pré-selecionadas, é possível cozinhar pratos conhecidos no cardápio do seu cotidiano.
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
                <p class="font-bold card-counter"></p>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer previous" style="background-image: url('./images/icons/left_sign.png')"></div>
                <div
                  class="w-10 h-10 bg-center bg-no-repeat bg-cover cursor-pointer next" style="background-image: url('./images/icons/right_sign.png')"></div>
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
          <div class="flex flex-col items-center justify-center h-full">
            <h2
              class="text-black font-poppins ml-5 text-lg card-title font-bold leading-[120.5%] uppercase"></h2>
          </div>
          <div class="flex items-center justify-center h-full ">
            <p class="mr-4 font-bold card-counter"></p>
            <div
              class="mr-2 bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 previous" style="background-image: url('./images/icons/left_sign.png')"></div>
            <div
              class="bg-center bg-no-repeat bg-cover cursor-pointer w-7 h-7 next" style="background-image: url('./images/icons/right_sign.png')"></div>
          </div>
        </div>
      </section>
      
      <section class="grid mx-5 mt-20 lg:grid-cols-2 md:mx-20">
        <div class="flex flex-col justify-center w-[95%] gap-5 text-black-default">
          <h1 class="md:text-4xl text-xl w-[90%] font-bold font-poppins">CONHEÇA A PANELA DE PRESSÃO ELÉTRICA PROSDÓCIMO WAP</h1>
          <p class="w-[90%]">A programação de funções da panela elétrica de pressão é simples, com funções descomplicadas, proporcionando uma experiência completa aos usuários.</p>
          <h1 class="mt-10 text-xl font-bold md:text-2xl font-poppins">FUNÇÕES PARA FACILITAR SUA ROTINA</h1>
          <p class="w-[90%]">
            <b class="font-bold">A Panela de Pressão Elétrica Prosdócimo WAP</b> tornar o momento de cozinhar ainda mais completo! Sabe como? O modo <b class="font-bold">manter aquecido</b> preserva a temperatura dos pratos até o momento de servir.
            <br><br>
            Além disso, a função <b>refogar</b> é ideal para dourar temperos e outros alimentos antes de cozinhar na pressão. Isso dá ainda mais sabor às suas receitas!
          </p>
          <h1 class="text-xl font-bold uppercase md:text-2xl lg:hidden font-poppins">Mais segurança para cozinhar </h1>
          <p class="w-[90%]">
              Você e sua família merecem aproveitar o melhor da culinária com confiança todos os dias. Para isso, a Panela de Pressão Elétrica Prosdócimo WAP garante proteção durante a utilização do aparelho, com 10 dispositivos de segurança. 
          </p>
        </div>
        <div class="relative flex flex-col lg:w-[800px] lg:h-[750px]">
          <!--Desktop product inspect-->
          <div class="hidden lg:block">
            <img class="" src="./images/product-inspect-desktop.png" alt="">
            <span id="span1" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class="absolute rounded-full px-5 py-5  bottom-[21rem] left-[22%]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 right-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">NÍVEL DE COZIMENTO</h1>
                <p class="tracking-tighter font-inter">Selecione o nível de cozimento. Aperte essa função até indicar a opção desejada (Baixo, Médio ou Alto) no visor luminoso.</p>
              </div>
            </span>
            <span id="span2" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class=" absolute rounded-full px-4 py-4  bottom-[17.5rem] left-[12.4rem]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 right-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">PROGRAMAR PREPARO</h1>
                <p class="tracking-tighter font-inter">Cozinhe o seu alimento com o tempo programado de 10 minutos até 24 horas.</p>
              </div>
            </span>
            <span id="span3" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class=" absolute rounded-full px-4 py-4  bottom-[17.5rem] left-[15.5rem]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 right-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">SELETOR DE TEMPO</h1>
                <p class="tracking-tighter font-inter">Alteração do tempo de cocção na função manual ou nas demais funções pré-definidas.</p>
              </div>
            </span>
            <span id="span4" onmouseover="productInspect(event)" onmouseout="hideInspect(event)" class=" absolute rounded-full px-4 py-4  bottom-[22.5rem] left-[16.5rem]">
              <div class="w-[25rem] absolute rounded-lg p-4 hidden -bottom-10 right-[2.5rem] bg-white shadow-2xl py-5 px-5 text-black-default" id="infoBox">
                <h1 class="text-2xl font-bold font-poppins">MANTER AQUECIDO / CANCELAR</h1>
                <p class="tracking-tighter font-inter">Cancele qualquer função programada ou mantenha seus alimentos na temperatura certa até serem servidos.</p>
              </div>
            </span>
          </div>
      </section>

      <section>
        <div class="flex flex-col mt-10 lg:hidden">
          <div class="mx-10">
            <img src="./images/product-inspect-mobile.png" alt="">
          </div>
        
          <div class="relative flex">
            <div class="flex-none w-full p-4 px-12 rounded-lg shadow-lg">
              <h1 id="cardTitle" class="text-2xl font-bold font-poppins">Título</h1>
              <p id="cardDescription">Descrição</p>
            </div>
            <button class="absolute left-0 p-2 transform -translate-y-1/2 bg-white top-1/2" onclick="changeCard(-1)">&#10094;</button>
            <button class="absolute right-0 p-2 transform -translate-y-1/2 bg-white top-1/2" onclick="changeCard(1)">&#10095;</button>
          </div>
        </div>
      </section>

      <section class="flex-col items-center justify-center hidden mx-5 mt-20 lg:flex">
        <h1 class="w-11/12 text-xl font-bold md:text-4xl md:text-center font-poppins">
          MAIS SEGURANÇA PARA COZINHAR
        </h1>
        <p class="w-11/12 mt-6 md:w-2/3 text-black-default md:text-center">
          Você e sua família merecem aproveitar o melhor da culinária com confiança todos os dias. Para isso, a <b>Panela de Pressão Elétrica Prosdócimo WAP</b> garante proteção durante a utilização do aparelho, com 10 dispositivos de segurança. 
        </p>
      </section>

      <div class="flex flex-col items-center justify-center mt-20">
        <img class="px-10" src="./images/produto-aberto.png" alt="">
      </div>
      
      <section class="flex flex-col items-center pb-10 -mt-16 lg:-mt-44 bg-black-default rounded-3xl">
        <img class="mt-20 md:hidden md:mt-40" src="./images/10-dispositivos-de-seguranca.png" alt="">
        <div class="grid grid-cols-2 grid-rows-1 mt-5 md:mt-56 md:grid-cols-3">
          <div class="flex-col items-end justify-end hidden md:flex md:border-r-2">
            <img class="my-auto mr-5" src="./images/10-dispositivos-de-seguranca.png" alt="">
          </div>
          <div class="flex flex-col items-start justify-start gap-5 ml-5 text-white">
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">01.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Válvula de alívio de pressão
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">02.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Cobertura antibloqueio
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">03.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Termostato
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">04.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Dispositivo de alívio de pressão
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">05.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Travamento automático da tampa
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start justify-start gap-5 ml-5 text-white">
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">06.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Dispositivo de travamento automático
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">07.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Controle de pressão
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">08.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Fusível térmico
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">09.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Proteção contra fornecimento de energia irregular
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div>
                <span class="text-2xl text-outline">10.</span> 
              </div>
              <div class="w-[60%] md:w-[90%] font-inter tracking-tighter font-normal text-sm ">
                Aviso sonoro
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative md:grid md:grid-cols-2">
        <div class="flex flex-col gap-5 pb-56 mx-5 text-white rounded-b-full md:ml-5 bg-red-default">
          <div class="flex flex-col gap-5 mx-5 mt-20 md:ml-10">
            <div>
              <img src="./images/icons/acessories_white.png" alt="">
            </div>
            <h1 class="text-2xl font-bold lg:text-3xl font-poppins">
              ACESSÓRIOS QUE <br class="md:hidden"> FAZEM <br class="hidden md:block"> TODA DIFERENÇA
            </h1>
            <p class="w-[85%] font-inter tracking-tighter font-light">
              Viva a experiência de cozinhar com acessórios que auxiliam na preparação dos pratos.<b class="font-bold"> A Panela de Pressão Elétrica de 6 litros da WAP</b> acompanha um conjunto completo de acessórios: <b class="font-bold">duas colheres, copo medidor, coletor de água e cesto de vapor.</b>
            </p>
          </div>

          <div class="flex flex-col gap-5 mx-5 mt-20 md:ml-10">
            <div>
              <img src="./images/icons/acessories_white.png" alt="">
            </div>
            <h1 class="text-2xl font-bold lg:text-3xl font-poppins">
              CABO ELÉTRICO <br> REMOVÍVEL
            </h1>
            <p class="w-[80%] font-inter tracking-tighter font-light">
              Além de transportar a panela até a mesa com maior praticidade, o recurso permite uma limpeza mais eficaz e facilidade ao guardar. 
            </p>
          </div>
          <div class="relative items-end justify-end mt-10 md:hidden ">
            <img class="absolute px-5" src="./images/produto-com-alimento-e-acessorios.png" alt="">
          </div>
        </div>
        <div class="md:flex hidden flex-col items-end justify-end w-[130%]">
          <img class="w-[60rem] -translate-x-64 translate-y-36" src="./images/produto-com-alimento-e-acessorios.png" alt="">
        </div>
      </section>

      <section class="flex flex-col text-white bg-black-default md:grid md:grid-cols-2 md:h-full h-[35rem] mt-52 rounded-3xl">
        <div class="flex flex-col items-center justify-center order-2 translate-y-8 md:order-1 md:-translate-y-10 ">
          <img src="./images/antiaderente-gray-stone.png" alt="">
        </div>
        <div class="flex flex-col justify-center order-1 gap-5 mx-5 mt-10 md:order-2 md:mt-0 md:mx-0">
          <h1 class="text-xl font-bold md:text-4xl font-poppins">
            ANTIADERENTE <br class="hidden md:block"> GRAYSTONE.  <br class="md:hidden"> MENOS <br class="hidden md:block"> TEMPO NA LIMPEZA
          </h1>
          <p class="font-normal md:w-[70%] text-base tracking-tighter font-inter">
            O recipiente interno removível da panela possui camada antiaderente Gray Stone, com acabamento marmorizado, o que torna a tarefa de servir os alimentos e fazer a limpeza muito mais fácil.
            <br><br>
            A tecnologia antiaderente tem muitas vantagens, além de simplificar a limpeza, evitando que a gordura e os alimentos grudem no recipiente removível. 
          </p>
        </div>
      </section>

      <section class="grid mt-64 ml-5 lg:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col md:px-0 md:mr-5 md:ml-20">
          <h1 class="text-xl md:text-4xl -top-[1rem] font-extrabold font-poppins">
            PREPARE AS <br class="hidden md:block" />
            RECEITAS DO DIA A
            DIA COM AGILIDADE
          </h1>

          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            Cozinhe mais rápido comida de verdade, como feijão, mandioca ou carne de panela com um clique. Ágil, a panela elétrica da WAP poupa tempo para facilitar a sua rotina.
            <br/><br/>
            A pressão uniforme sobre os ingredientes permite que o calor penetre nos alimentos de forma eficiente, os cozinhando mais rapidamente que as panelas convencionais.
          </p>
          <img
            class="left-0 w-full mt-10 sm:hidden"
            src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
            alt="Henrique fogaça com a mão na cintura" />
          <h1 class="hidden mt-16 text-2xl font-extrabold md:block font-poppins">
            APRENDA AS RECEITAS DO <br>CHEF HENRIQUE FOGAÇA
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            APRENDA AS RECEITAS DO <br>CHEF HENRIQUE FOGAÇA
          </h1>
          <p class="mt-3 text-base w-[90%] font-light text-black font-inter md:mt-5">
            Vivencie experiências gastronômica únicas sem sair de casa, aprendendo as receitas do Chef Henrique Fogaça.
            <br /><br />
            Desde os ingredientes até o modo de preparo, Fogaça compartilhou pratos simples e deliciosos para despertar o chef que existe em você, com a linha cozinha da WAP.
          </p>
          <div class="mt-10">
            <span
              class="px-4 py-2 font-bold text-white rounded-md cursor-pointer font-poppins bg-red-default"
              onclick="window.open('https://wap.ind.br/receitas', '_blank')">
              ACESSE AS RECEITAS DA WAP
            </span>
          </div>
        </div>
        <img
          class="hidden mx-auto mt-10 sm:block sm:mt-0"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho.png"
          alt="Henrique fogaça com a mão na cintura" />
      </section>

      <section class="grid items-center justify-center mx-5 mt-20 lg:grid-cols-2">
        <div class="lg:h-[45rem] h-[40rem] flex flex-col items-center justify-center rounded-t-full w-full sm:w-[80%] m-auto rounded-b-full bg-red-default">
          <div class="flex flex-col items-center justify-center mt-20 text-center text-white">
            <h1 class="lg:mt-36 mt-20 text-2xl lg:text-4xl font-bold text-center font-poppins w-[80%]">
              Mais praticidade e segurança para sua rotina
            </h1>
            <p class="w-[70%] mt-10">
              Conheça a Panela de Pressão Elétrica WAP l Prosdócimo e prepare seus alimentos com muito mais segurança e rapidez.
            </p>
          </div>
          <div class="md:translate-y-4 md:h-[110%]">
            <img src="./images/produto-de-frente.png" class="md:px-10 " alt="">
          </div>
        </div>

        <div
          class="flex flex-col gap-[2.5rem] md:items-start mt-40 ml-5 md:mt-40  md:ml-20 lg:py-14 cards-section">
          <div class="flex flex-col items-center justify-center md:items-start">
            <img class="w-10" src="./images/icons/finger_touching_black.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              PAINEL DIGITAL
            </h1>
            <p class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1">
              Controle as funções da panela com facilidade e programe o início do preparo até 24 horas com antecedência.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center md:items-start">
            <img class="w-10" src="./images/icons/arch_black.png" alt="WAP AIRFRY FAMILY PROSDÓCIMO" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">
              10 FUNÇÕES PRÉ-PROGRAMADAS
            </h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Alcance resultados saborosos em pratos tradicionais com a ajuda das funções pré-configuradas.
            </p>
          </div>

          <div class="flex flex-col items-center justify-center md:items-start">
            <img class="w-10" src="./images/icons/lock_black.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">MUITO MAIS SEGURA</h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Foram desenvolvidos 10 dispositivos de segurança para garantir que você e sua família estejam sempre seguros. 
            </p>
          </div>

          <div class="flex flex-col items-center justify-center md:items-start">
            <img class="w-10" src="./images/icons/temperature_black.png" alt="" />
            <h1 class="mt-3 font-bold md:text-2xl font-poppins">3 NÍVEIS DE COZIMENTO</h1>
            <p class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-1">
              Ideal para alcançar o ponto de cozimento perfeito de diversos alimentos, desde vegetais até diferentes tipos de carne.
            </p>
          </div>
        </div>
      </section>

      <section class="grid m-auto lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 gap-y-20 ">
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">

            <img class="hidden w-10 md:w-14 md:block" src="./images/icons/light_black.png" alt="Icone lâmpada" />
            <img class="w-10 md:w-14 md:hidden" src="./images/icons/chef_black.png" alt="Icone lâmpada" />
            <h1 class="w-full mt-5 font-bold uppercase md:text-start md:text-2xl text-black-default font-poppins">
              SUA COZINHA DO SEU JEITO!
            </h1>
            <p
              class="font-inter md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3">
              Está na hora de transformar sua experiência culinária, e a parceira para isso acaba de chegar! 
              <br><br>
              A Panela de Pressão Elétrica Prosdócimo WAP é a escolha definitiva para quem busca preparar receitas saborosas com mais eficiência, segurança e versatilidade na cozinha.  
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card">
            <h1
              class="hidden lg:block mt-5 font-bold uppercase md:text-start md:text-4xl md:w-[25rem] w-[20rem] text-black-default font-poppins">
              Segurança para cozinhar e facilidade para preparar receitas saborosas.
            </h1>
    
          </div>
        </div>
        <div class="lg:order-2">
          <img
            class="hidden mx-5 mt-20 lg:block"
            src="./images/fogaca_sorrindo.png"
            alt="Foto fogaça sorrindo" />
          <img
            class="px-5 mt-10 lg:hidden"
            src="./images/fogaca_sorrindo_mobile.png"
            alt="Foto fogaça sorrindo" />
        </div>
      </section>

      <section
        class="relative flex items-center justify-center pb-4 m-auto max-w-screen-2xl">
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
  </main>
  <script src="./javascript/slider.js"></script>
  <script src="./javascript/imagesAnimation.js"></script>
  <script src="./javascript/senders.js"></script>
  <script src="./javascript/productInspect.js"></script>
  <script src= "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
</html>



    `;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
    