/* Задание 1
Реализовать переключение блоков с помощью табов.

Пример результата:

https://ucarecdn.com

ПОРЯДОК РАБОТЫ

1. Подготовить верстку. https://youtu.be/mnfBHvNm_z8

2. Создаем переменные и собираем в коллекции все кнопки и все блоки с контентом.

3. Перебираем все кнопки и вешаем на них обработчик клика. При клике запускается функция openTab, в нее передаем 2 параметра - event и id блока (id блока = дополненный id кнопки, по которой пришелся клик).

4. Описываем функцию openTab, которая показывает блок. Она принимает два параметра - event и id (событие - нужно для определения кнопки, по которой пришелся клик, и id - нужно для определения нужного блока). Внутри этой функции:- перебираем все кнопки и убираем у них класс active (используем forEach и стрелочный синтаксис)- перебираем все блоки и скрываем их (используем forEach и стрелочный синтаксис)

- определяем кнопку, по которой кликнули (event.target) и добавляем ей класс active. Находим по id блок, связанный с активной кнопкой, и показываем его. */


let divContent = document.querySelectorAll('.tab-content');
// console.log(divContent);

let button = document.querySelectorAll('.wrapper-tabs button');
// console.log(button);


//ПЕРВЫЙ ВАРИАНТ
button.forEach(elem => {
  elem.addEventListener('click', () => {
    function openTab(event, id) {
      id = `${elem.id}-content`;
      console.log(id);
      event = elem;
      console.log(event);

      button.forEach(el => {
        el.classList.remove('active');
      });
      divContent.forEach(el => {
        el.style.display = 'none';
      });

      event.classList.add('active');
      document.getElementById(id).style.display = 'block';
    }
    openTab();
  });
});









//ВТОРОЙ ВАРИАНТ
// button.forEach(el => {
//   el.addEventListener('click', () => {

//     divContent.forEach(elem => {
//       elem.style.display = 'none';
//     });
//     document.getElementById(`${el.id}-content`).style.display = 'block';

//     button.forEach(element => {
//       element.classList.remove('active');
//     });
//     el.classList.add('active');
//   });
// });










//ТРЕТИЙ ВАРИАНТ
// let container = {
//   fisrt: document.querySelector('#first-btn-content'),
//   second: document.querySelector('#first-btn'),
// };
// console.log(container);

// container.second.addEventListener('click', () => {
//   container.fisrt.style.display = 'block';
//   container2.fisrt.style.display = 'none';
//   container3.fisrt.style.display = 'none';

//   container.second.classList.add('active');
//   container2.second.classList.remove('active');
//   container3.second.classList.remove('active');
// });



// let container2 = {
//   fisrt: document.querySelector('#second-btn-content'),
//   second: document.querySelector('#second-btn'),
// };

// container2.second.addEventListener('click', () => {
//   container.fisrt.style.display = 'none';
//   container2.fisrt.style.display = 'block';
//   container3.fisrt.style.display = 'none';

//   container.second.classList.remove('active');
//   container2.second.classList.add('active');
//   container3.second.classList.remove('active');
// });



// let container3 = {
//   fisrt: document.querySelector('#third-btn-content'),
//   second: document.querySelector('#third-btn'),
// };

// container3.second.addEventListener('click', () => {
//   container.fisrt.style.display = 'none';
//   container2.fisrt.style.display = 'none';
//   container3.fisrt.style.display = 'block';

//   container.second.classList.remove('active');
//   container2.second.classList.remove('active');
//   container3.second.classList.add('active');
// });




//ЧЕТВЕРТЫЙ ВАРИАНТ
// button.forEach(elem => {
//   elem.addEventListener('click', (event) => {
//     button.forEach(element => {
//       element.classList.remove('active');
//       event.target.classList.add('active');
//     });

//     divContent.forEach(el => {
//       el.style.display = 'none';
//       if(event.target === document.querySelector('#first-btn')) {
//         document.querySelector('#first-btn-content').style.display = 'block';
//       };
//       if(event.target === document.querySelector('#second-btn')) {
//         document.querySelector('#second-btn-content').style.display = 'block';
//       };
//       if(event.target === document.querySelector('#third-btn')) {
//         document.querySelector('#third-btn-content').style.display = 'block';
//       };
//     });
//   });
// });








//ПЯТЫЙ ВАРИАНТ
// button.forEach(elem => {
//   elem.addEventListener('click', (event) => {
//     button.forEach(element => {
//       element.classList.remove('active');

//       event.target.classList.add('active');

//       if (event.target === document.querySelector('#first-btn')) {
//         document.querySelector('#first-btn-content').style.display = 'block';
//         document.querySelector('#second-btn-content').style.display = 'none';
//         document.querySelector('#third-btn-content').style.display = 'none';
//       };

//       if (event.target === document.querySelector('#second-btn')) {
//         document.querySelector('#first-btn-content').style.display = 'none';
//         document.querySelector('#second-btn-content').style.display = 'block';
//         document.querySelector('#third-btn-content').style.display = 'none';
//       };

//       if (event.target === document.querySelector('#third-btn')) {
//         document.querySelector('#first-btn-content').style.display = 'none';
//         document.querySelector('#second-btn-content').style.display = 'none';
//         document.querySelector('#third-btn-content').style.display = 'block';
//       };
//     });
//   })
// });
//
//
//
//
//
//
// /* Задание 2

Сверстать любую простую страничку и реализовать смену темы.

В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется. */


let btnDarkTheme = document.querySelector('#btn-dark-theme');
console.log(btnDarkTheme);

let btnWhiteTheme = document.querySelector('#btn-white-theme')

let wrapWhiteTheme = document.querySelector('.wrap-white-theme');
console.log(wrapWhiteTheme);

btnDarkTheme.addEventListener('click', () => {
  wrapWhiteTheme.classList.add('wrap-dark-theme');
  btnDarkTheme.style.zIndex = '-11';
  btnWhiteTheme.style.zIndex = '11';
});


btnWhiteTheme.addEventListener('click', () => {
  wrapWhiteTheme.classList.remove('wrap-dark-theme');
  btnDarkTheme.style.zIndex = '11';
  btnWhiteTheme.style.zIndex = '-11';
});






/* Задание 3
3.1. Цифровые часы

Создать виджет-часы, как в примере ЗДЕСЬ (https://ucarecdn.com/b24e3ba4-f8b0-4f9e-8430-ea16bee09a4b/clock.mp4).

Вам понадобится каждую секунду (через setInterval) запускать функцию, которая будет забирать время из объекта Date и выводить в разметку. Цвета и т.п. прописать в CSS.

3.2. Аналоговые часы (по желанию)

Создать виджет-часы, как в примере ЗДЕСЬ (https://ucarecdn.com/105b00de-47ad-4ac9-a323-3fcea5b579c7/analogclock.mp4).

ЗДЕСЬ видео, посмотрите его, чтобы понимать, как делать. Суть в том, что поворачиваться будут квадраты-обертки, а стрелки просто находятся внутри: см. ЗДЕСЬ.

Дизайн - на свое усмотрение, изображение-циферблат можно взять ЗДЕСЬ.

Почитайте про соотношение скорости движения стрелок и градусов поворота ЗДЕСЬ. */

//1) ПЕРВАЯ ЧАСТЬ
// let hours = document.getElementById('hours');

// let minutes = document.getElementById('minutes');

// let seconds = document.getElementById('seconds');

// function time() {
//   let date = new Date();

//   if(date.getHours < 10) {
//     hours.innerText = '0' + date.getHours()
//   } else { hours.innerText = date.getHours() };

//   if(date.getMinutes() < 10) {
//     minutes.innerText = `0${date.getMinutes()}`
//   } else { minutes.innerText = date.getMinutes() };

// if(date.getSeconds() < 10) {
//   seconds.innerText = `0${date.getSeconds()}`;
// } else { seconds.innerText = date.getSeconds(); };
// };
// setInterval(time, 1000);


//2) ВТОРАЯ ЧАСТЬ

let arrowHour = document.querySelector('#arrow-hr');
console.log(arrowHour);

let arrowMinute = document.querySelector('#arrow-min');
console.log(arrowMinute);

let arrowSecond = document.querySelector('#arrow-sec');
console.log(arrowSecond);


function clock() {
  let date = new Date();
  let deg = 6;
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * deg;
  let ss = date.getSeconds() * deg;

  arrowSecond.style.transform = `rotate(${ss}deg)`;
  arrowMinute.style.transform = `rotate(${mm}deg)`;
  arrowHour.style.transform = `rotate(${(hh) + (mm / 12)}deg)`;
};
setInterval(clock);
