document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.nav-menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('ativo');
        navMenu.classList.toggle('show');
    });
});
