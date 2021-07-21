const hamburger = document.querySelector("#burgerImg")
const dropDownMenu = document.querySelector("#mainNav")
const x = document.getElementsByTagName("BODY")[0];


hamburger.addEventListener('click', function (showMenu) {
    dropDownMenu.classList.toggle("menuOn");
})

const home = document.querySelector("#home-nav")
const redBg = document.querySelector("#red")
const orangeBg = document.querySelector("#orange")
const purpleBg = document.querySelector("#purple")
const greenBg = document.querySelector("#green")


home.addEventListener('click', function (greyBackground) {
    x.classList.toggle("lightgrey-bg");
    dropDownMenu.classList.remove("menuOn");
})

redBg.addEventListener('click', function (redBackground) {
    x.classList.toggle("red-bg");
    dropDownMenu.classList.remove("menuOn");
})

orangeBg.addEventListener('click', function (orangeBackground) {
    x.classList.toggle("orange-bg");
    dropDownMenu.classList.remove("menuOn");
})

purpleBg.addEventListener('click', function (purpleBackground) {
    x.classList.toggle("purple-bg");
    dropDownMenu.classList.remove("menuOn");
})

greenBg.addEventListener('click', function (greenBackground) {
    x.classList.toggle("green-bg");
    dropDownMenu.classList.remove("menuOn");
})