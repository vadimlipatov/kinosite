/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим проти..."
    ]
};

const promo_adv = document.querySelectorAll('.promo__adv img'),
      promo_adv_title = document.querySelector('.promo__adv-title'),
      promo_bg = document.querySelector('.promo__bg'),
      promo_genre = promo_bg.querySelector('.promo__genre'),
      moviesList = document.querySelectorAll('.promo__interactive-item');

for (let i = 0; i < promo_adv.length; i++) {
    promo_adv[i].remove();  
}
promo_adv_title.remove();

promo_genre.textContent = 'драма';

promo_bg.style.backgroundImage = "url('../img/bg.jpg')";

for (let i = 0; i < moviesList.length; i++) {    
    moviesList[i].innerText = `${i+1}. ${movieDB.movies.sort()[i]}`;    
}