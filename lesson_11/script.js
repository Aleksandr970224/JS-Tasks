/* Задание 1

Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов остаточного массива меньше 2, то вторая переменная должна стать равна "alex".*/

//1)
const nameArr = ['bob', 'tom', 'kate', 'john'];

let [firstName, secondName] = nameArr;
console.log(firstName, secondName);

//2)
let [ , ,...restName] = nameArr;
console.log(restName);
restName.forEach(el => console.log(el));

//3)
if (restName.length < 3) {
  secondName = 'alex';
};
console.log(secondName);




/* Задание 2

Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива. */


const nameArr = ['max', 'sveta', 'boris', 'eva'];

function getElem(arr) {
  let [elFirst, elSecond] = arr;
  console.log(elFirst, elSecond);
};

getElem(nameArr);



/* Задание 3

Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.*/

//1)
const obj = {
  // name: 'tim',
  // age: 26,
  country: 'Jamaica',
  gender: 'man',
};
console.log(obj);

let {name, age} = obj;
console.log(name, age);


//2)
if (obj.name === undefined && obj.age === undefined) {
  let {name = 1, age = 2, ...fields} = obj;
  console.log(name, age, fields);
};
