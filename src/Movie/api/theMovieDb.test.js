jest.mock('./theMovieDb');

import theMovieDb from './theMovieDb';

it('exist', () => {
  expect(theMovieDb).toBeDefined();
});

it('fetches popular movies', () => {
  expect.assertions(2);
  return theMovieDb.getMovieList('popular').then(response => {
    expect(response).toBeDefined();
    let results = response.results;
    expect(results.length > 0).toBeTruthy();
  });
});
