// grid-support const
const radioContainerSupport = document.querySelector('.grid-support');

const radioButtons_moneyInput = radioContainerSupport.querySelectorAll('.grid-support__money-input');
const radioLabels_moneyInput = radioContainerSupport.querySelectorAll('.grid-support__money-label');

const radioButton_moneyInput1 = radioContainerSupport.querySelector('.grid-support__money-inputOne');
const radioButton_moneyInput2 = radioContainerSupport.querySelector('.grid-support__money-inputTwo');
const radioButton_moneyInput3 = radioContainerSupport.querySelector('.grid-support__money-inputThree');

const radioLabel_moneyInput1 = radioContainerSupport.querySelector('.grid-support__money-labelOne');
const radioLabel_moneyInput2 = radioContainerSupport.querySelector('.grid-support__money-labelTwo');
const radioLabel_moneyInput3 = radioContainerSupport.querySelector('.grid-support__money-labelThree');


const switchContainer = document.querySelector('.switch');

const switchButtons = switchContainer.querySelectorAll('.switch__input');
const switchLabels = switchContainer.querySelectorAll('.switch__label');

const switchInputOne = switchContainer.querySelector('.switch__inputOne');
const switchInputTwo = switchContainer.querySelector('.switch__inputTwo');
const switchLabel1 = switchContainer.querySelector('.switch__labelOne');
const switchLabel2 = switchContainer.querySelector('.switch__labelTwo');

const switchIndicator = switchContainer.querySelector('.switch__indicator');

const bankcardContainer = document.querySelector('.bankcard');
const switchTimeMonthly = switchContainer.querySelector('#two2');
const bankcardMessage = document.querySelector('.bankcard__description');
const anotherSum = document.querySelector('#field-sum');


if (switchInputOne.checked) {
  radioLabel_moneyInput1.textContent = '5 000';
  radioLabel_moneyInput2.textContent = '10 000';
  radioLabel_moneyInput3.textContent = '50 000';
} else {
  radioLabel_moneyInput1.textContent = '1 000';
  radioLabel_moneyInput2.textContent = '5 000';
  radioLabel_moneyInput3.textContent = '10 000';
}

switchInputOne.addEventListener("click", () => {
  if (switchInputOne.checked) {
    radioLabel_moneyInput1.textContent = '5 000';
    radioLabel_moneyInput2.textContent = '10 000';
    radioLabel_moneyInput3.textContent = '50 000';
    bankcardMessage.classList.remove('bankcard__description_visibility');
  }
});

switchInputTwo.addEventListener("click", () => {
  if (switchInputTwo.checked) {
    radioLabel_moneyInput1.textContent = '1 000';
    radioLabel_moneyInput2.textContent = '5 000';
    radioLabel_moneyInput3.textContent = '10 000';
    bankcardMessage.classList.add('bankcard__description_visibility');
  }
});


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
  ResetRadioButtons(radioButton_moneyInput1, radioLabel_moneyInput1);
  if (radioButton_moneyInput1.checked) {
    radioButton_moneyInput1.checked = true
    radioLabel_moneyInput1.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "#FFFFFF";
    radioLabel_moneyInput2.style.color = "#000000";
    radioLabel_moneyInput3.style.color = "#000000";

  }
});

radioButton_moneyInput2.addEventListener("click", () => {
  ResetRadioButtons(radioButton_moneyInput2, radioLabel_moneyInput2);
  if (radioButton_moneyInput2.checked) {
    radioLabel_moneyInput2.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "#000000";
    radioLabel_moneyInput2.style.color = "#FFFFFF";
    radioLabel_moneyInput3.style.color = "#000000";
  }
});

radioButton_moneyInput3.addEventListener("click", () => {
  ResetRadioButtons(radioButton_moneyInput3, radioLabel_moneyInput3);
  if (radioButton_moneyInput3.checked) {
    radioLabel_moneyInput3.style.backgroundColor = "#82607D";
    radioLabel_moneyInput1.style.color = "#000000";
    radioLabel_moneyInput2.style.color = "#000000";
    radioLabel_moneyInput3.style.color = "#FFFFFF";
  }
});


//second page
if (document.URL.includes("help-fund-page.html")) {
  // grid-Payments const
  const radioContainerPayments = document.querySelector('.grid-Payments');

  const radioButtons_Payments = radioContainerPayments.querySelectorAll('.grid-Payments__Input');
  const radioLabels_Payments = radioContainerPayments.querySelectorAll('.grid-Payments__label');

  const radioButton_Payment1 = radioContainerPayments.querySelector('.grid-Payments__Input-visa');
  const radioButton_Payment2 = radioContainerPayments.querySelector('.grid-Payments__Input-GPay');
  const radioButton_Payment3 = radioContainerPayments.querySelector('.grid-Payments__Input-ApplePay');

  const radioLabel_Payment1 = radioContainerPayments.querySelector('.grid-Payments__visa-mir-label');
  const radioLabel_Payment2 = radioContainerPayments.querySelector('.grid-Payments__googlePay-label');
  const radioLabel_Payment3 = radioContainerPayments.querySelector('.grid-Payments__ApplePay-label');

  const bankcard__wrapper = document.querySelector('.bankcard__wrapper');

  function ResetRadioButtonsPayments(rdBtn) {

    radioLabels_Payments.forEach(function (item) {
      item.style.backgroundColor = "#F8F8F8";
    });
    radioButtons_Payments.forEach(function (item) {
      if (item != rdBtn) {
        item.checked = false;
      }
    });
  }

  radioButton_Payment1.addEventListener("click", () => {
    ResetRadioButtonsPayments(radioButton_Payment1, radioLabel_Payment1);
    if (radioButton_Payment1.checked) {
      radioButton_Payment1.checked = true
      radioLabel_Payment1.style.backgroundColor = "#82607D";
      bankcard__wrapper.classList.remove('bankcard__wrapper_disable');
    }
  });

  radioButton_Payment2.addEventListener("click", () => {
    ResetRadioButtonsPayments(radioButton_Payment2, radioLabel_Payment2);
    if (radioButton_Payment2.checked) {
      radioButton_Payment2.checked = true
      radioLabel_Payment2.style.backgroundColor = "#82607D";
      bankcard__wrapper.classList.add('bankcard__wrapper_disable');
    }
  });

  radioButton_Payment3.addEventListener("click", () => {
    ResetRadioButtonsPayments(radioButton_Payment3, radioLabel_Payment3);
    if (radioButton_Payment3.checked) {
      radioButton_Payment3.checked = true
      radioLabel_Payment3.style.backgroundColor = "#82607D";
      bankcard__wrapper.classList.add('bankcard__wrapper_disable');
    }
  });
}

anotherSum.addEventListener('click', function () {
  radioButton_moneyInput1.checked = false;
  radioLabel_moneyInput1.style.backgroundColor = "#F8F8F8";
  radioButton_moneyInput2.checked = false;
  radioLabel_moneyInput2.style.backgroundColor = "#F8F8F8";
  radioButton_moneyInput3.checked = false;
  radioLabel_moneyInput3.style.backgroundColor = "#F8F8F8";
  radioLabel_moneyInput1.style.color = "#000000";
  radioLabel_moneyInput2.style.color = "#000000";
  radioLabel_moneyInput3.style.color = "#000000";
});
