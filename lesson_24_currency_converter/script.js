const inputReceiveUsd = document.querySelector('#receive-usd');
const inputSendUsd = document.querySelector('#send-usd');
const inputReceiveEuro = document.querySelector('#receive-euro');
const inputSendEuro = document.querySelector('#send-euro');

const btnChangeUsd = document.querySelector('#change-usd');
const btnChangeEuro = document.querySelector('#change-euro');

let moneyConvector = (sendElem, btn, receiveElem) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    if(sendElem.id === 'send-usd') {
      // receiveElem.value = (sendElem.value * 0.91).toFixed(1);
      receiveElem.value = Math.round(sendElem.value * 0.91 * 10) / 10;
    } else if (sendElem.id === 'send-euro') {
      // receiveElem.value = (sendElem.value * 1.10).toFixed(1);
      receiveElem.value = Math.round(sendElem.value * 1.10 * 10) / 10;
    };
  });
};
moneyConvector(inputSendUsd, btnChangeUsd, inputReceiveEuro);
moneyConvector(inputSendEuro, btnChangeEuro, inputReceiveUsd);
