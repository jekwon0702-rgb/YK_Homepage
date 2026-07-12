const header = document.getElementById("header");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");

});


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("open");
        navigation.classList.remove("open");

    });

});