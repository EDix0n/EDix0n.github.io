//Бургер меню
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navBtnImg.src = "img/nav-close.svg";
   } else {
      navBtnImg.src = "img/nav-open.svg";
   }
}


//Создание модального окна для кнопки sendmessage
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");


btn.onclick = function () {
   modal.style.display = "block";
}

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   };
};































//Login complete nAX
/*let userName = prompt("Кто там?", '');
if (userName === 'Admin') {
   let pass = prompt('Введите пароль', '');
   if (pass === 'Я главный') {
      alert('Здравствуйте!');
   } else if (pass === '' || pass === null) {
      alert('Отменено');
   } else {
      alert('Неверный пароль');
   }
}
else if (userName === '' || userName === null) {
   alert('Отменено');
} else {
   alert("Я вас не знаю");
}*/
