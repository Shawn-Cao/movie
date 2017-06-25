import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class Movies extends Component {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number
    };
  }

  render() {
    return (
      <div style={{width: this.props.width, height: this.props.height, overflowY: 'scroll'}}>
       <MovieList />
      </div>
    );
  }
}

export default Movies;
