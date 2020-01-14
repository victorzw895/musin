import React, { Component, useState, useEffect } from "react";

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

const Musin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    Leap.loop(function(frame) {
      console.log(frame.hands.length);
    });

    Leap.loop({
      hand: function(hand) {
        console.log(hand.screenPosition());
      }
    }).use("screenPosition");
  });

  return (
    <div className="App">
      <header className="App-header">
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`}
          >
            Login to Spotify
          </a>
        )}
        {token && <Player token={token} />}
      </header>
      <Keyboard />
    </div>
  );
};

export default Musin;
