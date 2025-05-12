'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

//3.2 

    //3.3
    const intensiveImg = document.querySelectorAll('.services__image');
    intensiveImg.forEach((item, index) => {
        const intensiveText = document.querySelectorAll('.services__text');
            item.addEventListener('mouseenter', () => {
                      item.style.opacity = 0.5;
                      intensiveText[index].removeAttribute('hidden');
    });
    item.addEventListener('mouseleave', () => {
              item.style.opacity = 1;

      intensiveText[index].setAttribute('hidden', true);
    });
});

});