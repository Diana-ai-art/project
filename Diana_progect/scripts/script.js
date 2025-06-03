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

//3.6.1
const cardsmaincontainer = document.querySelector(".card");
if (cardsImages) {
const cardList = cardsmaincontainer.querySelector(".card__list");
// Пример URL для получения данных с сервера
const apiUrl = "images.json";
// Функция для создания карточки
const createCard = (imageUrl, imageAlt, imageWidth, imageHeight, title, description) =>{
   //Шаблонные строки и подстановки
const card = `
<li class="card__item">
<img class="card__icon">
<img src="${image}" alt="${imageAlt}" width="${imageWidth}"  height="${imageHeight}">
</img>
<h3 class="card__title">${title}</h3>
<p class="card__description">${description}</p>
</li>
`
return card; 
}
//// Загрузка данных с сервера
fetch(apiUrl)
.then((response) => response.json())
.then((images) => {
console.log(images); // Данные
console.log(typeof images); // Тип полученных данных
// for (const item in data) {
// const card = data[item];
// const cardElement = createCard(card.image, card.imageAlt, card.imageWidth, card.Height, card.title, card.description);
// cardListImages.insertAdjacentHTML("beforeend", cardElement);
//}
data.forEach(item=> {
    const cardElement= createcard (item.image, item.imageAlt, item.imageWidth, item.imageHeight, item.title, item.description);
    cardList.insertAdjacentHTML(`beforend`, cardElement);
});
})
.catch (error => console.error(`Ошибка при загрузке данных:`, error));
}
//3.6.2
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
setTimeout(() => {
// Скрываем прелоадер
preloader.style.opacity = "0";
preloader.style.visibility = "hidden";
// Показываем контент
content.style.display = "block";
// Удаляем элемент из DOM
preloader.remove();
}, 3000); // Задержка 2 секунды
}

//3.7.1
// объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {
        const swiper1 = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination', type: "fraction",
            },
                    // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

//ИСПОЛЬЗОВАНИЕ LOCALSTORAGE задание 3.7
// Объявляем переменную formApplication и помещаем в нее элемент с id "formApplication"
const formApplication = document.querySelector("#formApplication");
// Проверяем, существует ли элемент formApplication
if (formApplication) 
// Добавляем обработчик события для отправки формы
formApplication.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвращаем отправку формы
// Объявляем переменные "username", "tel","email", и помещаем в нее элементы с id из формы
const username = formApplication.querySelector("#username").value;
const tel = formApplication.querySelector("#tel").value;
const email = formApplication.querySelector("#email").value;
// Объявляем переменную modalMessage и помещаем в нее элемент для отображения сообщений о статусе заявки
const modalMessage = headerMenu.querySelector("#application-message");
// Проверка длины имени пользователя
if (username.length < 3) {
modalMessage.textContent = "Имя пользователя должно содержать не менее 3 символов";
modalMessage.style.color = "black";
// Устанавливаем цвет сообщения об ошибке 
return;
}
// Проверка номера телефона
if (!/^\d{10,}$/.test(tel)) {
modalMessage.textContent = "Номер телефона должен содержатьтолько цифры и быть не менее 10 символов";
modalMessage.style.color = "black"; // Устанавливаем цвет
сообщения
return;
}
// Здесь можно добавить отправку данных на сервер
modalMessage.textContent = "Заявка отправлена!";
modalMessage.style.color = "green"; 
// Устанавливаем цвет сообщения для успешной отправки
// Записываем данные в localStorage
window.localStorage.setItem("username", username);
window.localStorage.setItem("tel", tel);
window.localStorage.setItem("email", email);
});
