import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import MovieTile from './MovieTile';


const movie = {
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
};

describe('MovieTime', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieTile movie={movie} />, div);
  });
  it('renders matching snapshot', () =>{
    const tree = renderer.create(
      <MovieTile movie={movie} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
