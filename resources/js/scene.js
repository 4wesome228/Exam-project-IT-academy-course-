var extand = document.getElementById("extand-btn");
var Cart = document.querySelector(".cart-container");
var info = document.querySelector(".information")

var scene = new Scene(
  {
    ".cart-container": [
      {
        transform: "scale(.6)",
        opacity: 0
      },
      {
        transform: "scale(1)",
        opacity: 1
      }
    ]
  },
  {
    duration: 1.5,
    easing: Scene.EASE_IN_OUT,
    selector: true
  }
).playCSS();

var scene1 = new Scene(
  {
    "#extand-btn": {
      0: {
        transform: {
          scale: 1
        }
      },
      0.4: {
        transform: {
          scale: 1.8
        }
      },
      0.6: {
        transform: {
          scale: 1
        }
      }
    },
    ".cart-container": {
      0.4: {
        transform: "scale(1)",
        height: "7%",
        opacity: 1
      },
      0.7: {
        height: "auto",
        opacity: 1
      }
    },
    ".information": {
      0.7: {
        display: "block",
        opacity: "0"
      },
      1.3: {
        opacity: 1
      }
    }
  },
  {
    duration: 1.2,
    easing: Scene.EASE_IN_OUT,
    selector: true
  }
);
extand.addEventListener("click", function () {

  if (scene1.getDirection() === "normal") {
    scene1.newItem("#extand-btn");
    scene1.playCSS();
    scene1.setDirection("reverse");


  } else {
    scene1.removeItem("#extand-btn");

    scene1.playCSS();
    scene1.setDirection("normal");

    console.log(info);




  }
});
