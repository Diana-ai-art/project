'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно');

    //3.2
    //Алгортм для появления модального окна
    //1. Начало.
    //2. Получаем кнопку для входа.
    //3. Получаем форму для входа (проверяем существует ли форма и кнопка)
    // 3.1. Добавляем обработчик клика на кнопку:
    // 3.1.1. Да:
    // 3.1.1.1. открываем модальное окно
    // 3.1.2. Нет: продолжаем
    // 3.2. Добавляем обработчик клика вне областьи окна:
    // 3.3.1. Да:
    // 3.3.1.1. Скрываем модальное окно.
    // 3.3.2. Нет: продолжаем.
    // 4. Конец.
    const headerButton = document.querySelector(".button-modal");
    const modalDialog = document.querySelector(".applications");
    if (headerButton && modalDialog) {
        console.log('Кнопка и форма существует');
    }

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

    //3.4.1 Формируем массив из частей определенных элементов блока
    const carContainer = document.querySelector(".card");
    if (carContainer) {
        const dataTitleList = [
            "Индивидуальные занятия",
            "Квалифицированные преподаватели",
            "Удобство дистанционного обучения",
            "Доступные цены"];
        const titleList = carContainer.querySelectorAll(".card__title");
        titleList.forEach((item, index) => {
            item.textContent = dataTitleList[index];
        });

    }
});

