const htmlContent = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" http-equiv="refresh" content="" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />

    <title>Fritadeira Elétrica Wap Airfry Grand Family 4.1L</title>
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/global.css" />
    <link rel="stylesheet" href="styles/slider.css" />
    <link rel="stylesheet" href="styles/leafsAnimation.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
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
            class="hidden object-cover w-full h-full mt-10 md:block"
          />
          <iframe
            x-show="showVideo"
            loading="lazy"
            :src="showVideo ? 'https://www.youtube.com/embed/FkZ0bcu_Hwk?enablejsapi=1&autoplay=1' : ''"
            class="w-full mt-10 m-auto h-[40rem] hidden md:block"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <h1
          class="py-2 text-center text-white rounded-b-lg md:py-4 px-7 text-1xl font-poppins bg-red-default"
        >
          PROSDÓCIMO
        </h1>
      </header>

      <section class="flex flex-col items-center mt-14 md:mt-36">
        <img
          src="./images/fogaca_apontando_dedo_desktop.png"
          class="hidden w-full px-10 md:block"
          alt="Henrique Fogaca apontando dedo para o produto"
        />
        <img
          src="./images/fogaca_apontando_dedo_mobile.png"
          class="w-full m-auto md:hidden"
          alt="Henrique Fogaca apontando dedo para o produto"
        />

        <div
          class="flex flex-col items-start gap-20 mx-10 mt-20 md:gap-0 md:mx-16 md:justify-around md:flex-row md:mt-28"
        >
        <div
        class="flex flex-col items-center justify-end md:mx-5 text-cente"
      >
        <img
          class="w-14"
          src="./images/icons/fritadeira_sem_oleo.png"
          alt="Icone fritadeira sem oleo"
        />
        <h1
          class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins"
        >
          FRITADEIRA <br class="hidden md:block" />
          SEM OLEO
        </h1>
        <p
          class="mt-4 text-base font-light leading-5 text-center text-black font-inter"
        >
        Prepare receitas saborosas e com menos gordura! O ar quente envolve, aquece e cozinha os alimentos, utilizando pouco ou nenhum óleo no processo.
        </p>
      </div>
      <div
      class="flex flex-col items-center justify-end md:mx-5 text-cente"
      >
        <img
          class="w-14"
          src="./images/icons/cesto_removivel_icon.png"
          alt="Icone fritadeira sem oleo"
        />
        <h1
          class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins"
        >
          CESTO<br class="hidden md:block" />
          REMOVÍVEL
        </h1>
        <p
          class="mt-4 text-base font-light leading-5 text-center text-black font-inter"
        >
        Promove segurança e praticidade ao evitar o manuseio direto de alimentos quentes da fritadeira, tornando a retirada segura e simplificando a limpeza. 
        </p>
      </div>
        <div
            class="flex flex-col items-center justify-end md:mx-5 text-cente"
          >
            <img
              class="w-14"
              src="./images/icons/anti_aderente_gray_stone.png"
              alt="Icone fritadeira sem oleo"
            />
            <h1
              class="mt-4 text-2xl font-bold leading-snug text-center text-black uppercase md:text-lg font-poppins"
            >
              ANTIADERENTE<br class="hidden md:block" />
              GRAY STONE
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter"
            >
            O duplo revestimento antiaderente não só aumenta a durabilidade do cesto, mas garante que os alimentos não grudem, facilitando a limpeza.
            </p>
          </div>        
        </div>
      </section>

      <section class="relative pb-32 mt-64 md:rounded-3xl bg-black-default">
        <div
          class="relative flex flex-col items-end w-full lg:items-center"
        >
          <div>
            <img
              class="absolute animation object-fill w-[10rem] -top-[4rem] md:w-[15rem] md:-left-10 -left-[2rem] animate-float"
              src="./images/effect_imgs/effect_img_2.png"
              alt="Imagem de efeito"
            />
            <img
              class="hidden animation lg:block absolute object-fill right-0 md:-right-10 -top-[5rem] w-[12rem] animate-float-reverse"
              src="./images/effect_imgs/effect_img_4.png"
              alt="Imagem de efeito"
            />
          </div>
          <div class="relative -mt-32 lg:-mt-40">
            <img
              class="absolute object-fill w-[15rem] animation top-8 -left-40 md:-left-10 md:w-[7rem] animate-float"
              src="./images/effect_imgs/effect_img_1.png"
              alt="Imagem de efeito"
            />
            <img
              class="absolute animation object-fill hidden lg:block -right-[7rem] md:-right-32 top-[5rem] w-[12rem] animate-float"
              src="./images/effect_imgs/effect_img_3.png"
              alt="Imagem de efeito"
            />
            <img
              class="mr-4 mt-10 w-full md:mt-0 h-80 md:w-[26rem] md:h-full z-10"
              src="./images/cesto_com_alimento.png"
              alt="Cesto com alimento"
            />
          </div>
        </div>
  
          <div
            class="z-50 flex flex-col items-start justify-start px-5 mx-2 text-white md:-mt-10 sm:mx-10 md:px-0 md:justify-center md:items-center gap-y-0 lg:flex-row lg:gap-x-40"
          >
            <div
              class="flex items-center justify-center lg:flex-col lg:w-96"
            >
              <div class="font-bold text-3xl lg:text-[4.5rem] leading-tight">
                5 LITROS
                <p class="lg:text-[2.5rem] md:pb-11 text-2xl text-center font-poppins font-light">
                  DE CAPACIDADE
                </p>
              </div>
            </div>
            <div class="flex items-center md:-mt-5 lg:mt-0 lg:w-96">
              <div class="font-light tracking-tighter font-inter">
                O cesto da Fritadeira WAP Air Fryer Grand Family oferece um universo de possibilidade no preparo de grandes porções de receitas salgadas e doces, assando os alimentos por igual, de forma ágil e uniforme.
              </div>
            </div>
          </div>
  
    <!--Product capacities recipes -->
    <div class="flex flex-wrap items-center w-full gap-16 px-2 mt-24 sm:px-10 md:mx-0 md:gap-2 md:flex-nowrap justify-evenly">
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-52" src="./images/pão de queijo.png" alt="Pão de Queijo" />
        <h1 class="text-white mt-2 h-10 text-[0.9rem] text-center font-bold font-poppins">8 PÃES DE QUEIJO</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-52" src="./images/hamburguer.png" alt="Hamburguer" />
        <h1 class="text-white mt-2 h-10 text-[0.9rem] text-center font-bold font-poppins">4 MINI HAMBÚRGUERES</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-52" src="./images/cupcake.png" alt="Cupcakes" />
        <h1 class="text-white mt-2 h-10 text-[0.9rem] text-center font-bold font-poppins">4 CUPCAKES</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-52" src="./images/frango.png" alt="Coxinhas de Frango" />
        <h1 class="text-white mt-2 h-10 text-[0.9rem] text-center font-bold font-poppins">10 COXINHAS DE FRANGO</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-52" src="./images/nuggets.png" alt="Nuggets" />
        <h1 class="text-white mt-2 h-10 text-[0.9rem] text-center font-bold font-poppins">16 NUGGETS</h1>
      </div>
    </div>
  
      </section>

      <section
        id="slider_aduhs"
        class="relative mx-auto -mt-5 overflow-hidden md:mt-3"
      >
        <div
          id="slider_container"
          class="flex items-start md:pr-[0rem] transition-transform duration-250"
        ></div>
        <div
          id="btn_previous_uas"
          class="absolute z-10 hidden w-10 h-10 p-2 px-4 text-3xl transform -translate-y-1/2 cursor-pointer md:block left-5 top-1/2"
          style="
            background-image: url(&quot;./images/icons/left_sign.png&quot;);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          "
        ></div>
        <div
          id="button_next_uasdhuas"
          class="absolute z-20 hidden w-10 h-10 p-2 px-4 transform -translate-y-1/2 cursor-pointer md:block right-5 top-1/2"
          style="
            background-image: url(&quot;./images/icons/right_sign.png&quot;);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          "
        ></div>
      </section>

      <section class="grid ml-5 mt-14 md:mt-32 md:mx-0 lg:grid-cols-2">
        <div class="flex flex-col md:px-0 md:mr-5 md:ml-20">
          <h1 class="text-2xl -top-[1rem] font-extrabold font-poppins">
            FAÇA FRITURAS SEM <br />
            UTILIZAR ÓLEO.
          </h1>

          <p
            class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5"
          >
            É possível preparar frituras saborosas, crocantes por fora e macias por dentro, com menos gordura! Com a Fritadeira Elétrica WAP AirFry Grand Family 5L, você chega no ponto ideal das receitas sem utilizar óleo ou manteiga no preparo.<br /><br />

            Sua tecnologia permite fritar os alimentos com ar quente. A air fryer envolve a comida, aquecendo e cozinhando internamente, sem usar o óleo, proporcionando ótimos resultados.
          </p>
          <h1
            class="hidden mt-16 text-2xl font-extrabold md:block font-poppins"
          >
          RECEITAS EXCLUSIVAS PARA VOCÊ
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            CARDÁDIO DE CHEF HENRIQUE FOGAÇA
          </h1>
          <p
            class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5"
          >
            Desperte seu paladar para uma rotina alimentar mais saudável e de
            dar água na boca com receitas assinadas pelo Chef Henrique
            Fogaça.<br /><br />

            De pratos principais a sobremesa, o chef irá revelar como usar todo
            o potencial da linha de produtos de cozinha da WAP em suas receitas.
          </p>
          <div class="mt-10">
            <span
              class="px-4 py-2 font-bold text-white rounded-md cursor-pointer font-poppins bg-red-default"
              onclick="window.open('https://wap.ind.br/receitas', '_blank')"
            >
              ACESSE AS RECEITAS DA WAP
            </span>
          </div>
        </div>
        <img
          class="w-[30rem] sm:block hidden sm:mt-0 mt-10 mx-auto"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho.png"
          alt="Henrique fogaça com a mão na cintura"
        />
        <img
          class="left-0 w-full mt-10 sm:hidden"
          src="./images/fogaca_mao_na_cintura_fundo_vermelho_mobile.png"
          alt="Henrique fogaça com a mão na cintura"
        />
      </section>

      <section class="z-10 grid justify-center m-auto lg:grid-cols-2">
        <img
          class="object-cover mt-10 md:mt-40 sm:w-[30rem] lg:w-[60rem] m-auto"
          src="./images/produto_de_lado.png"
          alt="Frigideura gray stone"
        />

        <div
          class="flex flex-col justify-center h-full gap-20 pt-10 mx-5 text-center md:pl-10 lg:text-start font-poppins"
        >
          <div class="flex flex-col items-center justify-center lg:items-start">
            <img
              class="w-12 h-12"
              src="./images/icons/estrela_gota.png"
              alt="Icon"
            />
            <h1 class="mt-6 text-2xl font-bold">GRAY STONE</h1>
            <p class="mt-6 w-[80%] font-light tracking-tighter font-inter">
              O charme do revestimento antiaderente com acabamento marmorizado mantém sua air fryer sempre limpa, prevenindo que os alimentos e a gordura grudem.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center lg:items-start">
            <img class="w-12 h-12" src="./images/icons/bolhas.png" alt="Icon" />
            <h1 class="mt-6 text-2xl font-bold">FÁCIL LIMPEZA</h1>
            <p class="mt-6 w-[80%] font-light tracking-tighter font-inter">
              A limpeza interna é prática com a alça de engate simples e o cesto removível. Basta mover a trava, pressionar o botão e remover o cesto antiaderente para uma limpeza sem esforço.
            </p>
          </div>
        </div>
      </section>

      <section
        class="relative grid m-auto mt-20 overflow-visible text-white lg:mt-80 lg:pb-10 bg-black-default lg:rounded-3xl lg:grid-cols-2"
      >
        <div class="w-[85%] m-auto mt-10 lg:mx-0 lg:ml-20 lg:mt-28">
          <h3 class="font-light font-poppin text-[1.25rem] lg:text-[2.5rem]">
            CIRCULAÇÃO DE AR
          </h3>
          <h1
            class="lg:text-[5.625rem] -mt-4 lg:-mt-8 text-[2.8rem] font-bold font-poppins"
          >
            EM 360°
          </h1>
          <p
            class="font-light lg:text-[1.25rem] w-[80%] md:w-[90%] tracking-tighter font-inter"
          >
          A tecnologia garante que o calor seja distribuído de maneira uniforme no interior da fritadeira elétrica. Dessa forma, os alimentos são cozidos de maneira uniforme, independente da posição no cesto, eliminando o óleo em excesso, proporcionando pratos saborosos, crocantes e mais saudáveis.
          </p>
        </div>
        <img
          class="m-auto mt-10 mb-[-10%] lg:mb-0 w-[18rem] lg:w-[30rem] lg:-mt-40"
          src="./images/circulacao_360.png"
          alt="Circulação de ar 360 graus"
        />
      </section>

      <section class="grid m-auto -mt-5 md:mx-10 lg:grid-cols-2">
        <div class="flex flex-col pb-20 rounded-b-full lg:bg-red-default">
          <div
            class="flex flex-col gap-8 mt-5 ml-5 lg:m-auto md:justify-center"
          >
            <h1
              class="mt-20 text-2xl font-bold text-black md:mt-40 md:pl-5 lg:text-white font-poppins"
            >
              WAP AIRFRY GRAND <br />
              FAMILY PROSDÓCIMO 5L
            </h1>
            <p
              class="lg:text-white mb-20 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]"
            >
            Prepare refeições deliciosas, livres de gordura, fumaça e cheiro de fritura para os amigos e a família sem esforço. Conheça a Fritadeira Elétrica WAP Air Fryer Grand Family, a parceira ideal na cozinha!
            </p>
          </div>
          <img
            class="m-auto w-[20rem] lg:mr-0 md:w-[30rem]"
            src="./images/fritadeira_airfry.png"
            alt="Fritadeira airfry"
          />
        </div>

        <div
          class="flex flex-col gap-[2.5rem] items-start ml-5 md:ml-14 lg:mt-28 cards-section"
        >
          <div class="">
            <img class="w-[3rem]" src="./images/icons/timer_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              TIMER DE 60 MIN
            </h1>
            <p
              class="font-inter font-light w-[80%] md:w-[23rem] tracking-tighter mt-1"
            >
            O timer com um aviso sonoro que permite controlar o preparo das suas receitas com precisão.  
            </p>
          </div>

          <div>
            <img
              class="w-[3rem]"
              src="./images/icons/temperature_icon.png"
              alt="WAP AIRFRY GRAND FAMILY PROSDÓCIMO"
            />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              TEMPERATURA DE <br class="md:hidden" />
              80º C ATÉ 200º C
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Ajuste a temperatura entre 80°C e 200°C para atender às suas preferências culinárias e garantir o ponto perfeito para cada um dos pratos.
            </p>
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/power_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              DESLIGAMENTO AUTOMÁTICO
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
              Ao fim do tempo pré-definido no Timer, a fritadeira elétrica emitirá um aviso sonoro, desligado automaticamente.
            </p>
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/alca_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              CESTO REMOVÍVEL
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Prático, o cesto removível, além de facilitar a limpeza, simplifica o manuseio com suas aberturas laterais melhorando a circulação do ar.
            </p>
          </div>
        </div>
      </section>

      <section class="grid m-auto lg:grid-cols-2">
        <div
          class="flex flex-col items-center justify-center order-2 pt-20 pb-20 gap-y-20 lg:bg-white bg-black-default"
        >
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card"
          >
            <img
              class="hidden lg:block"
              src="./images/icons/chefe_icon.png"
              alt="Icone chefe"
            />
            <img
              class="w-12 h-12 lg:hidden"
              src="./images/icons/chefe_icon_branco.png"
              alt="Icone chefe"
            />
            <h1
              class="w-full mt-3 font-bold text-white uppercase lg:text-start md:text-2xl lg:text-black-default font-poppins"
            >
              Desperte sua criatividade
            </h1>
            <p
              class="font-inter text-white md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3"
            >
            Descubra um mundo de sabores, desde suculentas carnes, até saborosos pratos de salmão, verduras e legumes. E não para por aí! Explore também o lado doce da sua air  fryer com sobremesas como bolo de chocolate e muitas outras delícias.
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card"
          >
          <h1
            class="w-full md:w-[25rem] w-[20rem] mt-3 font-bold text-white uppercase lg:text-start md:text-2xl lg:text-black-default font-poppins"
          >
          Sua jornada para refeições saudáveis, saborosas e versáteis está prestes a começar! 
          </h1>
  
          </div>
        </div>
        <div class="lg:order-2">
          <img
            class="hidden mx-5 mt-20 lg:block"
            src="./images/fogaca_sorrindo.png"
            alt="Foto fogaça sorrindo"
          />
          <img
            class="px-5 mt-10 lg:hidden"
            src="./images/fogaca_sorrindo_mobile.png"
            alt="Foto fogaça sorrindo"
          />
        </div>
      </section>

      <section
        class="relative flex items-center justify-center m-auto max-w-screen-2xl"
      >
        <img
          class="object-fill lg:hidden"
          src="./images/fogaca_na_cozinha_mobile.png"
          alt=""
        />
        <img
          class="hidden object-fill mt-20 lg:block"
          src="./images/fogaca_na_cozinha.png"
          alt=""
        />
      </section>
    </div>
  </main>
</html>

    `;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
