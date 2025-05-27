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

//3.4.2 //Объявляем переменную application__wrap и сохраняем в нее кнопку c классом welcome__button
const costButtonModal = document.querySelector(".cost__button");
//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (costButtonModal && modalApplication) {
//Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    costButtonModal.addEventListener("click", () => {
// удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
    });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
window.addEventListener("click", (event) => {
// проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
//если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    }
});


//3.5 Объявляем переменную header__nav и сохраняем в нее header__menu
const headerMenu = document.querySelector('.header__nav');
// Если такой элемент существует
if (headerMenu) {
//Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
        const headerList = headerMenu.querySelector('.header__list');
//Создаем объект menuData, который содержит данные для трех ссылок меню.
        const menuData = {
// Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
            link1: {
                link: '#',
                title: 'Услуги',
            },
            link2: {
                link: '#',
                title: 'Способы оплаты',
            },
            link3: {
                link: '#',
                title: 'Комментарии',
            },
            link4: {
                link: '#',
                title: 'Отзывы',
        }
    }
//Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
const createLink = (UrlLink, title) =>{
// создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
            const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
            return link;
        }
// Создаем цикл for и проходим по всем элементам объекта menuData. 
 for (const linkItem in menuData) {
//Получаем данные для ссылки и сохраняем в переменную link.
            const link = menuData[linkItem];
//Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
            const linkIndex = createLink(link.UrlLink, link.title);
// С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
            headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}

