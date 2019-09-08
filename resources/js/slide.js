var slideIndex = 1;
showSlides(slideIndex);
var goal1 = document.querySelectorAll(".goal");
var icon1 = document.querySelectorAll(".icons-switch");
for (var i = 0; i < goal1.length; i++) {
  goal1[i].addEventListener("click", function () {
    showSlides(-1);
  });
}
for (var i = 0; i < icon1.length; i++) {
  icon1[i].addEventListener("click", function () {
    showSlides(-1);
  });
}


function plusSlides(n) {
  slideIndex += n;

  showSlides(slideIndex);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.querySelectorAll(".choice-container");
  var dots = document.getElementsByClassName("dot");


  if (n > slides.length / 3) slideIndex = 2; //slides.length / 3  slideIndex=2 заблокировать стрелку вправо
  if (n < 1) slideIndex = slides.length / 3 - 1; //slides.length / 3 - 1 если заблокировать бесконечн слайдер для елвой стрелки
  //slides.length / 3 если включить для левой стрелки
  for (var i = 0; i < slides.length; i++) {

    if (slideIndex == 1 && i % 2 != 0 && i != 0) {
      slides[i].style.display = "none";

      slides[i - 1].style.display = "flex";

    }
    if ((slideIndex == 2 && i % 2 == 0) || i == 0) {
      slides[i].style.display = "none";

      slides[i + 1].style.display = "flex";

    }
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
}
