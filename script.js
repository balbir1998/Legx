let nav = document.querySelector(".nav-container")
let logo = document.querySelector(".logo")
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
        nav.classList.add("scroll");
        logo.style.width = "110px";
    } else {
        nav.classList.remove("scroll");
        logo.style.width = "unset";
    }
}