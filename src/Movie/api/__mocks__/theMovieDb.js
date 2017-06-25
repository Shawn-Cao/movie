const movieList = {
  results: [1,2,3]
};

export default {
  getMovieList: (collection = 'popular', page = 1) => {
    return new Promise((resolve, reject) => {
      process.nextTick(() => resolve(movieList));
    });
  }
};
