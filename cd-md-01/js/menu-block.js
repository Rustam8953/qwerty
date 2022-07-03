const menuIcon = document.querySelector('.menu-icon');
const menuBlock = document.querySelector('.nav__box-menu-list');
const menuDelete = document.querySelector('.menu-delete');

menuIcon.addEventListener('click', () => {
    menuBlock.classList.add('translate');
})

menuDelete.addEventListener('click', () => {
    menuBlock.classList.remove('translate');
    console.log('ldkfsdjifjs')
})

