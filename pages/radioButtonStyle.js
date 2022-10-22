const radioContainer = document.querySelector('.grid-support');
const radioButtons_moneyInput = radioContainer.querySelectorAll('.grid-support__money-input');
const radioLabels_moneyInput = radioContainer.querySelectorAll('.grid-support__money-label');

const radioButton_moneyInput1 = radioContainer.querySelector('.grid-support__money-input1');
const radioButton_moneyInput2 = radioContainer.querySelector('.grid-support__money-input2');
const radioButton_moneyInput3 = radioContainer.querySelector('.grid-support__money-input3');

const radioLabel_moneyInput1 = radioContainer.querySelector('.grid-support__money-label1');
const radioLabel_moneyInput2 = radioContainer.querySelector('.grid-support__money-label2');
const radioLabel_moneyInput3 = radioContainer.querySelector('.grid-support__money-label3');


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
  radioLabels_moneyInput.forEach(function (item) {
    item.style.backgroundColor = "#F8F8F8";
  });
  radioButtons_moneyInput.forEach(function (item) {
    if (item != rdBtn) {
      item.checked = false;
    }
  });
}


radioButton_moneyInput1.addEventListener("click", () => {
  ResetRadioButtons(radioButton_moneyInput1);
  if (radioButton_moneyInput1.checked) {
    radioButton_moneyInput1.checked = true
    radioLabel_moneyInput1.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "white";
    radioLabel_moneyInput2.style.color = "#000000";
    radioLabel_moneyInput3.style.color = "#000000";

  }
});

radioButton_moneyInput2.addEventListener("click", () => {
  ResetRadioButtons(radioButton_moneyInput2);
  if (radioButton_moneyInput2.checked) {
    radioLabel_moneyInput2.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "#000000";
    radioLabel_moneyInput2.style.color = "white";
    radioLabel_moneyInput3.style.color = "#000000";
  }
});

radioButton_moneyInput3.addEventListener("click", () => {
  ResetRadioButtons(radioButton_moneyInput3);
  if (radioButton_moneyInput3.checked) {
    radioLabel_moneyInput3.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "#000000";
    radioLabel_moneyInput2.style.color = "#000000";
    radioLabel_moneyInput3.style.color = "white";
  }
});
