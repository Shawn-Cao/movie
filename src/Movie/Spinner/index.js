import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './Spinner.css';

class Spinner extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      style: PropTypes.object
    };
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <img src={logo} className="Spinner" alt="loading spinner" />
      </div>
    );
  }
}

export default Spinner;
