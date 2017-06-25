const API_KEY = 'eeafc9fd9b4aa8e2450b8bedd64a4ae7';
const ENDPOINT = 'https://api.themoviedb.org/3/movie/';
//https://api.themoviedb.org/3/movie/popular?api_key=eeafc9fd9b4aa8e2450b8bedd64a4ae7&language=en-US&page=1

export default {
  getMovieList: (collection = 'popular', page = 1) => {
    console.log(`${ENDPOINT}${collection}?api_key=${API_KEY}&language=en-US&page=${page}`);
    return fetch(`${ENDPOINT}${collection}?api_key=${API_KEY}&language=en-US&page=${page}`)
     .then(
       (response) => response.json(),
       (error) => console.log(error)
     );
  }
};
