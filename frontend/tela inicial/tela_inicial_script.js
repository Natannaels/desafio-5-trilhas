
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var images = document.querySelectorAll('.carousel-images img');
    var totalImages = images.length;
    var interval = 3000; // Tempo em milissegundos entre as mudanças de imagem

    function showImage(index) {
        var offset = -index * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    document.getElementById('next-button').addEventListener('click', function() {
        nextImage();
    });

    document.getElementById('prev-button').addEventListener('click', function() {
        prevImage();
    });

    // Muda as imagens automaticamente
    setInterval(nextImage, interval);

    showImage(currentIndex);
});
