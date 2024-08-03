// Seleciona os elementos do menu e do menu de navegação
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

// Adiciona um evento de clique ao menu para alternar a classe 'ativo'
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo'); // Alterna a classe 'ativo' no menu
    NavMenu.classList.toggle('ativo'); // Alterna a classe 'ativo' no menu de navegação
});

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0; // Índice da imagem atualmente visível
    var images = document.querySelectorAll('.carousel-images img'); // Seleciona todas as imagens do carrossel
    var totalImages = images.length; // Total de imagens no carrossel
    var interval = 3000; // Tempo em milissegundos entre as mudanças de imagem

    // Função para exibir a imagem no índice especificado
    function showImage(index) {
        var offset = -index * 100; // Calcula o deslocamento para a imagem atual
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
    }

    // Função para mostrar a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Avança para o próximo índice, volta ao início se chegar ao fim
        showImage(currentIndex); // Atualiza a exibição da imagem
    }

    // Função para mostrar a imagem anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Retrocede para o índice anterior, vai para o fim se estiver no início
        showImage(currentIndex); // Atualiza a exibição da imagem
    }

    // Adiciona eventos de clique para os botões de navegação do carrossel
    document.getElementById('next-button').addEventListener('click', function() {
        nextImage(); // Mostra a próxima imagem ao clicar no botão "next"
    });

    document.getElementById('prev-button').addEventListener('click', function() {
        prevImage(); // Mostra a imagem anterior ao clicar no botão "prev"
    });

    // Muda as imagens automaticamente a cada intervalo especificado
    setInterval(nextImage, interval);

    showImage(currentIndex); // Inicializa a exibição com a imagem atual
});
