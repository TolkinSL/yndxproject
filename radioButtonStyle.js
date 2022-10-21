const radioContainer = document.querySelector('.grid');
const radioButtons = radioContainer.querySelectorAll('.grid__money-input');

const radioLabels = radioContainer.querySelectorAll('.grid__money-label');

const radioButton1 = radioContainer.querySelector('.grid__money-input1');
const radioButton2 = radioContainer.querySelector('.grid__money-input2');
const radioButton3 = radioContainer.querySelector('.grid__money-input3');

const radioLabel1 = radioContainer.querySelector('.grid__money-label1');
const radioLabel2 = radioContainer.querySelector('.grid__money-label2');
const radioLabel3 = radioContainer.querySelector('.grid__money-label3');


const switchContainer = document.querySelector('.switch');

const switchButtons = switchContainer.querySelectorAll('.switch__input');
const switchLabels = switchContainer.querySelectorAll('.switch__label');

const switchInputOne = switchContainer.querySelector('.switch__inputOne');
const switchInputTwo = switchContainer.querySelector('.switch__inputTwo');
const switchLabel1 = switchContainer.querySelector('.switch__label1');
const switchLabel2 = switchContainer.querySelector('.switch__label2');

const switchIndicator = switchContainer.querySelector('.switch__indicator');

// function def(item) {
//   if (item.checked) {
//     switchIndicator.style.visibility = "visible";
//     if (item == switchInputOne) {
//       switchLabel2.style.color = "#F8F8F8";
//       switchLabel1.style.color = "#999999";
//       switchIndicator.style.transform = "translate3d(0, 0, 0)";
//     } else {
//       switchLabel2.style.color = "#999999";
//       switchLabel1.style.color = "#F8F8F8";
//       let width = screen.width;
//       if (width > 1023) {
//         switchIndicator.style.transform = "translate3d(275px, 0, 0)";
//       } else {
//         switchIndicator.style.transform = "translate3d(165px, 0, 0)";
//       }
//     }
//   }
// }

// switchButtons.forEach(function (item) {
//   if (item.checked) {
//     def(item);
//   }
// });


// switchInputOne.addEventListener("click", () => {
//   if (switchInputOne.checked) {
//     switchIndicator.style.transform = "translate3d(0, 0, 0)";
//     switchLabel1.style.color = "#F8F8F8";
//     switchLabel2.style.color = "#999999";
//   }
// });

// switchInputTwo.addEventListener("click", () => {
//   if (switchInputTwo.checked) {
//     let width = screen.width;
//     if (width > 1023) {
//       switchIndicator.style.transform = "translate3d(275px, 0, 0)";
//     } else {
//       switchIndicator.style.transform = "translate3d(165px, 0, 0)";
//     }

//     switchLabel2.style.color = "#F8F8F8";
//     switchLabel1.style.color = "#999999";
//   }
// });


function ResetRadioButtons(rdBtn) {
  radioLabels.forEach(function (item) {
    item.style.backgroundColor = "#F8F8F8";
  });
  radioButtons.forEach(function (item) {
    if (item != rdBtn) {
      item.checked = false;
    }
  });
}


radioButton1.addEventListener("click", () => {
  ResetRadioButtons(radioButton1);
  if (radioButton1.checked) {
    radioButton1.checked = true
    radioLabel1.style.backgroundColor = "#82607D";
  }
});

radioButton2.addEventListener("click", () => {
  ResetRadioButtons(radioButton2);
  if (radioButton2.checked) {
    radioLabel2.style.backgroundColor = "#82607D";
  }
});

radioButton3.addEventListener("click", () => {
  ResetRadioButtons(radioButton3);
  if (radioButton3.checked) {
    radioLabel3.style.backgroundColor = "#82607D";
  }
});
