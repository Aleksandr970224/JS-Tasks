/* Задание 1

Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.

Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.

В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.

При клике на имя пользователя на боковой панели -  в основной части информация меняется на выбранного пользователя.

Для оформления использовать Bootstrap компонент Card:

- для списка пользователей - шаблон Links and buttons - вариант с кнопками

https://getbootstrap.com/docs/5.1/components/card/#list-groups

- для отображения информации о пользователе - шаблон карточки без изображения.

Нужно отобразить имя, ник, место проживания, компанию и email (как ссылку вида mailto:)

ПРИМЕР, как должно получиться. */


const urlUsers = 'https://jsonplaceholder.typicode.com/users';
let userName = document.querySelector('#user-name');
let userNickname = document.getElementById('user-nickname');
let userAddress = document.getElementById('user-address');
let userCompany = document.getElementById('user-company');
let userEmail = document.getElementById('user-email');
let userAddCard = document.querySelector('.card-absolute');
userAddCard.style.display = 'none';


let createFirstCardUser = (elem) => {
  userName.innerText = elem.name;
  userNickname.innerText = elem.username;
  userAddress.innerText = `Street:${elem.address.street}, Suite:${elem.address.suite}, City:${elem.address.city}, Zipcode:${elem.address.zipcode}`;
  userCompany.innerText = elem.company.name;
  userEmail.innerText = 'Написать ему';
  userEmail.href = `mailto:${elem.email}`;

  userAddCard.style.display = 'block';
}

let addEventListUsers = (item, el) => {
  item.addEventListener('click', () => {
    userName.innerText = el.name;
    userNickname.innerText = el.username;
    userAddress.innerText = `Street:${el.address.street}, Suite:${el.address.suite}, City:${el.address.city}, Zipcode:${el.address.zipcode}`;
    userCompany.innerText = el.company.name;
    userEmail.innerText = 'Написать ему';
    userEmail.href = `mailto:${el.email}`;

    userAddCard.style.display = 'block';
  });
};

let createListUsers = (arr) => {
  let divCard = document.createElement('div');
  divCard.classList.add('card');

  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'list-group-flush');

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i].name;
    li.classList.add('list-group-item');

    addEventListUsers(li, arr[i]);

    ul.append(li);

    if (i === 0) {
      createFirstCardUser(arr[i]);
    } else { addEventListUsers(li, arr[i]) };
  };

  document.body.append(divCard);
  divCard.append(ul);
};

(async function (url) {
  const resp = await fetch(url);
  const data = await resp.json();
  createListUsers(data);
})(urlUsers);
