import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import Spinner from './Spinner';
import './index.css';

import api from './api/theMovieDb';
import { throttle } from 'lodash';

class Movies extends Component {
  static get propTypes() {
    return {
      width: PropTypes.number,
      height: PropTypes.number
    };
  }

  static get defaultProps() {
    return {
      width: 850,
      height: 600
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      movieList: []
    };
    this.handleScroll = throttle(this.handleScroll.bind(this), 500);
  }

  // Fetch Movie: 1. from API of choice. 2. always toggle spinner
  fetchMovie(page) {
    this.setState({
      spinner: true,
      error: ''
    });
    api.getMovieList(undefined, page || this.state.page).then((res) => {
      this.setState({
        spinner: false,
        movieList: this.state.movieList.concat(res.results),
        page: res.page
      });
    }).catch((error) => {
      this.setState({
        spinner: false,
        error: 'Error fetching movie data from network!'
      });
    });
  }

  handleScroll(e) {
    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      this.fetchMovie(this.state.page + 1);
    }
  }

  // Register scroll event: 1. on this component only. 2. with throttling
  componentDidMount() {
    global.document.getElementById('movie-widget').addEventListener("scroll", this.handleScroll);
    this.fetchMovie();
  }

  componentWillUnmount() {
    global.document.getElementById('movie-widget').removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div style={{width: this.props.width, height: this.props.height, position: 'relative'}}>
        {this.state.spinner &&
          <Spinner spin={this.state.spinner} className="spinner" />
        }
        {this.state.error &&
          <div className="error-text"><h2>{this.state.error}</h2></div>
        }
        <div id="movie-widget" style={{width: this.props.width, height: this.props.height, position: 'relative', overflowY: 'scroll'}}>
          {this.state.movieList.length>0 &&
            <MovieList movies={this.state.movieList}/>
          }
        </div>
      </div>
    );
  }
}

export default Movies;
