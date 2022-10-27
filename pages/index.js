const menuBurger = document.querySelector(".header__burger-menue");
const menuMain = document.querySelector(".header__menue-сontainer");
const menuAbout = document.querySelector("#fundAbout");
const menuePrograms = document.querySelector(".header_programs");
const fundPrograms = document.querySelector("#programsMenue");
const aboutFund = document.querySelector("#fund");
const buttonClose = document.querySelector(".header__button-close");
const buttonArrow = document.querySelector(".header__button-arrow");
const content = document.querySelector(".content");

if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    menuMain.classList.add("header__burger-menue_active");
    buttonClose.classList.add("header__buttons_active");
    content.classList.add("content_none");
  });
}

function closeMenuBurger(menuBurger) {
  menuBurger.classList.remove("header__burger-menue_active");
  buttonClose.classList.remove("header__buttons_active");
  content.classList.remove("content_none");
}

buttonClose.addEventListener("click", function (e) {
  closeMenuBurger(menuMain);
});

if (menuAbout) {
  aboutFund.addEventListener("click", function(e) {
    menuAbout.classList.add("header__burger-menue_active");
    buttonArrow.classList.add("header__buttons_active");
  });
}
//@ts-check

function closeMenueAbout(menuAbout) {
  menuAbout.classList.remove("header__burger-menue_active");
  buttonArrow.classList.remove("header__buttons_active");
  menuMain.classList.add("header__burger-menue_active");
  buttonClose.classList.add("header__buttons_active");
}
buttonArrow.addEventListener("click", function (e) {
  closeMenueAbout(menuAbout);
});

if (menuePrograms) {
  fundPrograms.addEventListener("click", function(e) {
    menuePrograms.classList.add("header__burger-menue_active");
    buttonArrow.classList.add("header__buttons_active");
  });

  function closeMenuePrograms(menuePrograms) {
    menuePrograms.classList.remove("header__burger-menue_active");
    buttonArrow.classList.remove("header__buttons_active");
    menuMain.classList.add("header__burger-menue_active");
    buttonClose.classList.add("header__buttons_active");
  }

  buttonArrow.addEventListener("click", function (e) {
    closeMenuePrograms(menuePrograms);
  });

}




