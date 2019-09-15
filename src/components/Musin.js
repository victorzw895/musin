import React, { Component } from "react";

import { authEndpoint, clientId, redirectUri } from "../lib/config";
import hash from "../hash";

// MUSIC PLAYER, CHORDS, KEYBOARD
import Player from "./Player";
import Keyboard from "./Keyboard";
import "../Musin.css";

// LEAP MOTION CONTROLLER
import Leap from "leapjs";
import "../plugins/leap.screen-position";

// SEMANTIC UI CSS
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }

    Leap.loop(function(frame) {
      console.log(frame.hands.length);
    });

    Leap.loop({
      hand: function(hand) {
        console.log(hand.screenPosition());
      }
    }).use("screenPosition");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && <Player token={this.state.token} />}
        </header>
        <Keyboard />
      </div>
    );
  }
}

export default App;
