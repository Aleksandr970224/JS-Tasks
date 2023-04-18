/* 2. Генератор цветов (можно создать цвета рандомна, можно создать градиент рандомно, перевести HEX в RGBA и обратно, если вводишь свет в HEX или RGBA, то должно показываться как выглядит цвет) */

let boxColor = document.querySelector('.box-color');
let btnRandomColor = document.querySelector('#btn-random-color');
let btnRandomGradient = document.querySelector('#btn-random-gradient');

let getRandomNumber = () => Math.ceil(Math.random() * 255);

let getRandomColor = () => {
  let alfaNumber = Math.floor(Math.random() * 10);
  if (alfaNumber === 0) {
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  } else {
    return `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, .${alfaNumber})`;
  };
};

btnRandomColor.onclick = () => {
  boxColor.style.background = 'none';
  boxColor.style.background = getRandomColor();
};

let getRandomGradient = () => `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;

btnRandomGradient.onclick = () => {
  boxColor.style.background = 'none';
  boxColor.style.backgroundImage = getRandomGradient();
};


//Кнопки для значений
let rgbInput = document.querySelector('#rgb-input');
let rgbConditions = document.querySelector('#rgb-conditions');
let btnAcceptRgbInput = document.querySelector('#btn-accept-rgb-input');
let btnCleanRgbInput = document.querySelector('#btn-clean-rgb-input');

let rgbaInput = document.querySelector('#rgba-input');
let rgbaConditions = document.querySelector('#rgba-conditions');
let btnAcceptRgbaInput = document.querySelector('#btn-accept-rgba-input');
let btnCleanRgbaInput = document.querySelector('#btn-clean-rgba-input');

let hexInput = document.querySelector('#hex-input');
let hexConditions = document.querySelector('#hex-conditions');
let btnAcceptHexInput = document.querySelector('#btn-accept-hex-input');
let btnCleanHexInput = document.querySelector('#btn-clean-hex-input');//одну кнопку

// let arrBtn = document.querySelectorAll('.btn-palette');
// console.log(arrBtn);
// arrBtn.forEach( (el) => {
//   el.disabled = false;  
//   el.addEventListener('click', (event) => {
//     event.preventDefault();
//     el.disabled = false;
//     // console.log(el);
//     console.log(event.target);
//   });
// });

// let arrInput = document.querySelectorAll('.input-pallete');
// console.log(arrInput);
// arrInput.forEach( (el) => {
//   el.addEventListener('input', (event) => {
//     if(el.id === 'rgb-input') {
//       console.log(event.target);
//       arrBtn.forEach( (el) => {
//         el.disabled = false;  
//         el.addEventListener('click', (event) => {
//           event.preventDefault();
//           el.disabled = false;
//           // console.log(el);
//           console.log(event.target);
//         });
//       });
//     }
//   })
// })

// function mergeInputBtn (arr1, arr2) {
//   console.log(arr1);
//   console.log(arr2);

//   arr1[0].addEventListener('input', (event) => {
//     console.log(event.target);

//     arr2[0, 1].disabled = false
//   })
// };
// mergeInputBtn(arrInput, arrBtn);



let addEventInput = (elem, ok, clean, conditions) => {
  elem.addEventListener('click', () => conditions.classList.add('open'));

  elem.addEventListener('input', () => {
    if (elem.value) {
      ok.disabled = false;
      clean.disabled = false;
    };

    ok.addEventListener('click', (event) => {
      event.preventDefault();

      if (elem.id === 'rgb-input') {
        boxColor.style.background = `rgb(${elem.value})`;
      } else if (elem.id === 'rgba-input') {
        boxColor.style.background = `rgba(${elem.value})`;
      } else if (elem.id === 'hex-input') {
        boxColor.style.background = `#${elem.value}`;
      };
    });
    clean.addEventListener('click', (event) => {
      event.preventDefault();
      elem.value = '';
      boxColor.style.background = '#fff';
    });
  });

  window.addEventListener('click', event => {
    if (event.target !== elem) {
      conditions.classList.remove('open');
    };
  });
};

addEventInput(rgbInput, btnAcceptRgbInput, btnCleanRgbInput, rgbConditions);
addEventInput(rgbaInput, btnAcceptRgbaInput, btnCleanRgbaInput, rgbaConditions);
addEventInput(hexInput, btnAcceptHexInput, btnCleanHexInput, hexConditions);



//Перевод значений
let rgbSendInput = document.querySelector('#rgb-input-send');
let hexSendInput = document.querySelector('#hex-input-send');

let hexReceivingInput = document.querySelector('#hex-input-receiving');
let rgbReceivingInput = document.querySelector('#rgb-input-receiving');
let btnChangeColor = document.querySelectorAll('.btn-change-input');


rgbSendInput.addEventListener('click', () => {
  let rgbConditionsChange = document.querySelector('#rgb-conditions-change');
  rgbConditionsChange.classList.add('open');

  window.addEventListener('click', (event) => {
    if (event.target !== rgbSendInput) {
      rgbConditionsChange.classList.remove('open');
    }
  })
});

rgbSendInput.addEventListener('input', () => {
  if (rgbSendInput) {
    btnChangeColor[0].disabled = false;
  };
});



hexSendInput.addEventListener('click', () => {
  let hexConditionsChange = document.querySelector('#hex-conditions-change');
  hexConditionsChange.classList.add('open');

  window.addEventListener('click', (event) => {
    if (event.target !== hexSendInput) {
      hexConditionsChange.classList.remove('open');
    }
  })
});

hexSendInput.addEventListener('input', () => {
  if (hexSendInput) {
    btnChangeColor[1].disabled = false;
  };
});




function rgba2hex(orig) {
  let rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);

  let hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  hexReceivingInput.value = `#${hex}`;
};



btnChangeColor[0].addEventListener('click', (event) => {
  event.preventDefault();
  rgba2hex(`rgb(${rgbSendInput.value})`);
}
);



// function rgbToHex(r, g, b) {
//   const componentToHex = (c) => {
//     const hex = c.toString(16);
//     return hex.length === 1 ? "0" + hex : hex;
//   };

//   const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//   return hex;
// }

// // Пример использования:
// const hexColor = rgbToHex(2, 5, 22);
// console.log(hexColor);




function hexToRgb(hex) {
  // убираем # из начала строки, если есть
  hex = hex.replace("#", "");
  // проверяем, если у нас три символа - #fff, то дублируем символы: #fff => #ffffff
  if (hex.length === 3) {
    hex = hex.split("").map(function (char) {
      return char + char;
    }).join("");
  }
  // получаем красный, зеленый и синий цвета в десятичном формате
  let red = parseInt(hex.substring(0, 2), 16);
  let green = parseInt(hex.substring(2, 4), 16);
  let blue = parseInt(hex.substring(4, 6), 16);

  rgbReceivingInput.value = `rgb(${red}, ${green}, ${blue})`;
};

btnChangeColor[1].addEventListener('click', (event) => {
  event.preventDefault();
  hexToRgb(`#${hexSendInput.value}`)
});
