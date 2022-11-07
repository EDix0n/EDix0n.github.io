//Создание модального окна для кнопки sendmessage
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};

//Бургер меню
const burgerHeader = document.querySelector('.header__burger');
if (burgerHeader) {
    const menuHeader = document.querySelector('.header__menu');
    burgerHeader.addEventListener("click", function (event) {
        document.body.classList.toggle('lock');
        burgerHeader.classList.toggle('active');
        menuHeader.classList.toggle('active');
    });
}
