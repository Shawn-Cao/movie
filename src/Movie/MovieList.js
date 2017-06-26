import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import './MovieList.css';

class MovieList extends Component {
  static get propTypes() {
    return {
      movies: PropTypes.array
    };
  }

  render() {
    const movieTiles = this.props.movies.map((movie) =>
      <li key={movie.id} className='MovieList'><MovieTile movie={movie} /></li>
    );
    return (
      <ul className="Movie">{movieTiles}</ul>
    );
  }
}

export default MovieList;
