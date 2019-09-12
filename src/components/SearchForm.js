import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      songQuery: null
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { songQuery } = this.state;
    this.props.search(songQuery);
  }

  _handleChange(e) {
    this.setState({ songQuery: e.target.value });
  }

  render() {
    return (
      <form id="search-song" onSubmit={this._handleSubmit}>
        <label>Search Song: </label>
        {/* <br /> */}
        <input
          type="text"
          placeholder="Real Name"
          onChange={this._handleChange}
          autoFocus
          tabIndex="-1"
        />
        {/* <br /> */}
        <button type="search" tabIndex="-1">
          Search
        </button>
      </form>
    );
  }
}
