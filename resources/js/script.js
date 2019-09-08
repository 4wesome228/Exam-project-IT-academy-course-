var button = document.querySelectorAll(".button-choose");
var goal = document.querySelectorAll(".goal");
var icon = document.querySelectorAll(".icons-switch");
var iconContent = document.querySelectorAll(".slideshow-container");
var salesItem = document.querySelectorAll(".sales-aside-item");
var newPrice = document.querySelector(".new-price");
var oldPrice = document.querySelector(".old-price");
var burgerMenu = document.querySelector(".burger");
var navLinks = document.querySelector(".main-nav");
var Links = navLinks.querySelectorAll(".main-nav li");
/*function linksAnimation(index) {
  console.log(index);
  
}*/



burgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("main-nav-active");
  this.classList.toggle("activeBurger");

  for (var i = 0; i < Links.length; i++) {
    if (Links[i].style.animation.length > 0) Links[i].style.animation = "";
    else Links[i].style.animation = "navLinks 0.5s  forwards " + (i / 4.5) + "s";

  }
});



for (var j = 0; j < salesItem.length; j++) {
  salesItem[j].addEventListener("click", selectSalesItem);
}

function selectSalesItem(e) {
  for (var i = 0; i < salesItem.length; i++) {
    salesItem[i].classList.remove("clicked-item");
  }

  this.classList.add("clicked-item");
}
function selectGoal(e) {
  removeChosen();
  removeShow();
  this.classList.add("clicked");
  var buttonItem = document.querySelector("#" + this.id + "-button");
  buttonItem.innerHTML =
    "<i id='icon' class='far fa-check-square  visibleIcon '></i> Chosen";
  var iconItem = document.querySelector("#" + this.id + "-icon");
  iconItem.classList.add("add-border");
  var slideItem = document.querySelector("#" + this.id + "-icon-menu");
  slideItem.classList.add("show");
}
function removeChosen() {
  for (var i = 0; i < icon.length; i++) {
    icon[i].classList.remove("add-border");
  }
  for (var j = 0; j < button.length; j++) {
    button[j].innerHTML = "Choose";
  }
}
function removeShow() {
  for (var j = 0; j < iconContent.length; j++) {
    iconContent[j].classList.remove("show");
  }
  for (var j = 0; j < goal.length; j++) {
    goal[j].classList.remove("clicked");
  }
}

for (var j = 0; j < goal.length; j++) {
  goal[j].addEventListener("click", selectGoal);
}

for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    iconRemove();
    for (var j = 0; j < iconContent.length; j++) {
      iconContent[j].classList.remove("show");
    }
    this.classList.add("add-border");
    var iconito = document.querySelector("#" + this.id + "-menu");
    iconito.classList.add("show");
  });
}

function iconRemove() {
  for (var i = 0; i < icon.length; i++) {
    icon[i].classList.remove("add-border");
  }
}

function drawChart() {
  chart.forEach();
}
