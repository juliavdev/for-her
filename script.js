window.onload = function() {
  // Fazendo uma requisição HTTP para o arquivo JSON
  fetch('musicas.json')
    .then(response => {
      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
      }
      // Parse do JSON da resposta
      return response.json();
    })
    .then(data => {
      // O conteúdo do arquivo JSON está disponível aqui como um array de objetos
      console.log(data);
      
      data.sort(() => Math.random() - 0.5);

      // Seleciona o elemento do swiper
      var swiperWrapper = document.getElementById('swiper-wrapper');

      // Itera sobre os dados do JSON e cria os slides
      data.forEach(item => {
        // Cria um elemento de slide
        var slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        
        // Cria uma imagem dentro do slide
        var img = document.createElement('img');
        img.src = item.img;
        img.alt = item.musica;

        
        // Adiciona a imagem ao slide
        slide.appendChild(img);

        var figure = document.createElement('figure');
        figure.classList.add('text-center');
        var blockquote = document.createElement('blockquote');
        blockquote.classList.add('blockquote');
        var citacao = document.createElement('span');
        citacao.id = 'citacaoTela';
        citacao.textContent = '' + item.citacao + '';
        blockquote.appendChild(citacao);
        var figcaption = document.createElement('figcaption');
        figcaption.classList.add('blockquote-footer');
        var artista = document.createElement('span');
        artista.id = 'artistaTela';
        artista.textContent = item.artista + ' in ';
        var nomeMusica = document.createElement('cite');
        nomeMusica.title = 'Source Title';
        nomeMusica.id = 'nomeMusica';
        nomeMusica.textContent = item.musica;
        figcaption.appendChild(artista);
        figcaption.appendChild(nomeMusica);
        figure.appendChild(blockquote);
        figure.appendChild(figcaption);
        
        // Adiciona o trecho de HTML ao slide
        slide.appendChild(figure);
        
        // Adiciona o slide ao wrapper do swiper
        swiperWrapper.appendChild(slide);
      });

      // Inicializa o Swiper depois de adicionar os novos slides
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    })
    .catch(error => {
      console.error('Erro:', error);
    });
};
