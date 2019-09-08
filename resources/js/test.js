





window.addEventListener('scroll', function () {
    var p = document.querySelector(".app-screen");
    var top111 = p.getBoundingClientRect().top;
    var height = window.innerHeight / 1.3;
    if (top111 < height) {
        p.classList.add("activated");
    }
})


/*
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
window.addEventListener('scroll', function (event) {
    if (isInViewport(p)) {
        console.log("yes");
    }
}, false);*/
