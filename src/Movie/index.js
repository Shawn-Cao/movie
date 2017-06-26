import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import Spinner from './Spinner';

import api from './api/theMovieDb';
import { throttle } from 'lodash';

class Movies extends Component {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      movieList: []
    };
    this.fetchMovie();
    this.handleScroll = throttle(this.handleScroll.bind(this), 500);
  }

  spin(spinner = true) {
    return this.setState({ spinner: spinner });
  }

  fetchMovie(page) {
    this.setState({
      spinner: true
    });
    api.getMovieList(undefined, page || this.state.page).then((res) => {
      this.setState({
        spinner: false,
        movieList: this.state.movieList.concat(res.results),
        page: res.page
      });
    });
  }

  handleScroll(e) {
    if (e.target.scrollTop >= e.target.clientHeight) {
      console.log(e.target.clientHeight);
      this.fetchMovie(this.state.page + 1);
    }
  }

  // Register scroll event: 1. on this component only. 2. with throttling
  componentDidMount() {
    document.getElementById('movie-widget').addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.getElementById('movie-widget').removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div style={{width: this.props.width, height: this.props.height, position: 'relative'}}>
        {this.state.spinner &&
          <Spinner spin={this.state.spinner} style={{position: 'absolute', top: '50%', left: '50%', zIndex: 1000}} />
        }
        <div id="movie-widget" style={{width: this.props.width, height: this.props.height, position: 'relative', overflowY: 'scroll'}}>
          <MovieList movies={this.state.movieList}/>
        </div>
      </div>
    );
  }
}

export default Movies;
