import React, { Component } from "react";
import SampleLibrary from "../Tonejs-Instruments";
import Nexus from "nexusui";
import NProgress from "nprogress";
import Tone from "tone";
import * as $ from "jquery";

export default class Keyboard extends Component {
  constructor() {
    super();
    this.state = {
      instrument: "",
      keys: [],
      setKeys: false,
      playingKeys: []
    };
    // this._handleClick = this._handleClick.bind(this);
    this._handleMouseDown = this._handleMouseDown.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this.addKeys = this.addKeys.bind(this);
  }
  componentDidMount() {
    // KEYBOARD ////////////////////////////////////////////////////////////////////////
    // NProgress is for loading bar ////////////////////
    NProgress.start();
    this.setState({
      instrument: SampleLibrary.load({
        instruments: "piano",
        baseUrl: "samples/"
      }).toMaster()
    });

    // console.log("running");
    Tone.Buffer.on("load", function() {
      $("#container").css({ display: "block" });
      $("#loading").css({ display: "none" });
      // play instrument sound
      //   console.log("loaded");
      //   this.state.instrument.toMaster();
      //   this.state.instrument.triggerAttack(Tone.Frequency(12, "midi").toNote());
    });
    if (!this.setKeys) {
      this.addKeys();
    }
  }

  addKeys() {
    this.setState({ setKeys: true });
    let j = 2;
    // i up to 25, 49, 61, 76, 88
    // 25 C to C // 15 white keys
    // 37 F to F // 22 white
    // 49 C to C // 29 white
    // 61 C to C // 36 white
    // 76 E to G // 45 white
    // 88 A to C // 52 white
    const keys = [];
    for (let i = 1; i <= 21; i++) {
      let key;
      let hasSharp;
      if (i % 7 === 1) {
        key = "C";
        hasSharp = true;
      } else if (i % 7 === 2) {
        key = "D";
        hasSharp = true;
      } else if (i % 7 === 3) {
        key = "E";
      } else if (i % 7 === 4) {
        key = "F";
        hasSharp = true;
      } else if (i % 7 === 5) {
        key = "G";
        hasSharp = true;
      } else if (i % 7 === 6) {
        key = "A";
        hasSharp = true;
      } else if (i % 7 === 0) {
        key = "B";
        j += 1;
      }

      keys.push({
        note: `${key}${j}`,
        sharp: hasSharp ? `${key}#${j}` : null
      });
    }
    this.setState({
      keys: keys
    });
  }

  //   _handleClick(e) {
  //     this.state.instrument.triggerAttack(Tone.Frequency(12, "midi").toNote());
  //   }

  _handleMouseDown(e) {
    if (e.target.dataset.note) {
      e.preventDefault();
      this.state.instrument.triggerAttack(e.target.dataset.note);
    }
  }

  _handleMouseUp(e) {
    if (e.target.dataset.note) {
      e.preventDefault();
      this.state.instrument.triggerRelease(e.target.dataset.note);
    }
  }

  _handleKeyDown(e) {
    console.log(e.metaKey);
    console.log(e.key);
    console.log(e.altKey);
    switch (e.key) {
      case "a":
        //   this.setState({playingKeys: })
        return this.state.instrument.triggerAttack("C2");
      default:
        return;
    }
  }

  _handleKeyUp(e) {
    switch (e.key) {
      case "a":
        return this.state.instrument.triggerRelease("C2");
      default:
        return;
    }
  }

  render() {
    return (
      <div id="content">
        <h3 id="loading">Loading...</h3>

        <div id="container">
          <ul
            id="keyboard"
            onMouseDown={this._handleMouseDown}
            onMouseUp={this._handleMouseUp}
            onKeyDown={this._handleKeyDown}
            onKeyUp={this._handleKeyUp}
            tabIndex="0"
          >
            {this.state.keys.map(key => (
              <li data-note={key.note} className="key">
                {key.sharp ? (
                  <div data-note={key.sharp} className="black-key">
                    f
                  </div>
                ) : null}
                a
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
