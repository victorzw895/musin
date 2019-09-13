import React, { Component } from "react";
import Chords from "./Chords";
import SearchForm from "./SearchForm";
import SearchSong from "./SearchSong";
import * as $ from "jquery";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";

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
      totalStrong: 0,
      result: "Loading..."
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
    this.setState({ songId: id, songDuration: duration, songName, artistName });
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
        if (results.length !== 0) {
          this.setState({ result: "No Chords Available" });
        }
        this.getChordInfo(results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getChordInfo(results) {
    let chordlineStrongs = [];
    let totalStrong = $("#song-chords strong").length;

    $("#song-chords .chordline").map((i, chordline) => {
      chordlineStrongs.push($(chordline).find("strong").length);
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
      // console.log($(`.chordline:eq(${i})`).height());

      setTimeout(() => {
        scroll += $(`.chordline:eq(${i})`).height();
        $chords.scrollTop(scroll);
      }, durationCount);
    }
  }

  render() {
    const {
      songId,
      loadedSong,
      searchResults,
      songName,
      artistName,
      result
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
                <Chords
                  song={loadedSong}
                  songId={songId}
                  startScroll={this.startScroll}
                />
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