const menu = document.querySelector('.nav-toggle');
const enllaços = document.querySelectorAll('.nav__link');

menu.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

enllaços.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});