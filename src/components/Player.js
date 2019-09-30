import React, { Component } from "react";
import Chords from "./Chords";
import SearchForm from "./SearchForm";
import SearchSong from "./SearchSong";
import * as $ from "jquery";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";
import SpotifyPlayer from "./SpotifyPlayer";

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
      chordsPerChordline: [],
      songDuration: 0,
      totalChords: 0,
      result: "Loading...",
      uri: "",
      timeouts: []
    };
    this.selectSong = this.selectSong.bind(this);
    this.fetchChords = this.fetchChords.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.startScroll = this.startScroll.bind(this);
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     currentTime: new Date().getSeconds()
    //   });
    // }, 1000);
  }

  fetchSongs(query) {
    Api.getSpotifySongs(query, this.props.token).then(response => {
      this.setState({ songId: "", searchResults: response.data.tracks.items });
    });
  }

  selectSong(id, songName, artistName, duration, uri) {
    this.setState({
      songId: id,
      songDuration: duration,
      songName,
      artistName,
      uri
    });
    this.fetchChords(songName, artistName);
  }

  fetchChords(songName, artistName) {
    this.setState({ loadedSong: [] });

    // Api.getAudioInfo(id, token).then(response => {
    //   console.log(response);
    //   this.setState({ songDuration: response.data.track.duration });
    // });
    Api.getSongChords(songName)
      .then(response => {
        const results = response.data.objects.filter(song =>
          song.authors.some(author => author.name === artistName)
        );
        this.setState({ loadedSong: results });
        console.log(results);
        if (results.length === 0) {
          this.setState({ result: "No Chords Available" });
        }
        this.getChordInfo(results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getChordInfo(results) {
    let lineChords = [];
    let totalChords = $("#song-chords strong").length;

    $("#song-chords .chordline").map((i, chordline) => {
      lineChords.push($(chordline).find("strong").length);
    });
    this.setState({
      chordsPerChordline: lineChords,
      totalChords: totalChords
    });
  }

  async startScroll() {
    const {
      chordsPerChordline,
      songDuration,
      totalChords,
      timeouts
    } = this.state;
    let $chords = $("#song-chords");

    let durationPerChordline = [];
    let scroll = 0;
    let durationCount = 0;

    if (timeouts.length > 0) {
      timeouts.forEach(clearTimeout);
      // for (let i = 0; i < timeouts.length; i++) {
      //   clearTimeout(timeouts[i]);
      //   console.log("keeping top");
      $chords.scrollTop(0);
      this.setState({ timeouts: [] });
      // }
      // await timeouts.forEach(clearTimeout);
    } else {
      for (let i = 0; i < chordsPerChordline.length; i++) {
        let duration = (songDuration / totalChords) * chordsPerChordline[i];
        durationPerChordline.push(duration);
        durationCount += duration;
        // console.log($(`.chordline:eq(${i})`).height());

        timeouts.push(
          setTimeout(() => {
            scroll += $(`.chordline:eq(${i})`).height();
            $chords.scrollTop(scroll);
          }, durationCount)
        );
      }
    }
  }

  render() {
    const {
      songId,
      loadedSong,
      searchResults,
      songName,
      artistName,
      result,
      uri
    } = this.state;
    const { token } = this.props;

    let displayChords;

    if (songId !== "") {
      displayChords = (
        <Segment
          inverted
          placeholder
          size="massive"
          style={{ margin: "0 2em", width: "100vw", maxHeight: "70vh" }}
        >
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical />
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <SearchForm search={this.fetchSongs} />
                <SpotifyPlayer
                  token={token}
                  uri={uri}
                  startScroll={this.startScroll}
                />
                {/* <Chords
                  song={loadedSong}
                  songId={songId}
                  startScroll={this.startScroll}
                /> */}
              </Grid.Column>

              <Grid.Column>
                <Header as="h2" dividing inverted>
                  {`${songName} - ${artistName}`}
                </Header>
                {loadedSong.length !== 0 ? (
                  <div
                    id="song-chords"
                    dangerouslySetInnerHTML={{
                      __html: loadedSong[0].body_chords_html
                    }}
                  ></div>
                ) : (
                  <div id="song-chords">{result}</div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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
