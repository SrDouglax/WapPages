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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500" />
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
            O duplo revestimento em mármore tem alto poder antiaderente, que não gruda, é fácil e muito mais prático limpar.
            </p>
          </div>
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
              FRITURA <br class="hidden md:block" />
              SEM OLEO
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter"
            >
            Prepare receitas com menos gordura para a família toda, sem utilizar óleo no cozimento dos alimentos.
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
              CESTO E GRELHA<br class="hidden md:block" />
              REMOVÍVEL
            </h1>
            <p
              class="mt-4 text-base font-light leading-5 text-center text-black font-inter"
            >
            Além de facilitar a limpeza, você pode explorar várias opções culinárias com praticidade ao colocar ou retirar os alimentos.  
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
              class="absolute object-fill w-[10rem] animation top-8 -left-40 md:-left-28 md:w-[11rem] animate-float"
              src="./images/effect_imgs/effect_img_1.png"
              alt="Imagem de efeito"
            />
            <img
              class="absolute animation object-fill hidden lg:block -right-[7rem] md:-right-32 top-[5rem] w-[10rem] animate-float"
              src="./images/effect_imgs/effect_img_3.png"
              alt="Imagem de efeito"
            />
            <img
              class="mr-4 mt-10 w-full md:mt-0 h-80 md:w-[26rem] md:h-[31rem] z-1"
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
                7.1 LITROS
                <p class="lg:text-[2.5rem] md:pb-11 text-2xl text-center font-poppins font-light">
                  DE CAPACIDADE
                </p>
              </div>
            </div>
            <div class="flex items-center md:-mt-5 lg:mt-0 lg:w-96">
              <div class="font-light tracking-tighter font-inter">
                O formato quadrado do cesto da Fritadeira WAP AirFry Mega Family garante que você possa preparar porções maiores de receitas práticas e saudáveis, assando-as de forma uniforme, sem empilhar alimentos. 
              </div>
            </div>
          </div>
  
    <!--Product capacities recipes -->
    <div class="flex flex-wrap items-center w-full gap-10 px-2 mt-24 sm:px-10 md:mx-0 md:gap-2 md:flex-nowrap justify-evenly">
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-48" src="./images/pão de queijo.png" alt="Pão de Queijo" />
        <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">8 PÃES DE QUEIJO</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-48" src="./images/hamburguer.png" alt="Hamburguer" />
        <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">4 HAMBÚRGUERES</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-48" src="./images/cupcake.png" alt="Cupcakes" />
        <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">9 CUPCAKES</h1>
      </div>
      <div class="flex flex-col items-center justify-center w-40 h-48">
        <img class="object-cover object-center w-40 h-48" src="./images/frango.png" alt="Coxinhas de Frango" />
        <h1 class="text-white h-10 text-[0.9rem] text-center font-bold font-poppins">15 COXINHAS DE FRANGO</h1>
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
          Prepare pães de queijo dourados e crocantes, mini-hambúrgueres suculentos, cupcakes perfeitamente assados e coxinhas de frango irresistíveis sem utilizar óleo ou manteiga. <br><br>
          
          Sua tecnologia envolve a comida, aquecendo e cozinhando internamente, permitindo fritar os alimentos com ar quente. 
          </p>
          <h1
            class="hidden mt-16 text-2xl font-extrabold md:block font-poppins"
          >
          CARDÁPIO DE CHEF PARA SUA ROTINA
          </h1>
          <h1 class="block mt-10 text-lg font-extrabold md:hidden font-poppins">
            CARDÁDIO DE CHEF HENRIQUE FOGAÇA
          </h1>
          <p
            class="mt-3 text-base w-[80%] font-light text-black font-inter md:mt-5"
          >
          O chef Henrique Fogaça criou receitas exclusivas, fáceis e saborosas para transformar suas experiência culinária sem sair de casa.<br /><br />

          Aproveite ao máximo os produtos da linha cozinha WAP com receitas tão deliciosas quanto a dos restaurantes cinco estrelas. 
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

    <!-- Alças removiaveis presentation section -->
    <section class="m-auto mt-20 ml-10 md:ml-20 max-w-vtex mb-14 md:mb-48 md:mt-44">
      <div class="flex-col inline-block font-poppins">
        <span
          class="px-2 py-1 lg:py-2 lg:text-[1.9rem] font-bold text-white rounded-md lg:rounded-lg bg-red-default"
          >2 EM 1</span>
        <p class="text-black font-light text-[1.47rem] lg:text-[2.18rem] mt-5">
          ALÇA REMOVÍVEL
        </p>
        <h1
          class="md:mt-5 font-extrabold text-black text-2xl md:text-[3.5rem]"
        >
          + POSSIBILIDADES
        </h1>
      </div>
    </section>

    <section class="mx-auto md:-mt-32">
      <div class="flex justify-center overflow-hidden -mb-28 md:-mb-60">
        <!--Desktop section-->
        <div class="relative hidden object-contain max-w-full md:block md:h-full">
          <div class="absolute left-[30%]">
            <h1 class="text-2xl font-bold tracking-tight font-poppins">SÓ COM O CESTO</h1>
            <p class="font-light text-[1.25rem] tracking-tighter font-inter">Prepare alimentos em <br>
              grandes quantidades</p>
          </div>
          <img src="./images/so_com_cesto.png" alt="Fritadeira só com cesto" />
        </div>
        <div class="relative hidden object-contain max-w-full md:block md:h-full">
          <div class="absolute left-[35%] ">
            <h1 class="text-2xl font-bold font-poppins">SÓ COM A GRELHA</h1>
            <p class="font-light text-[1.25rem] tracking-tighter font-inter">Muito mais espaço para <br>
              preparar alimentos grandes</p>
          </div>
          <img
            src="./images/so_com_grelha.png"
            alt="Fritadeira só com grelha"
          />
        </div>

        <!--Mobile section, thanks God-->
        <div class="relative overflow-hidden md:hidden">
          <div class="relative overflow-hidden md:hidden">
            <div class="absolute left-[15%] ">
              <h1 class="text-base font-bold font-poppins">SÓ COM O CESTO</h1>
              <p class="text-base font-light tracking-tighter font-inter">
                Prepare alimentos em
                grandes quantidades</p>
            </div>
            <img
              class="object-contain -mr-5 w-80"
              src="./images/so-com-cesto-mobile.png"
              alt="Fritadeira só com grelha"
            />
          </div>
        </div>
        <div class="relative overflow-hidden md:hidden">
          <div class="absolute left-[25%] ">
            <h1 class="text-base font-bold font-poppins">SÓ COM A GRELHA</h1>
            <p class="text-sm font-light tracking-tighter font-inter">
              Mais espaço para alimentos grandes
            </p>
          </div>
          <img
            class="object-contain -mr-5 w-80"
            src="./images/so-com-grelha-mobile.png"
            alt="Fritadeira só com grelha"
          />
        </div>
      </div>
      <div class="flex items-start justify-center flex-1 gap-3 px-3 pt-24 pb-10 font-bold text-white md:px-0 md:pt-56 md:rounded-2xl bg-black-default flex-nowrap font-poppins">
      <!-- Card 1 -->
      <div class="flex flex-col items-center w-1/4 card">
        <img src="./images/retire_o_cesto_do_recipiente.png" alt="Retire o cesto do recipiente" class="object-contain h-[190px]" />
        <div class="mt-5 text-[0.7rem] text-center md:text-sm whitespace-nowrap">
          RETIRE O <br />
          CESTO DO <br />
          RECIPIENTE
        </div>
      </div>
      <!-- Card 2 -->
      <div class="flex flex-col items-center w-1/4 card">
        <img src="./images/retire_o_cabo_do_cesto.png" alt="Retire o cabo do cesto" class="object-contain h-[190px]" />
        <div class="mt-5 text-[0.7rem] text-center md:text-sm whitespace-nowrap">
          RETIRE O <br />
          CABO DO <br />
          CESTO
        </div>
      </div>
      <!-- Card 3 -->
      <div class="flex flex-col items-center w-1/4 card">
        <img src="./images/coloque_o_cabo_no_recipiente.png" alt="Coloque o cabo no recipiente" class="object-contain h-[190px]" />
        <div class="mt-5 text-[0.7rem] text-center md:text-sm whitespace-nowrap">
          COLOQUE O <br />
          CABO NO <br />
          RECIPIENTE
        </div>
      </div>
      <!-- Card 4 -->
      <div class="flex flex-col items-center w-1/4 card">
        <img src="./images/coloque_a_grelha.png" alt="Coloque a grelha" class="object-contain h-[190px]" />
        <div class="mt-5 text-[0.7rem] text-center md:text-sm whitespace-nowrap">
          COLOQUE <br />
          A GRELHA
        </div>
      </div>
    </section>

      <section class="z-10 grid justify-center m-auto lg:grid-cols-2">
        <img
          class="object-cover sm:w-[30rem] lg:w-[60rem] m-auto"
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
              A tecnologia antiaderente aumenta a durabilidade do cesto. Mas não é só isso! Ela garante que os alimentos não grudem, facilitando a limpeza.  
            </p>
          </div>
          <div class="flex flex-col items-center justify-center lg:items-start">
            <img class="w-12 h-12" src="./images/icons/bolhas.png" alt="Icon" />
            <h1 class="mt-6 text-2xl font-bold">FÁCIL LIMPEZA</h1>
            <p class="mt-6 w-[80%] font-light tracking-tighter font-inter">
              Com um engate simples; basta mover a trava e pressionar o botão para retirar o cesto, facilitando a limpeza interna da air fryer.    
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
          A tecnologia de circulação de ar em 360° garante um cozimento uniforme dos alimentos, deixando-o crocante por fora e macio por dentro, além de eliminar o óleo em excesso, proporcionando pratos mais saudáveis. 
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
              WAP AIRFRY MEGA <br />
              FAMILY PROSDÓCIMO 7.1 L
            </h1>
            <p
              class="lg:text-white mb-20 text-black font-inter md:pr-5 md:pl-5 font-light tracking-tighter w-[80%] md:w-[26rem]"
            >
            Experimente uma nova maneira de cozinhar e se encante com a versatilidade que a air fryer oferece para toda a família. <b class="font-bold">Conheça a Fritadeira Elétrica WAP AirFry Mega Family</b>, a ferramenta essencial para quem busca uma culinária saudável e cheia de sabor.  
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
            Tenha total controle no processo de cozimento utilizando o timer, acompanhado por um aviso sonoro ao fim do preparo dos alimentos.  
            </p>
          </div>

          <div>
            <img
              class="w-[3rem]"
              src="./images/icons/temperature_icon.png"
              alt="WAP AIRFRY GRAND FAMILY PROSDÓCIMO"
            />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              TEMPERATURA DE ATÉ 200º C
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            O seletor de temperatura, com variação de 80°C a 200°C, permite que você escolha a opção ideal para diversos preparos.  
            </p>
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/power_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              SEGURANÇA NA ROTINA 
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Ao fim do tempo selecionado no timer, a fritadeira desliga automaticamente, emitindo um aviso sonoro. 
          </div>

          <div>
            <img class="w-[3rem]" src="./images/icons/alca_icon.png" alt="" />
            <h1 class="mt-3 text-2xl font-bold md:text-2xl font-poppins">
              ENGATE RÁPIDO
            </h1>
            <p
              class="font-inter w-[80%] md:w-[23rem] tracking-tighter font-light mt-3"
            >
            Ao mover a trava, pressione o botão para retirar o cesto, facilitando a utilização e a limpeza interna da air fryer.
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
            EXPLORE SUA CRIATIVIDADE 
            </h1>
            <p
              class="font-inter text-white md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3"
            >
            Vá muito além da batata frita! Prepare receitas cheias de sabor, do café da manhã ao jantar, com praticidade para a família toda. Descubra os recursos de alta qualidade em um design moderno e versátil.  
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center text-center lg:items-start card"
          >
            <img
              class="w-12 h-12 lg:hidden"
              src="./images/icons/grelhados_icon_branco.png"
              alt="Icone chefe"
            />
            <img
              class="hidden lg:block"
              src="./images/icons/grelhados_icon.png"
              alt="Icone chefe"
            />
          <h1
            class="w-full mt-3 font-bold text-white uppercase lg:text-start md:text-2xl lg:text-black-default font-poppins"
          >
          CESTO e Grelha REMOVÍVEis 
          </h1>
          <p
            class="font-inter text-white md:w-[25rem] w-[20rem] font-light lg:text-black-black tracking-tighter lg:text-start mt-3"
          >
          Descubra um mundo de sabores, desde suculentas carnes, até saborosos pratos de salmão, verduras e legumes. E não para por aí! Explore também o lado doce da sua air fryer com sobremesas como bolo de chocolate e muitas outras delícias.
          </p>
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
  <script src="./javascript/imagesAnimation.js"></script>
  <script src="./javascript/senders.js"></script>
  <script src="./javascript/slider.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
</html>
    `;
let iframe = document.getElementById("product-iframe-page");
iframe.setAttribute("srcdoc", htmlContent);
