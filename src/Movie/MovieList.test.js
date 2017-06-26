import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import MovieList from './MovieList';


const movies = [
  {
    "vote_count": 1724,
    "id": 297762,
    "video": false,
    "vote_average": 7,
    "title": "Wonder Woman",
    "popularity": 99.147603,
    "poster_path": "/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
    "original_language": "en",
    "original_title": "Wonder Woman",
    "genre_ids": [
      28,
      12,
      14,
      878
    ],
    "backdrop_path": "/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg",
    "adult": false,
    "overview": "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
    "release_date": "2017-05-30"
  },
  {
    "vote_count": 4187,
    "id": 263115,
    "video": false,
    "vote_average": 7.5,
    "title": "Logan",
    "popularity": 68.113005,
    "poster_path": "/9EXnebqbb7dOhONLPV9Tg2oh2KD.jpg",
    "original_language": "en",
    "original_title": "Logan",
    "genre_ids": [
      28,
      18,
      878
    ],
    "backdrop_path": "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
    "adult": false,
    "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    "release_date": "2017-02-28"
  }
];

describe('MovieTime', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieList movies={movies}/>, div);
  });
  it('renders matching snapshot', () =>{
    const tree = renderer.create(
      <MovieList movies={movies}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
