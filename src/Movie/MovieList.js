import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import api from './api/theMovieDb';
import './MovieList.css';

class MovieList extends Component {
  static get propTypes() {
    return { collection: PropTypes.string };
  }

  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
    api.getMovieList().then((res) => this.setState({movieList: res.results}));
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const movieTiles = this.state.movieList.map((movie) =>
      <li className='MovieList'><MovieTile movie={movie} /></li>
    );
    return (
      <ul className="Movie">{movieTiles}</ul>
      // <div style={{height: 1000, backgroundColor: 'red'}}></div>
    );
  }
}

export default MovieList;
