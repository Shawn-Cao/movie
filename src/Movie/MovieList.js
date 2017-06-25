import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTile from './MovieTile';
import api from './api/theMovieDb';
import './MovieList.css';
import { throttle } from 'lodash';

class MovieList extends Component {
  static get propTypes() {
    return { collection: PropTypes.string };
  }

  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
    this.fetchMovie();
    this.handleScroll = throttle(this.handleScroll.bind(this), 500);
  }

  fetchMovie(page) {
    api.getMovieList(undefined, page || this.state.page).then((res) => this.setState({
      movieList: this.state.movieList.concat(res.results),
      page: res.page
    }));
  }

  handleScroll(e) {
    if (e.target.scrollTop >= e.target.clientHeight) {
      console.log(e.target.clientHeight);
      this.fetchMovie(this.state.page + 1);
    }
  }

  componentDidMount() {
    document.getElementById('movie-widget').addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.getElementById('movie-widget').removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const movieTiles = this.state.movieList.map((movie) =>
      <li key={movie.id} className='MovieList'><MovieTile movie={movie} /></li>
    );
    return (
      <ul className="Movie">{movieTiles}</ul>
      // <div style={{height: 1000, backgroundColor: 'red'}}></div>
    );
  }
}

export default MovieList;
