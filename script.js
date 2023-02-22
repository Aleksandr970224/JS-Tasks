/* 1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2. */

function makeCalculator(x) {
  let result = function() {
    return x * 2;
  }
  return result;
};

let calculator = makeCalculator(3);

console.log(calculator());


/* 2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.
Т.е. работать она должна так:
*/

function makeCounter() {
  let result = 0;
  resultCount = function() {
    return result++;
  }
  return resultCount;
};

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());
console.log(counter2());




/* 3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false. */


function startsWith (str1, str2) {
  arr1 = str1.split('');
  arr2 = str2.split('');

  if (arr1[0] === arr2.find((key) => key === arr1[0])) {
    return true
  } else { return false };
};

console.log(startsWith('hi', 'ttt'));
console.log(startsWith('hi', 'ho'));
console.log(startsWith('ttt', 'hi'));
console.log(startsWith('hi', 'oh'));
console.log(startsWith('hi', 'asashasas'));




/* 4* Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
1) HTML, CSS
Посмотрите видео, как подготовить верстку:https://youtu.be/Zs-DMTCKYlI
2) JS
- Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
- Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.
Чтобы добавить класс к DOM-элементу, используется метод *element.classList.add('classname')*
- Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.Чтобы удалить класс из DOM-элемента, используется метод *element.classList.remove('classname')*
- Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
Для обращения к элементу, на который пришелся клик, можно использовать метод
*e.target* (e - это параметр функции-обработчика события, и его свойство target точно вказывает на тот элемент, на который кликнул пользователь). */


let btnCall = document.getElementById('btnCall');
console.log(btnCall);

let popup = document.getElementById('popup');
console.log(popup);

let contentPopup = document.getElementById('contentPopup');
console.log(contentPopup);


let btnPopup = document.getElementById('btnPopup');
console.log(btnPopup);

btnCall.addEventListener('click', () => {
  popup.classList.add('open');
});

btnPopup.onclick = () => {
  popup.classList.remove('open');
};

window.addEventListener('click', (even) => {
  if (even.target === popup)
  popup.classList.remove('open');
});
