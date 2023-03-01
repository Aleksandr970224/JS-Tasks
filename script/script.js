let btnHireMe = document.getElementById('btnHireMe');

let divWrapContact = document.getElementById('wrapperContact');

btnHireMe.addEventListener('click', () => {
  divWrapContact.classList.add('open');
});

window.addEventListener('click', event => {
  if (event.target === divWrapContact) {
    divWrapContact.classList.remove('open');
  };
});

window.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    divWrapContact.classList.remove('open');
  };
});


let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  divWrapContact.classList.remove('open');
});



let btnHamburgerMenu = document.getElementById('hamburgerMenu');
// console.log(btnHamburgerMenu);

let wrapBurgerMenu = document.getElementById('burgerMenu');
// console.log(wrapBurgerMenu);

let closeBurgerMenu = document.getElementById('closeBurgerMenu');
// console.log(closeBurgerMenu);

btnHamburgerMenu.addEventListener('click', () => {
  wrapBurgerMenu.classList.add('burgerMenuOpen');
});

closeBurgerMenu.addEventListener('click', () => {
  wrapBurgerMenu.classList.remove('burgerMenuOpen');
});

window.addEventListener('click', (event) => {
  if (event.target === wrapBurgerMenu) {
    wrapBurgerMenu.classList.remove('burgerMenuOpen');
  };
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    wrapBurgerMenu.classList.remove('burgerMenuOpen');
  };
});



let changeLangRu = document.getElementById('changeLangRu');
// console.log(changeLangRu);

let changeLangEn = document.getElementById('changeLangEn');
// console.log(changeLangEn);

let changeMainTitleContent = document.getElementById('mainTitleContent');
// console.log(changeMainTitleContent);

changeLangRu.addEventListener('click', () => {
  changeMainTitleContent.innerText = 'Сохраните искренние эмоции, романтические чувства и счастливые моменты жизни вместе с профессиональным фотографом Alexa Rise';
});

changeLangEn.addEventListener('click', () => {
  changeMainTitleContent.innerText = 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise';
});




let divWrapperImagesBig = document.getElementById('wrapperImagesBig');
// console.log(divWrapperImagesBig);


// document.querySelectorAll('.wrapperImages .imgPortfolio').forEach(el => {
//   el.addEventListener('click', () => {
//     // console.log(el);
//     divWrapperImagesBig.classList.add('wrapperImagesBigOpen');
//     // document.querySelector('.wrapperImagesBig img').src = el.getAttribute('src');
//     document.querySelector('.wrapperImagesBig .img').src = el.src;
//   });
// });

// window.addEventListener('keyup', (event) => {
//   if (event.keyCode === 27) {
//     divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');
//   };
// });

// window.addEventListener('click', (event) => {
//   if (event.target === divWrapperImagesBig) {
//     divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');
//   };
// });




let imgPortfolio = document.getElementsByClassName('imgPortfolio');
console.log(imgPortfolio);

let imgOpen = document.getElementById('img');
console.log(imgOpen);

for (let key of imgPortfolio) {
  key.addEventListener('click', () => {
    divWrapperImagesBig.classList.add('wrapperImagesBigOpen');
    imgOpen.src = key.src;
  });
};

window.addEventListener('click', (event) => {
  if (event.target === divWrapperImagesBig) {
    divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');
  };
});

window.addEventListener('keyup', (event) => {
  if (event.keyCode === 27) {
    divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');
  };
});







// for (let key of imgPortfolio) {
//   key.addEventListener('click', () => {
//     let result = key;
//     console.log(key);
//     divWrapperImagesBig.classList.add('wrapperImagesBigOpen');
//     divWrapperImagesBig.appendChild(result);
//   });
// };

// window.addEventListener('keydown', (event) => {
//   if (event.keyCode === 27) {
//     divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');}
//   }
//     );

// for (let key of divWrapperImagesBig) {
//   window.addEventListener('keydown', (event) => {
//     if (event.keyCode === 27) {
//       divWrapperImagesBig.classList.remove('wrapperImagesBigOpen');
//       imgPortfolio.appendChild(key);
//     }
//   })
// }


// let testDiv = document.getElementsByClassName('test');
// console.log(testDiv);

// let testText = document.getElementsByClassName('testText');
// console.log(testText);
// // testText.innerText = 'ggg';
// // testText['style'][color] = 'red';

// for (let key of testText) {
//   console.log(key.innerText);
//   // key = 'hh';
//   // console.log(key.style);
//   key.style.color = 'red';
//   key.innerText = 'hhh';
// };




// let imgPortfolio = document.getElementsByClassName('imgPortfolio');
// let imgPortfolio = document.querySelectorAll('imgPortfolio');
// let testImg = document.getElement('img');
// console.log(testImg);
// console.log(imgPortfolio);
// console.log(imgPortfolio.length);
// for (let key of imgPortfolio) {
//   key.addEventListener('click', () => {
//     console.log(key);
//     key.style.position = 'absolute';
//     key.style.display = 'flex';
//     key.style.alignSelf = 'center';
//     key.style.justifySelf = 'center'
//     key.style.padding = '200px';
    // key.style.transform = 'scale(1.5)';
//     key.style.backgroundColor = '#000000c5';
//   })
// }

// for (let key of imgPortfolio) {
//   window.addEventListener('keydown', (event) => {
//     if (event.keyCode === 27) {
//       key.style.position = 'static';
//       key.style.display = 'block';
//       key.style.padding = '0';
//       key.style.backgroundColor = 'none';
//     }
//   })
// }






// let divWrapperImages = document.getElementById('wrapperImages')
// console.log(divWrapperImages);

// for (let key of imgPortfolio) {
//   key.addEventListener('click', () => {
//     // console.log(key);
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     div.appendChild(key);
//     div.classList.add('wrapperBigImg');
//     // console.log(div);

//     div.addEventListener('click', () => {
//       div.classList.remove('wrapperBigImg');
//       let parent = div.parentNode;
//       console.log(parent);
//       // parent.removeChild(div);
//       divWrapperImages.appendChild(key);
//     });
//   });

  // for (let key of div) {
  //   console.log(key);
  // }
// };

// for (let key of div) {
//   console.log(key);
// }




// imgPortfolio.children[0].addEventListener('click', () => {
//   console.log('yes');
// });

// for (let key of imgPortfolio) {
//   key.addEventListener('click', () => {
//     key.style.transform = 'scale(1.5)';
//   });

//   for (let key of imgPortfolio) {
//     key.addEventListener('click', () => {
//       key.style.transform = 'scale(.5)';
//     })}
  // let div = document.createElement('div');
  // key.addEventListener('click', (event) => {
  //   console.log(event);
  //   console.log(key);
  //   // key.classList.add('testImg');

  //   // let div = document.createElement('div');
  //   // let img = document.createElement('img');
  //   div.classList.add('wrapperBigImg');
  //   div.appendChild(key);
  //   document.body.children[1].appendChild(div);
  //   div.classList.add('wrapperBigImgOpen');

  //   console.log(div);
  //   // console.log(img);
  // })

  // window.addEventListener ('click', (event) => {
  //   if(event.target === div)
  //     div.classList.remove('wrapperBigImgOpen');
  // });
// };
















// // let testImg = document.getElementById('testImg');

// let wrapperBigImg = document.getElementsByClassName('wrapperBigImg');
// console.log(wrapperBigImg);

// let imgPortfolioClass = document.getElementsByClassName('imgPortfolio')


// // for (let el of imgPortfolioClass) {
// //   el.addEventListener('click', () => wrapperBigImg.classList.add('wrapperBigImgOpen'));
// //   console.log(el);
// // };
// // console.log(imgPortfolioClass.length)

// for (let i = 0; i < imgPortfolioClass.length; i++) {
//   // console.log(imgPortfolioClass[i]);
//   imgPortfolioClass[i].addEventListener('click', () => {
//     console.log(imgPortfolioClass[i]);
//     console.log('ko');
//     // alert(imgPortfolioClass[i]);
//     wrapperBigImg[i].classList.add('wrapperBigImgOpen');
//   });
// };

// // testImg.addEventListener('click', () => {
// //   wrapperBigImg.classList.remove('wrapperBigImgOpen');
// // });


// for (let i = 0; i < imgPortfolioClass.length; i++) {
//   // console.log(imgPortfolioClass[i]);
//   imgPortfolioClass[i].addEventListener('click', () => {
//     if (event.target === imgPortfolioClass[i])
//     console.log('yes');
//     // wrapperBigImg[i].classList.remove('wrapperBigImgOpen');
//   });
// };

// // window.addEventListener('click', (event) => {
// //   if (event.target === wrapperBigImg)
// //     wrapperBigImg.classList.remove('wrapperBigImgOpen');
// // });


// for (let i = 0; i < imgPortfolioClass.length; i++) {
//   // console.log(imgPortfolioClass[i]);
//   // imgPortfolioClass[i].addEventListener('click', () => {
//   //   if (event.target === imgPortfolioClass[i])
//   //   console.log('yes');
//   //   wrapperBigImg[i].classList.remove('wrapperBigImgOpen');
//   // });


//   window.addEventListener('keydown', event => {
//     if (event.keyCode === 27) {
//       // console.log('hi');
//       console.log(event);
//       wrapperBigImg[i].classList.remove('wrapperBigImgOpen');
//     };
//   });
// };

// // window.addEventListener('keydown', event => {
// //   if (event.keyCode === 27) {
// //     wrapperBigImg.classList.remove('wrapperBigImgOpen');
// //   };
// // });
