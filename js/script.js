'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим проти..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelectorAll('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21)  {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('add fav film...');
            }
            
            movieDB.movies.push(newFilm);

            createMovieList(movieDB.movies, movieList);
        } 

        addForm.reset();
    });
    
    const deleteAdv = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();  
        }
    };
        
    const makeChanges = () => {
        genre.textContent = 'драма';    
        poster.style.backgroundImage = "url('../img/bg.jpg')";
    };
        
    const sortArr = (arr) => {
        arr.sort();
    };    
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';        
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }
    
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
