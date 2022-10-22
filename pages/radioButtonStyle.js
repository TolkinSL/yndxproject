const radioContainer = document.querySelector('.grid-support');
const radioButtonsSwitch = radioContainer.querySelectorAll('.grid__money-input');
const radioLabelsSwitch = radioContainer.querySelectorAll('.grid__money-label');

const radioButtonSwitch1 = radioContainer.querySelector('.grid__money-input1');
const radioButtonSwitch2 = radioContainer.querySelector('.grid__money-input2');
const radioButtonSwitch3 = radioContainer.querySelector('.grid__money-input3');

const radioLabelSwitch1 = radioContainer.querySelector('.grid__money-label1');
const radioLabelSwitch2 = radioContainer.querySelector('.grid__money-label2');
const radioLabelSwitch3 = radioContainer.querySelector('.grid__money-label3');


const switchContainer = document.querySelector('.switch');

const switchButtons = switchContainer.querySelectorAll('.switch__input');
const switchLabels = switchContainer.querySelectorAll('.switch__label');

const switchInputOne = switchContainer.querySelector('.switch__inputOne');
const switchInputTwo = switchContainer.querySelector('.switch__inputTwo');
const switchLabel1 = switchContainer.querySelector('.switch__label1');
const switchLabel2 = switchContainer.querySelector('.switch__label2');

const switchIndicator = switchContainer.querySelector('.switch__indicator');


con

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
  radioLabelsSwitch.forEach(function (item) {
    item.style.backgroundColor = "#F8F8F8";
  });
  radioButtonsSwitch.forEach(function (item) {
    if (item != rdBtn) {
      item.checked = false;
    }
  });
}


radioButtonSwitch1.addEventListener("click", () => {
  ResetRadioButtons(radioButtonSwitch1);
  if (radioButtonSwitch1.checked) {
    radioButtonSwitch1.checked = true
    radioLabelSwitch1.style.backgroundColor = "#82607D";
    radioLabelSwitch1.style.color = "white";
    radioLabelSwitch2.style.color = "#000000";
    radioLabelSwitch3.style.color = "#000000";

  }
});

radioButtonSwitch2.addEventListener("click", () => {
  ResetRadioButtons(radioButtonSwitch2);
  if (radioButtonSwitch2.checked) {
    radioLabelSwitch2.style.backgroundColor = "#82607D";
    radioLabelSwitch1.style.color = "#000000";
    radioLabelSwitch2.style.color = "white";
    radioLabelSwitch3.style.color = "#000000";
  }
});

radioButtonSwitch3.addEventListener("click", () => {
  ResetRadioButtons(radioButtonSwitch3);
  if (radioButtonSwitch3.checked) {
    radioLabelSwitch3.style.backgroundColor = "#82607D";
    radioLabelSwitch1.style.color = "#000000";
    radioLabelSwitch2.style.color = "#000000";
    radioLabelSwitch3.style.color = "white";
  }
});
