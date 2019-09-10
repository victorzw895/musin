import React, { Component } from "react";
// import Chords from "./Chords";
import * as $ from "jquery";

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      songId: "",
      loadedSong: [],
      searchResults: []
    };
    this.selectSong = this.selectSong.bind(this);
    this.fetchChords = this.fetchChords.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
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

  selectSong(id, songName, artistName) {
    console.log(id);
    this.setState({ songId: id });
    this.fetchChords(songName, artistName);
  }

  fetchChords(songName, artistName) {
    const { token } = this.props;
    console.log(songName, artistName, token);
    $.ajax({
      url: `http://api.guitarparty.com/v2/songs/?query=${songName}`,
      type: "GET",
      headers: {
        "Guitarparty-Api-Key": "54e80a31a3197536fc6cfa1b61cd65f8ed39f4ab"
      },
      success: data => {
        console.log(data);
        const results = data.objects.filter(song =>
          song.authors.some(author => author.name === artistName)
        );
        console.log(results);
        this.setState({ loadedSong: results });
      }
    });
  }

  render() {
    const { songId, loadedSong, searchResults } = this.state;
    const { token } = this.props;
    let iframe;
    if (songId !== "") {
      iframe = (
        <iframe
          src={`https://open.spotify.com/embed/track/${songId}`}
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
    let displayChords;

    if (loadedSong.length !== 0) {
      displayChords = (
        <div>
          <h2>{`${loadedSong[0].title} - ${loadedSong[0].authors[0].name}`}</h2>
          <p
            id="song-chords"
            dangerouslySetInnerHTML={{
              __html: loadedSong[0].body_chords_html
              // .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            }}
          ></p>
          {/* {console.log(loadedSong[0].body)}
          {console.log(loadedSong[0].body.match(/\n/g) || [])} */}
          {loadedSong[0].chords.map(chords => (
            <img src={chords.image_url} alt={chords.name} />
          ))}
          {iframe}
        </div>
      );
    } else {
      displayChords = <div>Loading</div>;
    }
    return (
      <div>
        <SearchForm search={this.fetchSongs} />

        {songId !== "" && loadedSong.length !== 0 ? (
          displayChords
        ) : (
          // <Chords song={loadedSong} />
          <SearchSong
            token={token}
            loadSong={this.selectSong}
            searchResults={searchResults}
          />
        )}
      </div>
    );
  }
}

class SearchSong extends Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(id, songName, artistName) {
    this.props.loadSong(id, songName, artistName);
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <div>
          <ul id="list">
            {searchResults.map(song => (
              <li
                id={song.id}
                className="search-list"
                onClick={() =>
                  this._handleClick(song.id, song.name, song.artists[0].name)
                }
              >
                <img
                  className="featured"
                  src={song.album.images[2].url}
                  alt={song.album.name}
                />
                <p className="list-songs">{`${song.artists[0].name} - ${song.name}`}</p>
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
        <label>Search Song: </label>
        {/* <br /> */}
        <input
          type="text"
          placeholder="Real Name"
          onChange={this._handleChange}
        />
        {/* <br /> */}
        <button type="search">Search</button>
      </form>
    );
  }
}
