/* Задание 1

По данному url расположена задача:

*https://jsonplaceholder.typicode.com/todos/1*

В html предусмотреть <div></div>Достать с сервера заголовок задачи и отобразить его в div. */

let httpRequest = new XMLHttpRequest();

let createDiv = (object) => {
  let body = document.querySelector('body');
  let div = document.createElement('div');
  body.appendChild(div);
  div.innerText = object.title
};

httpRequest.onload = function() {
  let obj = JSON.parse(httpRequest.responseText)
  createDiv(obj);
};

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();




/* Задание 2

Запросом на сервер по url *https://jsonplaceholder.typicode.com/todos* достать задачи.

Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи. */

let httpRequest = new XMLHttpRequest();
let body = document.querySelector('body')

let createList = (object) => {
  let ol = document.createElement('ol');
  body.appendChild(ol);

  let counterTasks = () => {
    // for (let i = 0; i < object.length; i++) {
    //   if (i < 20) {
    //     let li = document.createElement('li');
    //     ol.appendChild(li);
    //     li.innerText = object[i].title;
    //   };
    // };

    object.forEach(el => {
      if(el.id <= 20) {
        let li = document.createElement('li');
        ol.appendChild(li);
        li.innerText = el.title;
      }
    })
  };
  counterTasks();
};

httpRequest.onload = () => {
  let obj = JSON.parse(httpRequest.responseText);

  createList(obj)
};

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();



/* Задание 3

Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*

Оформить тегами как в [ПРИМЕРЕ](https://ucarecdn.com/f9cf39fd-9f6d-409f-8dd4-51e416480bdc/ScreenshotatNov30170836.png).

Порядок работы:

1) записать в переменную блок для отрисовки результата.

2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.

3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.

4) внутри функции .onload:

- обойти через цикл первые 10 элементов массива

- вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.

5) прописать CSS для классов. */


let divContent = document.querySelector('.result');

let createTag = (tag, info, nameClass) => {
  let addTag = document.createElement(tag);

  addTag.innerText = (info);

  addTag.classList.add(nameClass);

  divContent.appendChild(addTag);

  divContent.style.maxWidth = '600px';
};


let httpRequest = new XMLHttpRequest();

httpRequest.onload = () => {
  let comment = JSON.parse(httpRequest.responseText);

  for (let i = 0; i < 10; i++) {
    createTag('h3', comment[i].name, 'name');
    createTag('p', comment[i].email, 'email');
    createTag('p', comment[i].body, 'body');
  };

  document.querySelectorAll('p.email').forEach(el => el.style.fontStyle = 'italic')
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();






//2) ВТОРОЙ ВАРИАНТ
// let httpRequest = new XMLHttpRequest();
// let body = document.querySelector('body');

// let showComment = (obj) => {
//   let divContent = document.createElement('div');
//   body.appendChild(divContent);
//   divContent.style.maxWidth = '600px';
//   divContent.classList.add('result')
//   obj.forEach(el => {

//     if (el.id <= 10) {
//       let h3Name = document.createElement('h3');
//       let pEmail = document.createElement('p');
//       let pBody = document.createElement('p');

//       divContent.appendChild(h3Name);
//       divContent.appendChild(pEmail);
//       divContent.appendChild(pBody);

//       h3Name.innerText = JSON.stringify(el.name);
//       h3Name.classList.add('name');

//       pEmail.innerText = JSON.stringify(el.email);
//       pEmail.classList.add('email');

//       pBody.innerText = JSON.stringify(el.body);
//       pBody.classList.add('body');
//     }
//   })
// }

// httpRequest.onload = () => {
//   let object = JSON.parse(httpRequest.responseText);

//   showComment(object);
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send()
//
//
//
//
// /* Задание 4
Создать собственный погодный виджет на основе данных с сервера погоды.

Оформить, как в примере: [ЗДЕСЬ](https://ucarecdn.com/f15529fb-d05d-47bd-b617-c517db0611f2/weather2.png).

Документация: [https://openweathermap.org/api...](https://openweathermap.org/api/hourly-forecast)

*Порядок работы:*

1) Проверить, работает ли API-ключ, данный в примере. Для этого открыть url [https://api.openweathermap.org...](https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247)

Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.

1.1. Зарегистрироваться и получить собственный API-ключ на сайте [https://home.openweathermap.or...](https://home.openweathermap.org/)

2) Создать html-css разметку под данные.

- общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. [ЗДЕСЬ](https://ucarecdn.com/477e6959-b37e-4555-a81c-3b707858b199/layout.png))

- внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).

3) Написать JS с HTTP-запросом на url.

- кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию (см. на странице документации раздел *Units of measurement*)

4) добавить информацию из ответа в виджет на страницу.

- в верхней части виджета отобразить город и дату (из полученного JSON-объекта).

Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней [ЗДЕСЬ](https://itchief.ru/javascript/date).

- из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.

Как узнать url иконки: [https://openweathermap.org/wea...](https://openweathermap.org/weather-conditions#How-to-get-icon-URL)

- в нижней части добавить необходимую информацию через цикл. Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки), а нам нужна погода 1 раз в сутки. */


let wrapperWeather = document.querySelector('#wrapper-weather');
let divCurrentWeather = document.querySelector('#current-weather');

let getCurrentWeather = (obj) => {
  let imgWeather = document.querySelector('#imgWeather');
  imgWeather.src = `./images/${obj.list[0].weather[0].icon}.png`;
  imgWeather.classList.add('imgWeather');

  let textWeather = document.querySelector('#textWeather');
  textWeather.innerText = obj.list[0].weather[0].main;
  textWeather.style.textAlign = 'center';
};


let getDate = () => {
  let date = new Date();

  let hours = document.querySelector('#hours');
  if (date.getHours < 10) {
    hours.innerText = `0${date.getHours()}:`;
  } else {
    hours.innerText = `${date.getHours()}:`;
  }
  hours.style.display = 'inline-block';

  let minutes = document.querySelector('#minutes');
  if (date.getMinutes() < 10) {
    minutes.innerText = `0${date.getMinutes()}`;
  } else {
    minutes.innerText = date.getMinutes();
  }
  minutes.style.display = 'inline-block';
};


let createWeather = (obj) => {
  let city = document.querySelector('#city');
  city.innerText = obj.city.name;

  let celc = 273.15;
  let tempCurrent = document.querySelector('#temp-current');
  let celcLetter = document.querySelector('#celc');
  tempCurrent.innerText = Math.ceil(obj.list[0].main.temp - celc);
  if (tempCurrent) {
    celcLetter.style.display = 'block'
  };

  let textWind = document.querySelector('#text-wind');
  let numWind = document.querySelector('#num-wind');
  let unitySpeed = document.querySelector('#unity-speed');
  numWind.innerText = obj.list[0].wind.speed;
  if (numWind) {
    textWind.style.display = 'inline-block';
    unitySpeed.style.display = 'inline-block';
    numWind.style.display = 'inline-block';
  };

  for (let i = 6; i < 40; i = i + 8) {
    let divForecastWeather = document.createElement('div');
    wrapperWeather.appendChild(divForecastWeather);
    divForecastWeather.classList.add('forecast-weather');
    let dateForecast = document.createElement('p');
    divForecastWeather.appendChild(dateForecast);
    dateForecast.innerText = obj.list[i].dt_txt;
    dateForecast.style.maxWidth = '80px';

    let imgForecast = document.createElement('img');
    divForecastWeather.appendChild(imgForecast);
    imgForecast.src = `./images/${obj.list[i].weather[0].icon}.png`;
    imgForecast.classList.add('imgForecast');

    let wrapperForecastTemp = document.createElement('div');
    let tempForecast = document.createElement('p');
    tempForecast.classList.add('wrapper-temp-forecast');
    divForecastWeather.appendChild(wrapperForecastTemp);
    wrapperForecastTemp.appendChild(tempForecast);
    tempForecast.innerText = Math.ceil(obj.list[i].main.temp - celc) + ' °C';
  };
};


let httpRequest = new XMLHttpRequest();

httpRequest.onload = () => {
  // console.log(httpRequest.responseText);
  let object = JSON.parse(httpRequest.responseText);

  // console.log(object);
  getCurrentWeather(object);
  getDate();
  createWeather(object);
};

httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
httpRequest.send();
// let test = () => httpRequest.send();
// setTimeout(test, 2000)
