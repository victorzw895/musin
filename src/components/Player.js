import React, { Component } from "react";
// import Chords from "./Chords";
import * as $ from "jquery";

// DATABASE REQUESTS
const Api = require("../lib/Api.js");

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      songId: "",
      loadedSong: [],
      searchResults: [],
      scroll: 0,
      currentTime: "",
      strongPerChordline: [],
      songDuration: 0
    };
    this.selectSong = this.selectSong.bind(this);
    this.fetchChords = this.fetchChords.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.startScroll = this.startScroll.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().getSeconds()
      });
      console.log("run");
    }, 1000);
  }

  fetchSongs(query) {
    Api.getSpotifySongs(query, this.props.token).then(response => {
      this.setState({ songId: "", searchResults: response.data.tracks.items });
      console.log(response.data);
    });
  }

  selectSong(id, songName, artistName, duration) {
    console.log(id);
    this.setState({ songId: id, songDuration: duration / 1000 });
    this.fetchChords(id, songName, artistName);
  }

  fetchChords(id, songName, artistName) {
    const { token } = this.props;
    this.setState({ loadedSong: [] });

    console.log(songName, artistName, token);
    Api.getAudioInfo(id, token).then(response => {
      console.log(response);
      this.setState({ songDuration: response.data.track.duration });
    });
    Api.getSongChords(songName).then(response => {
      const results = response.data.objects.filter(song =>
        song.authors.some(author => author.name === artistName)
      );
      console.log(results);
      this.setState({ loadedSong: results });
      this.getChordInfo(results[0]);
    });
  }

  getChordInfo(results) {
    let chordline = $("#song-chords").children();

    let chordlineStrongs = [];
    let strongCount = 0;
    chordline.each(i => {
      strongCount = 0;
      $(chordline[i].children).each(b => {
        $(chordline[i].children[b].children).each(c => {
          if ($(chordline[i].children[b].children[c])) {
            strongCount += 1;
          }
        });
      });
      chordlineStrongs.push(strongCount);
    });
    this.setState({ strongPerChordline: chordlineStrongs });
  }

  startScroll() {
    const { currentTime, strongPerChordline, songDuration } = this.state;
    let $chords = $("#song-chords");

    let durationPerChordline = [];
    let scroll = this.state.scroll + 20;

    for (let i = 0; i < strongPerChordline.length; i++) {
      durationPerChordline.push(
        (songDuration / strongPerChordline.length) * strongPerChordline[i]
      );
      // setTimeout(() => {
      //   // this.setState({
      //   //   scroll: (scroll += 20)
      //   // });
      //   $chords.scrollTop(scroll);
      // }, 1000);
    }
    console.log(durationPerChordline);

    // let scroll = this.state.scroll + 20;
    // const intervalId = setInterval(() => {
    //   this.setState({
    //     scroll: (scroll += 20)
    //   });
    //   if ($chords.scrollTop + $chords.clientHeight === $chords.scrollHeight) {
    //     clearInterval(intervalId);
    //   }
    //   $chords.scrollTop(scroll);
    // }, 1000);

    // console.log($("#song-chords").scrollTop());
    // this.setState({ scroll: scroll });
    // console.log(scroll);
  }

  render() {
    const { songId, loadedSong, searchResults } = this.state;
    const { token } = this.props;
    let iframe;
    if (songId !== "") {
      iframe = (
        <div>
          <iframe
            src={`https://open.spotify.com/embed/track/${songId}`}
            title="player"
            id="music-player"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            tabindex="-1"
          ></iframe>
          <button onClick={this.startScroll}>Start Scroll</button>
        </div>
      );
    }
    let displayChords;

    if (loadedSong.length !== 0) {
      // console.log($(loadedSong[0].body_chords_html).find("strong"));

      displayChords = (
        <div>
          <div id="left-side">
            <SearchForm search={this.fetchSongs} />
            <h2>{`${loadedSong[0].title} - ${loadedSong[0].authors[0].name}`}</h2>
            {iframe}
            {loadedSong[0].chords.map(chords => (
              <img src={chords.image_url} alt={chords.name} />
            ))}
          </div>
          <div
            id="song-chords"
            dangerouslySetInnerHTML={{
              __html: loadedSong[0].body_chords_html
            }}
          ></div>
        </div>
      );
    }
    return (
      <div>
        {songId !== "" && loadedSong.length !== 0 ? (
          displayChords
        ) : (
          // <Chords song={loadedSong} />
          <div>
            <SearchForm search={this.fetchSongs} />
            <SearchSong
              token={token}
              loadSong={this.selectSong}
              searchResults={searchResults}
            />
          </div>
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

  _handleClick(id, songName, artistName, duration) {
    this.props.loadSong(id, songName, artistName, duration);
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
                  this._handleClick(
                    song.id,
                    song.name,
                    song.artists[0].name,
                    song.duration_ms
                  )
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
          autoFocus
          tabindex="-1"
        />
        {/* <br /> */}
        <button type="search" tabindex="-1">
          Search
        </button>
      </form>
    );
  }
}
