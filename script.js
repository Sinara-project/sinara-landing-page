const colaboradores = [
    {
      nome: "Bruna Santos",
      img: "imagens/bruna.png",
      descricao:"Sou a Bruna dos Santos Salla, trabalho em desenvolvimento no banco original, usando majoritariamente C#.",
      insta: "https://instagram.com/salla05090",
      github: "https://github.com/Salla0905"
    },
    {
      nome: "Gabriel Peres",
      img: "imagens/gabriel.png",
      descricao:"Oi! Meu nome é Gabriel Peres, atualmente estou na 1º série do Germinare Tech, começando no curso de desenvolvimento de sistemas e análise de dados. Atualmente, gosto mais de estudar SQL em banco de dados e Java em lógica de programação. ",
      insta: "https://instagram.com/gab.p22k",
      github: "https://github.com/GabPGarcia"
    },
    {
      nome: "Heloisa Jesus",
      img: "imagens/heloisa.png",
      descricao: "Atuo na área de dados e inteligência artificial no projeto, que tem como foco transformar informações em conhecimento útil e desenvolver soluções inteligentes. Isso inclui o uso de análise de dados, modelos de IA e chatbots para apoiar a equipe, otimizar processos e trazer inovação para o projeto.",
      insta: "https://www.instagram.com/helo_mdj/",
      github: "https://github.com/heloisamdj"
      
      
    },
    {
      nome: "Isabelly da Hora",
      img: "imagens/isabelly.png",
      descricao: "Oiêe! Sou a Isabelly, estudante do primeiro ano do ensino médio na Germinare TECH. Atualmente, estou focada em desenvolvimento front-end no interdisciplinar. Tenho interesse em seguir na área de análise de dados.  ",
      insta: "https://instagram.com/dahoraisa",
      github: "https://github.com/IsaDaHxra"
      
      
    },
    {
      nome: "Lorena Tavares",
      img: "imagens/lorena.png",
      descricao: "Oie! Me chamo Lorena, atualmente curso Desenvolvimento de Sistemas na Germinare e sou desenvolvedora back-end na PicPay, na área de Conta Global. Tenho interesse tanto por design quanto por back-end.",
      insta: "https://instagram.com/loloh_tavares",
      github: "https://github.com/Lorenaatavares"
      
      
    },
    {
      nome: "Mariana Luna",
      img: "imagens/mariana.png",
      descricao: "Oi! Sou a Mari Luna, estudante de Desenvolvimento de Sistemas e desenvolvedora front-end na PicPay, na área de PJ. Tenho interesse em design, frontend e engenharia de software — e estou colocando tudo isso em prática no desenvolvimento do Sinara, junto com meu grupo.",
      insta: "https://instagram.com/marilunasgallery",
      github: "https://github.com/Mariluna09"
      
      
    },
    {
      nome: "Olavo Ventura",
      img: "imagens/olavo.png",
      descricao: " Meu nome é Olavo Ventura, tenho 16 anos, e sou analista de dados do Sinara.",
      insta: "https://instagram.com/whoisventtura",
      github: "https://github.com/OlavoVent"
      
      
    },
    {
      nome: "Pedro Tarquiano",
      img: "imagens/tarqui.png",
      descricao: "Olá! Sou o Pedro, mais conhecido como Tarqui. Sou estudante de programação, apaixonado por criar, aprender e transformar ideias em projetos. Tenho perfil criativo, gosto de explorar diferentes perspectivas e estou sempre em busca de novos desafios.",
      insta: "https://instagram.com/Tarquiano_oficial",
      github: "https://github.com/Tarquiano"
      
      
    },
    {
      nome: "Rafael Queiroz",
      img: "imagens/rafael-queiroz.png",
      descricao: "Oi eu sou o Rafa, sou estudante da primeira série da Germinare TECH, tento sempre dar o meu máximo quando o que eu faço pode influenciar outra pessoa; sou esquecido, porém tento corrigir. Espero poder aprender e ensinar cada vez mais. ",
      insta: "https://instagram.com/rafael.queirozxz",
      github: "https://github.com/RafonesLenda"
      
    },
    {
      nome: "Rafael Pither",
      img: "imagens/pizza.png",
      descricao: "Sou o Rafael Pither, frontend do 2° ano dev, gosto muito de gatos e torço pro São Paulo.",
      insta: "https://instagram.com/rafapizza14",
      github: "https://github.com/RafaPitherPizza "
      
      
    },
    {
      nome: "Rafaella Antunes",
      img: "imagens/rafaella.png",
      descricao: "Oii, sou a Rafaella Antunes, tenho 16 anos e estou no segundo ano de Análise de dados e no aplicativo eu sou a responsável pelos dashboards, treinamento de modelos e pela análise exploratória do Sinara.",
      insta: "https://instagram.com/ _antunsz",
      github: "https://github.com/rafaellaantunes27"
      
      
    },
    {
      nome: "Rogerio Buscariolo",
      img: "imagens/rogerio.png",
      descricao: "Olá sou o Rogerio! Sou aluno da primeira série Da Germinare Tech no Instituto J&F. Sou uma pessoa muito carísmática, inteligente, sincera e amigável. Sempre busco meus objetivos e coisas que despertam meu interesse.",
      insta: "https://instagram.com/rogerx.bsx",
      github: "https://github.com/buscariolo-rogerio"
    },
    {
      nome: "Sophia Castro",
      img: "imagens/sophia.png",
      descricao: "Oii! Sou a Sophia, atualmente estudante do Germinare Tech, onde auxiliei a desenvolver a ideia, e contribuo ativamente com a evolução do projeto Sinara para que o mesmo chegue a sua fase final. Meus interesses incluem a área de Dados e BackEnd.",
      insta: "https://instagram.com/shhiac",
      github: "https://github.com/Shhiaa"
      
      
    },
    {
      nome: "Vinícius Vilas Boas",
      img: "imagens/vinicius.png",
      descricao: "Olá! Sou o Vinícius, atualmente estudante do Germinare Tech, onde ajudei a desenvolver a ideia, e contribuo com a implementação do projeto Sinara ao longo de todo nosso grupo! Me interesso pelo Back-End, e por Desenvolvimento no geral.",
      insta: "https://instagram.com/vinicius_v_boas",
      github: "https://github.com/Vini-Boas"
    }
  ];
  
  let index = 0;
  
  function mostrarColaborador(i) {
    const colab = colaboradores[i];
    document.getElementById("colaborador").innerHTML = `
      <h2 id="colaborador-nome">${colab.nome}</h2>
      <div class= "container-colaboradores" >
          <img class="foto" src="${colab.img}" alt="${colab.nome}" style="user-select: none; -webkit-user-drag: none; pointer-events: none;">
          
          <p id="descricao-colaborador">${colab.descricao}</p>
      </div>
      <div id="container-redes">
        <div id="icone-instagram">
          <a href="${colab.insta}" target="_blank">
            <img id="imagem-icone-insta" src="icones/icone-instagram.svg" alt="Instagram" style="user-select: none; -webkit-user-drag: none; pointer-events: none;">
          </a>
        </div>
        <div id="icone-github">
          <a href="${colab.github}" target="_blank">
            <img id="imagem-icone-github" src="icones/icone-github.svg" alt="GitHub" style="user-select: none; -webkit-user-drag: none; pointer-events: none;">
          </a>
          </div>
      </div>
    `;
  }
  
  function anterior() {
    index = (index - 1 + colaboradores.length) % colaboradores.length;
    mostrarColaborador(index);
  }
  
  function proximo() {
    index = (index + 1) % colaboradores.length;
    mostrarColaborador(index);
  }
  
  mostrarColaborador(index);