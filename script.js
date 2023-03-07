/* Задание 1
1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.

С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).

Добавить эти объекты в массив shops.

В итоге должен получиться массив объектов типа:

[{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]

2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:

['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск'] */


//1)
const shops = [];

function Shop(title, address) {
  this.title = title;
  this.address = address;
  shops.push(this);
};

const objShopFirst = new Shop('green', 'ул. Петра Мстиславца 11, Минск');
const objShopSecond = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

console.log(objShopFirst);
console.log(objShopSecond);
console.log(shops);


//2)
const arrAddress = [];

shops.map(el => arrAddress.push(el.address));
console.log(arrAddress);
