var signUpButton = document.getElementById("signUp");
var signInButton = document.getElementById("signIn");
var container = document.getElementsByClassName("container")[0];
signUpButton.addEventListener("click", function () {

    container.classList.toggle("right-panel-active");
});
signInButton.addEventListener("click", function () {
    container.classList.remove("right-panel-active");

});