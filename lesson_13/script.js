/* ЗАДАНИЕ 1

Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом. */

//1)
// function Coat(color) {
//   this.color = color;
//   this.cost = function(){
//     console.log(200);
//   };
// };

// const coat = new Coat('green');
// console.log(coat);
// coat.cost();


//2)
class Shirt {
  constructor(color) {
    this.color = color;
  };

  cost() {
    console.log(100);
  };
};

const shirt = new Shirt('black');
console.log(shirt);
shirt.cost();



/* ЗАДАНИЕ 2

Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:

sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств*/


class Calculator {
  constructor() {
    this.numFirst = +prompt();
    this.numSecond = +prompt();
  };

  sum() {
    console.log(this.numFirst + this.numSecond);
  };

  mul() {
    console.log(this.numFirst * this.numSecond);
  };
};

const calculator = new Calculator();
console.log(calculator);
calculator.sum();
calculator.mul();



/* Задание 3

Реализовать следующее мини-приложение

https://gist.github.com/zhekix


class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    // метод должен создать тег img
    // вложить в него src картинки (this.imgUrl)
    // и записать в this.html
    // + дергаем render

    // + странице должен залится фон черным
  }

  render() {
    // метод должен отрисовать изображение (this.html) на странице
    // применить фиксированное позиционирование
    // использовать this.top и this.left для указания позиции
    // использовать this.width для указания ширины
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    // + дергаем render
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    // + дергаем render
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    // + дергаем render
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    // + дергаем render
  }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
// something else, чтобы всё работало
*/

let body = document.querySelector('body');
// console.log(body);

class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    // метод должен создать тег img
    let img = document.createElement('img');
    // body.appendChild(img);
    // вложить в него src картинки (this.imgUrl)
    img.src = this.imgUrl;
    // и записать в this.html
    this.html = img;
    // + дергаем render
    this.render();
    // + странице должен залится фон черным
    body.style.minHeight = '100vh';
    body.style.background = 'black';
    body.appendChild(this.html);
  }

  render() {
    // метод должен отрисовать изображение (this.html) на странице
    // body.appendChild(this.html);
    // применить фиксированное позиционирование
    this.html.style.position = 'fixed';
    // использовать this.top и this.left для указания позиции
    this.html.style.top = `${this.top}px`;
    this.html.style.left = `${this.left}px`;
    // использовать this.width для указания ширины
    this.html.style.width = `${this.width}px`;
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    this.top -= 20;
    // + дергаем render
    this.render();
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    this.top += 20;
    // + дергаем render
    this.render();
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    this.left -= 20;
    // + дергаем render
    this.render();
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    this.left += 20;
    // + дергаем render
    this.render();
  }
};

const imgUrl = 'https://thumbs.dreamstime.com/b/beach-sea-18378306.jpg';

const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();


mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();


// mfLogotip.moveUp();
// mfLogotip.moveUp();
// mfLogotip.moveUp();


// mfLogotip.moveLeft();
// mfLogotip.moveLeft();
// mfLogotip.moveLeft();



console.log(mfLogotip);



//ВТОРАЯ ЧАСТЬ(КРУГ)
/* Задание 4

Добавить к приложению желтый круг (пример https://ucarecdn.com/d268b60e-9158-457e-8175-435a8eaaf188/mf.png)

Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.

Сделать по примеру из последнего видео в уроке. */

class Circle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.html = null
  }

  render() {
    let div = document.createElement('div');
    this.html = div;
    body.appendChild(this.html);
    div.style.width = this.width;
    div.style.height = this.height;
    div.style.background = this.color;
    div.style.borderRadius = '100%';
  }
}

const circle = new Circle('200px', '200px', 'yellow');
circle.render();
console.log(circle);
