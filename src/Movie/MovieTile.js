import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieTile.css';

const titleStyle = {
  position: 'absolute', bottom: '10px', left: '10px',
  color: 'white', fontWeight: 100
};

class MovieTile extends Component {
  static get propTypes() {
    return {
      movie: PropTypes.object
    };
  }

  render() {
    return (
      <div className="MovieTile">
        <img src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`}
          className="poster-img" alt={`poster of movie: ${this.props.movie.title}`} />
      </div>
    );
  }
}

export default MovieTile;
