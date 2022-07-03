const iconWindow = document.querySelectorAll('.icon-item');

removeIconActive()

function removeIconActive() {
    for(let i = 0; i < iconWindow.length;i++) {
        iconWindow[i].classList.remove('icon-active')
    }
}