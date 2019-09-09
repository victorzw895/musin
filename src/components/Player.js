import React, { Component } from "react";
import * as $ from "jquery";

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      songId: ""
    };
    this.selectSong = this.selectSong.bind(this);
  }

  selectSong(id) {
    console.log(id);
    this.setState({ songId: id });
  }

  render() {
    const { songId } = this.state;
    let iframe;
    if (songId !== "") {
      iframe = (
        <iframe
          src={`https://open.spotify.com/embed/track/${this.state.songId}`}
          title="player"
          id="music-player"
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      );
    }
    return (
      <div>
        <SearchSong token={this.props.token} loadSong={this.selectSong} />
        {iframe}
      </div>
    );
  }
}

class SearchSong extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.fetchSongs = this.fetchSongs.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  fetchSongs(query) {
    query = query.replace(" ", "%20");
    console.log(query);
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=${query}&type=track`,
      type: "GET",
      Accept: "application/json",
      "Content-Type": "application/json",
      headers: { Authorization: "Bearer " + this.props.token },
      success: data => {
        console.log(data);
        this.setState({ searchResults: data.tracks.items });
      }
    });
  }

  _handleClick(id) {
    this.props.loadSong(id);
  }

  render() {
    return (
      <div>
        <SearchForm search={this.fetchSongs} />
        <div id="list">
          <ul>
            {this.state.searchResults.map(song => (
              <li id={song.id} onClick={() => this._handleClick(song.id)}>
                {song.artists[0].name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class SearchForm extends Component {
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
        <label>Search Song</label>
        <input
          type="text"
          placeholder="Real Name"
          onChange={this._handleChange}
        />
        <button type="search">Search</button>
      </form>
    );
  }
}
