import React, { Component } from "react";
import { Button, Segment, Icon } from "semantic-ui-react";

export default class SpotifyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "",
      artistName: "",
      albumName: "",
      albumImage: "",
      playing: false,
      position: 0,
      duration: 0,
      uri: "",
      clicked: false
    };

    // this.createEventHandlers = this.createEventHandlers.bind(this);
    this.onPlayClick = this.onPlayClick.bind(this);
  }

  componentDidMount() {
    const { token, uri } = this.props;
    if (token !== null) {
      this.setState({ loggedIn: true, token: token, uri: uri });
    }
    this.checkForPlayer(token);
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.uri !== prevState.uri) {
      this.setState({ clicked: false });
    }
  }

  checkForPlayer(token) {
    if (window.Spotify !== null) {
      this.player = new window.Spotify.Player({
        name: "Victor's Spotify Player",
        getOAuthToken: cb => {
          cb(token);
        }
      });
      this.createEventHandlers();

      // finally, connect!
      this.player.connect();
    }
  }

  createEventHandlers() {
    this.player.on("initialization_error", e => {
      console.error(e);
    });
    this.player.on("authentication_error", e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    this.player.on("account_error", e => {
      console.error(e);
    });
    this.player.on("playback_error", e => {
      console.error(e);
    });

    this.player.on("player_state_changed", state => {
      if (!this.state.clicked) {
        this.player.pause();
      }
      this.onStateChanged(state);
    });

    // Ready
    this.player.on("ready", async data => {
      let { device_id } = data;
      console.log("Let the music play on!");
      await this.setState({ deviceId: device_id });
      await this.transferPlaybackHere(device_id);
    });
  }

  onStateChanged(state) {
    console.log(state);
    // if we're no longer listening to music, we'll get a null state.
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const albumImage = currentTrack.album.images[1].url;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        albumImage,
        artistName,
        playing
      });
    }
  }

  transferPlaybackHere(deviceId) {
    const { token, uri } = this.state;
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      // fetch(`"https://api.spotify.com/v1/me/player"`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uris: [uri]
      })
    }).then(response => {
      console.log(response);
    });
  }

  onPlayClick() {
    this.player.togglePlay();
    this.setState({ clicked: true });
    this.props.startScroll();
    // this.player.pause();
  }

  onStopClick() {
    this.player.nextTrack();
  }

  render() {
    const {
      artistName,
      trackName,
      albumName,
      albumImage,
      error,
      position,
      duration,
      playing,
      clicked
    } = this.state;

    return (
      <Segment inverted>
        <div>
          <h2>Now Playing</h2>
        </div>
        {error && <p>Error: {error}</p>}
        {artistName ? (
          <div>
            <img src={albumImage} alt={albumName} />
            <p>Artist: {artistName}</p>
            <p>Track: {trackName}</p>
            <p>Album: {albumName}</p>
            <Button.Group icon>
              <Button icon onClick={() => this.onPlayClick()}>
                {playing && clicked ? (
                  <Icon name="pause" />
                ) : (
                  <Icon name="play" />
                )}
              </Button>
              <Button onClick={() => this.onStopClick()}>
                <Icon name="stop" />
              </Button>
            </Button.Group>
          </div>
        ) : (
          "Loading..."
        )}
      </Segment>
    );
  }
}
