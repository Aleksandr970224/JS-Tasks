/* Задание 2
1)Задать объект с полем name.

Задать переменную, которая будет хранить JSON упомянутого объекта.

Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

2)Создать переменную user, в которой хранится объект.

Записать переменную в localStorage.

Создать переменную newUser, в которой будет храниться JS объект из localStorage. */


//1)

const infoUser = {name: 'Sasha'};
// console.log(infoUser);

let strInfoUser = JSON.stringify(infoUser);
// console.log(strInfoUser);

let initialInfoUser = JSON.parse(strInfoUser);
// console.log(initialInfoUser);


//2)

const user = {name: 'Bob'};
// console.log(user);

localStorage.info = JSON.stringify(user);
// console.log(localStorage.info);
const newUser = JSON.parse(localStorage.info);
console.log(newUser);





/* Задание 3 Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

Пример реализации:

https://ucarecdn.com/6e689f37-1e6a-4ba1-b9b4-461d9cb4f661/jsbackgallery

ПОДСКАЗКИ

- значение атрибута можно узнать с помощью метода *element.getAttribute(' ');*

- элемент, по которому пришелся клик, =

*event.target*

остальные элементы -

*!event.target*

Порядок работы, если нет своих идей:

1. Собираем изображения в массив.

2. Перебираем массив с изображениями, добавляем на них обработчик клика.

Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или url в память и ставим ее на фон body.

При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку. */

let defaultImg = document.querySelectorAll('.wrapper-image .img');
// console.log(defaultImg);

let body = document.querySelector('body');
// console.log(body);
// body.style.background = 'url("images/sea.jpg")'

defaultImg.forEach(el => {
  el.addEventListener('click', () => {
    console.log(el.getAttribute('src'));
    localStorage.setItem('activeImg', el.getAttribute('src'));
    let img = el.getAttribute('src');
    body.style.backgroundImage = `url(${img})`;
    // body.style.backgroundSize = 'cover';
  });
})


if (localStorage.activeImg) {
  body.style.backgroundImage = `url(${localStorage.activeImg})`;
} else {
  body.style.backgroundImage = 'url("images/sea.jpg")'
}
