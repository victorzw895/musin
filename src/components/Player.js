import React, { Component } from "react";
import Chords from "./Chords";
import SearchForm from "./SearchForm";
import SearchSong from "./SearchSong";
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
      currentTime: "",
      strongPerChordline: [],
      songDuration: 0,
      totalStrong: 0
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
    }, 1000);
  }

  fetchSongs(query) {
    Api.getSpotifySongs(query, this.props.token).then(response => {
      this.setState({ songId: "", searchResults: response.data.tracks.items });
    });
  }

  selectSong(id, songName, artistName, duration) {
    console.log(id);
    console.log(duration, "in ms");
    this.setState({ songId: id, songDuration: duration });
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
    Api.getSongChords(songName)
      .then(response => {
        const results = response.data.objects.filter(song =>
          song.authors.some(author => author.name === artistName)
        );
        this.setState({ loadedSong: results });
        this.getChordInfo(results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getChordInfo(results) {
    let chordline = $("#song-chords").children();

    let chordlineStrongs = [];
    let totalStrong = 0;
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
      totalStrong += strongCount;
    });
    this.setState({
      strongPerChordline: chordlineStrongs,
      totalStrong: totalStrong
    });
  }

  startScroll() {
    const { strongPerChordline, songDuration, totalStrong } = this.state;
    let $chords = $("#song-chords");

    let durationPerChordline = [];
    let scroll = 0;
    let durationCount = 0;

    for (let i = 0; i < strongPerChordline.length; i++) {
      let duration = (songDuration / totalStrong) * strongPerChordline[i];
      durationPerChordline.push(duration);
      durationCount += duration;

      setTimeout(() => {
        scroll += $(`.chordline:eq(${i})`).height();
        $chords.scrollTop(scroll);
      }, durationCount);
    }
  }

  render() {
    const { songId, loadedSong, searchResults } = this.state;
    const { token } = this.props;

    let displayChords;

    if (songId !== "" && loadedSong.length !== 0) {
      // console.log($(loadedSong[0].body_chords_html).find("strong"));
      displayChords = (
        <div>
          <div id="left-side">
            <SearchForm search={this.fetchSongs} />
            <Chords song={loadedSong[0]} songId={songId} />
          </div>
          <div
            id="song-chords"
            dangerouslySetInnerHTML={{
              __html: loadedSong[0].body_chords_html
            }}
          ></div>
        </div>
      );
    } else {
      displayChords = (
        <div>
          <SearchForm search={this.fetchSongs} />
          <SearchSong
            token={token}
            loadSong={this.selectSong}
            searchResults={searchResults}
          />
        </div>
      );
    }
    return <div>{displayChords}</div>;
  }
}
