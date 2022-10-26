const menuBurger = document.querySelector(".header__burger-menue");
const menuMain = document.querySelector(".header__menue-сontainer");
const menuAbout = document.querySelector("#fundAbout");
const menuePrograms = document.querySelector(".header_programs");
const fundPrograms = document.querySelector("#programs");
const aboutFund = document.querySelector(".header__link_fund");
const buttonClose = document.querySelector(".header__button-close");
const buttonAbout = document.querySelector("#buttonAbout");
const buttonPrograms = document.querySelector("#buttonPrograms");


if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    menuMain.classList.add("header__burger-menue_active");
    buttonClose.classList.add("header__buttons_active");
  });
}

function closeMenuBurger(menuBurger) {
  menuBurger.classList.remove("header__burger-menue_active");
  buttonClose.classList.remove("header__buttons_active");
}

buttonClose.addEventListener("click", function (e) {
  closeMenuBurger(menuMain);
});



if (menuAbout) {
  aboutFund.addEventListener("click", function(e) {
    menuAbout.classList.add("header__burger-menue_active");
    buttonAbout.classList.add("header__buttons_active");
  });
}

if (menuePrograms) {
  fundPrograms.addEventListener("click", function(e) {
    menuePrograms.classList.add("header__burger-menue_active");
    buttonPrograms.classList.add("header__buttons_active");
  });
}

function closeMenueAbout(menuAbout) {
  menuAbout.classList.remove("header__burger-menue_active");
  buttonAbout.classList.remove("header__buttons_active");
  menuMain.classList.add("header__burger-menue_active");
  buttonClose.classList.add("header__buttons_active");
}

buttonAbout.addEventListener("click", function (e) {
  closeMenueAbout(menuAbout);
});

function closeMenuePrograms(menuePrograms) {
  menuePrograms.classList.remove("header__burger-menue_active");
  buttonPrograms.classList.remove("header__buttons_active");
  menuMain.classList.add("header__burger-menue_active");
  buttonClose.classList.add("header__buttons_active");
}

buttonPrograms.addEventListener("click", function (e) {
  closeMenuePrograms(menuePrograms);
});


/*


function openFundAboutMenue(aboutFund) {
  if (width > 767) {
    menuAbout.classList.toggle("header__menue_active");
    textLinkFund.classList.toggle("header__link_active");
  } else {
    menuAbout.classList.add("header__burger-menue_active");
    buttonAbout.classList.add("header__buttons_active");
  }
}

aboutFund.addEventListener("click", openFundAboutMenue);





function closeMenueAbout(menuAbout) {
  menuAbout.classList.remove("header__burger-menue_active");
  buttonAbout.classList.remove("header__buttons_active");
  menuMain.classList.add("header__burger-menue_active");
  buttonClose.classList.add("header__buttons_active");
}

buttonAbout.addEventListener("click", function (e) {
  closeMenueAbout(menuAbout);
});

function closeMenuePrograms(menuePrograms) {
  menuePrograms.classList.remove("header__burger-menue_active");
  buttonPrograms.classList.remove("header__buttons_active");
  menuMain.classList.add("header__burger-menue_active");
  buttonClose.classList.add("header__buttons_active");
}

buttonPrograms.addEventListener("click", function (e) {
  closeMenuePrograms(menuePrograms);
});*/
