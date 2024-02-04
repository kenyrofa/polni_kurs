const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', 'тест');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних посмотренных фильмов?');
const b = prompt('На сколько оцените его?');
const c = prompt('Один из последних посмотренных фильмов?');
const d = prompt('На сколько оцените его?');



personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
