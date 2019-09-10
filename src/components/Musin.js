import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri } from "../config";
import hash from "../hash";
// import Player from "./PlayerOld";
import Player from "./Player";
import Keyboard from "./Keyboard";
import logo from "../logo.svg";
import "../Musin.css";

import Leap from "leapjs";
import "../plugins/leap.screen-position";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }
  componentDidMount() {
    // Set token
    console.log(window.location.hash);
    console.log(hash);
    console.log(hash.access_token);
    let _token = hash.access_token;

    console.log(_token);

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
          <img src={logo} className="App-logo" alt="logo" />
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
