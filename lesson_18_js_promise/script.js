/* Задание 1. Emojihub

Изучите документацию API эмодзи:

https://github.com/abourtnik/emojis-world

В разделе Endpoints найдите, по какому url получить, и изучите ответы:

случайный эмодзи

массив всех эмодзи

эмоджи определенной категории

1.1. Добавить в html кнопку «Получить эмодзи дня», под ней пустой див для результата. По нажатию кнопки отправлять запрос за рандомным эмодзи, отобразить его в диве под кнопкой, размером примерно 70px (это можно сделать с помощью CSS-свойства font-size).

1.2. Отправить запрос за всеми эмодзи, разместить их на странице по категориям (см. образец ЗДЕСЬ).

ВАЖНО! Не нужно делать отдельные запросы для категорий, необходимо взять результат из одного общего запроса. Вам может быть удобно использовать конструкцию Switch-Case, почитайте о ней ЗДЕСЬ. */


const urlRandom = 'https://api.emojisworld.fr/v1/random';

const body = document.querySelector('body');

const pSmileys = document.querySelector('.Smileys-Emotion');
const pFood = document.querySelector('.Food-Drink');
const pTravel = document.querySelector('.Travel-Places');


let btnEmojiDay = document.querySelector('#btn-emoji-day');
let wrapperEmojiDay = document.querySelector('.wrapper-emoji-day');

btnEmojiDay.addEventListener('click', () => {
  fetch(urlRandom)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(el => {
        wrapperEmojiDay.innerText = el.emoji;
      });

      data.results.map(el => {
        switch (el.category.name) {
          case 'Smileys & Emotion':
            pSmileys.innerText += el.emoji;
            break;

          case 'Food & Drink':
            pFood.innerText += el.emoji;
            break;

          case 'Travel & Places':
            pTravel.innerText += el.emoji;
            break;
        };
      });
    });
});





/* Задание 2. Карточки стран

Есть API с информацией о 120 странах мира. URL (запросы на FULL NAME):

https://restcountries.com

Получить данные с помощью fetch и сформировать разметку карточек стран (например каждую 10-ю из массива) по ОБРАЗЦУ.

ВАЖНО: Для разметки используйте сетку bootstrap, шаблоны смотрите ЗДЕСЬ. */

const url = 'https://restcountries.com/v3.1/all';
const bootstrapDivColumn = document.querySelector('.row');


let createCard = (arr) => {
  for (let i = 0; i < arr.length; i = i + 10) {
    let div = document.createElement('div');
    div.classList.add('col-3', 'card');

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = arr[i].flags.svg;

    let divBody = document.createElement('div');
    divBody.classList.add('card-body');

    let titleCard = document.createElement('h5');
    titleCard.classList.add('card-title');
    titleCard.innerText = arr[i].name.official;

    let regionName = document.createElement('p');
    regionName.classList.add('card-text');
    regionName.innerText = arr[i].region;

    let population = document.createElement('p');
    population.classList.add('population');
    if (String(arr[i].population).length < 7) {
      population.innerText = `0.${String(arr[i].population).slice(0, 1)} млн`;
    } else if (String(arr[i].population).length < 8) {
      population.innerText = `${String(arr[i].population).slice(0, 1)}.${String(arr[i].population).slice(1, 2)} млн`;
    } else if (String(arr[i].population).length < 9) {
      population.innerText = `${String(arr[i].population).slice(0, 2)}.${String(arr[i].population).slice(2, 3)} млн`;
    };

    let language = document.createElement('p');
    language.classList.add('language');
    let str = '';
    for (let key in arr[i].languages) {
        str += arr[i].languages[key] + ', ';
        language.innerText = str.slice(0, length - 2);
    };


    let currency = document.createElement('p');
    currency.classList.add('currency');
    for (let key in arr[i].currencies) {
      currency.innerText = `${arr[i].currencies[key].symbol} ${arr[i].currencies[key].name}`
    };

    bootstrapDivColumn.append(div);
    div.append(img);
    div.append(divBody);

    divBody.append(titleCard);
    divBody.append(regionName);
    divBody.append(population);
    divBody.append(language);
    divBody.append(currency);
  };
}

let createArray = (arr) => {
  let arrayCountry = [];
  for (let i = 0; i < 120; i++) {
    arrayCountry.push(arr[i]);
  };

  createCard(arrayCountry);
};

fetch(url)
  .then(response => response.json())
  .then(data => createArray(data));




/*Задание 3. Страна + соседние

Изучить внимательно варианты запросов к API из первого задания (https://restcountries.com/). Посмотрите, как можно получить информацию об одной стране по названию, по коду.

Получить информацию об одной стране, имеющей соседей, например Испании. Отрисовать ее карточку.

Затем, внутри ответа (во втором then) отправить дополнительный запрос за информацией о ее соседних странах (информация о соседях есть в объекте страны), отрисовать их карточки рядом или ниже, сделать их более мелкими по размеру, добавить заголовок «Соседняя страна» (см. ПРИМЕР). */


const bootstrapDivColumn = document.querySelector('.row');

let createCard = (arr) => {
  let div = document.createElement('div');
  div.classList.add('col-3', 'card');

  let img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = arr.flags.svg;

  let divBody = document.createElement('div');
  divBody.classList.add('card-body');

  let titleCard = document.createElement('h5');
  titleCard.classList.add('card-title');
  titleCard.innerText = arr.name.official;

  let regionName = document.createElement('p');
  regionName.classList.add('card-text');
  regionName.innerText = arr.region;

  let population = document.createElement('p');
  population.classList.add('population');
  if (String(arr.population).length < 7) {
    population.innerText = `0.${String(arr.population).slice(0, 1)} млн`;
  } else if (String(arr.population).length < 8) {
    population.innerText = `${String(arr.population).slice(0, 1)}.${String(arr.population).slice(1, 2)} млн`;
  } else if (String(arr.population).length < 9) {
    population.innerText = `${String(arr.population).slice(0, 2)}.${String(arr.population).slice(2, 3)} млн`;
  };

  let language = document.createElement('p');
  language.classList.add('language');
  let str = '';
  for (let key in arr.languages) {
    str += arr.languages[key] + ', ';
    language.innerText = str.slice(0, length - 2);
  };

  let currency = document.createElement('p');
  currency.classList.add('currency');
  for (let key in arr.currencies) {
    currency.innerText = `${arr.currencies[key].symbol} ${arr.currencies[key].name}`;
  };

  bootstrapDivColumn.append(div);
  div.append(img);
  div.append(divBody);

  divBody.append(titleCard);
  divBody.append(regionName);
  divBody.append(population);
  divBody.append(language);
  divBody.append(currency);
};


let createBorderCard = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].cca3) {
      case 'AND':
        createCard(arr[i]);
        break;
      case 'FRA':
        createCard(arr[i]);
        break;
      case 'GIB':
        createCard(arr[i]);
        break;
      case 'PRT':
        createCard(arr[i]);
        break;
      case 'MAR':
        createCard(arr[i]);
        break;
    };
  };
};


fetch('https://restcountries.com/v3.1/name/spain?fullText=true')
  .then(resp => resp.json())
  .then(data => {
    createCard(data[0]);

    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => createBorderCard(data));
  });
