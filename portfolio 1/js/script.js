//Бургер меню
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

$(document).ready(function () {
   //прелоадер для сайта
   $(".loaderArea").css("display", "none")

   //калькулятор
   function calculate() {
      let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
      let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
      $(".days .digit").text(days);
      $(".price .digit").text(sum);
   }
   $("select").on("change", function () {
      calculate();
   });
   calculate();
});
//Анимация активных ссылок в меню 
$(window).scroll(() => {
   let scrollDistance = $(window).scrollTop();
   $('.section').each((i, el) => {
      if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
         $('nav a').each((i, el) => {
            if ($(el).hasClass('active')) {
               $(el).removeClass('active');
            }
         });

         $('nav li:eq(' + i + ')').find('a').addClass('active');
      }
   });
});

//Модальное окно акции по таймеру
/*setTimeout(function () {
   const myModal = new bootstrap.Modal('#myModal', {
      keyboard: false
   });
   modalToggle = document.getElementById('toggleMyModal');
   myModal.show(modalToggle);

}, 1000);*/
//Добавление маски для набора номера, а также делаем для айфона, чтобы не пропускало отправку с пустыми строками. Событие event не даёт закрыть модальное окно при незаполненных данных.
$(document).ready(function () {
   $("#inputPhone").mask("+375(99) 999-99-99");
   $("form").submit(function (event) {
      if ($("#inputPhone").val() == "" || $("#inputEmail3").val() == "") {
         event.preventDefault();
         alert("Введите телефон");
      }
   })
});


$("form").on("submit", function () {
   event.preventDefault();
   $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
   }).done(function () {
      $(this).find("input").val("");
      alert("Сообщение успешно отправлено!");
      $("form").trigger("reset");
   });
   return false;
});
//Бегающие цифры статистики
let optionsStat = {
   threshold: [0.5]
};
let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
let elementsStat = $('.statAnimation');

elementsStat.each((i, el) => {
   observerStat.observe(el);
});

function onEntryStat(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         if (!$('.statAnimation').hasClass("done")) {
            $('.statAnimation').addClass("done");
            $('.statAnimation').spincrement({
               thousandSeparator: "",
               duration: 3000
            });
         }
      }
   });
}

//Модальные окна в кейсах
$('.image-link').magnificPopup({
   type: 'image'
});




/*$('.statAnimation').each(function () {
   $(this).prop('statistic_item', 0).animate({
      statistic_item: $(this)text()
   }, {
      duration: 4000,
      easing: 'swing',
      step: function (now){
         $(this).text(Math.ceil(now));
      }
   })
})*/



































/*let sum = 0, days = 0;
function calc() {
   let site = prompt("Какой тип сайта Вас интересует? 1 - Сайт-визитка 2 - Интернет-магазин 3 - Корпоративный сайт");
   if (site == "1") {
      sum = sum + 1000;
      days = days + 1;
   } else if (site == "2") {
      sum = sum + 2000;
      days = days + 2;
   } else if (site == "3") {
      sum = sum + 3000;
      days = days + 3;
   } else {
      alert("Что-то пошло не так");
      calc();
   }
   let design = prompt("Какой дизайн Вас интересует? 1 - Шаблонный 2 - Уникальный 3 - WOW-дизайн");
   if (design == "1") {
      sum = sum + 2000;
      days = days + 1;
   } else if (design == "2") {
      sum = sum + 3000;
      days = days + 2;
   } else if (design == "3") {
      sum = sum + 4000;
      days = days + 3;
   } else {
      alert("Что-то пошло не так");
      calc();
   }
   let adaptive = prompt("Под какое устройство хотите адаптировать? 1 - Только ПК 2 - Только мобильный сайт 3 - Пк + мобильный");
   if (adaptive == "1") {
      sum = sum + 4000;
      days = days + 1;
   } else if (adaptive == "2") {
      sum = sum + 5000;
      days = days + 2;
   } else if (adaptive == "3") {
      sum = sum + 6000;
      days = days + 3;
   } else {
      alert("Что-то пошло не так");
      calc();
   }
   alert("Сроки: " + days + " Стоимость: " + sum);
}
calc();*/
