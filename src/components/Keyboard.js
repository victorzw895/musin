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
      playingKeys: new Map(),
      firstNote: 36
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
    let firstNote = this.state.firstNote;
    // C0 is tone firstNote note 12
    // i up to 25, 49, 61, 76, 88
    // 25 C to C // 15 white keys
    // 37 F to F // 22 white
    // 49 C to C // 29 white
    // 61 C to C // 36 white
    // 76 E to G // 45 white
    // 88 A to C // 52 white
    const keys = [];

    // finding sharp keys
    for (let i = 1; i <= 36; i++) {
      let hasSharp;
      let whiteKey;
      if (i % 12 === 1) {
        whiteKey = true;
        hasSharp = true;
      } else if (i % 12 === 3) {
        whiteKey = true;
        hasSharp = true;
      } else if (i % 12 === 5) {
        whiteKey = true;
      } else if (i % 12 === 6) {
        whiteKey = true;
        hasSharp = true;
      } else if (i % 12 === 8) {
        whiteKey = true;
        hasSharp = true;
      } else if (i % 12 === 10) {
        whiteKey = true;
        hasSharp = true;
      } else if (i % 12 === 0) {
        whiteKey = true;
      }

      if (whiteKey) {
        keys.push({
          sharp: hasSharp ? true : false,
          frequency: firstNote++
        });
      } else {
        firstNote++;
      }
    }

    this.setState({
      keys: keys
    });
  }

  //   _handleClick(e) {
  //     this.state.instrument.triggerAttack(Tone.Frequency(12, "midi").toNote());
  //   }

  _handleMouseDown(e) {
    const { freq } = e.target.dataset;
    console.log(freq);
    if (freq) {
      e.preventDefault();
      this.state.instrument.triggerAttack(
        Tone.Frequency(freq, "midi").toNote()
      );
    }
  }

  _handleMouseUp(e) {
    const { freq } = e.target.dataset;
    if (freq) {
      e.preventDefault();
      this.state.instrument.triggerRelease(
        Tone.Frequency(freq, "midi").toNote()
      );
    }
  }

  getFrequency(eKey, freq) {
    switch (eKey) {
      case "a":
        return freq;
      case "w":
        return (freq += 1);
      case "s":
        return (freq += 2);
      case "e":
        return (freq += 3);
      case "d":
        return (freq += 4);
      case "f":
        return (freq += 5);
      case "t":
        return (freq += 6);
      case "g":
        return (freq += 7);
      case "y":
        return (freq += 8);
      case "h":
        return (freq += 9);
      case "u":
        return (freq += 10);
      case "j":
        return (freq += 11);
      case "k":
        return (freq += 13);
      case "o":
        return (freq += 14);
      case "l":
        return (freq += 15);
      case "p":
        return (freq += 16);
      case ";":
        return (freq += 17);
      default:
        return;
    }
  }

  _handleKeyDown(e) {
    const { playingKeys, firstNote } = this.state;
    console.log(e.metaKey);
    console.log(e.key);
    console.log(e.altKey);
    console.log(playingKeys);
    console.log(playingKeys.get(e.key));

    // Tone.Frequency(12, "midi").toNote() => C0

    let note = this.getFrequency(e.key, firstNote);

    if (note && !playingKeys.has(note)) {
      this.state.instrument.triggerAttack(
        Tone.Frequency(note, "midi").toNote()
      );
      playingKeys.set(note, true);
      return;
    }
    console.log(this.getFrequency(e.key, firstNote));
  }

  _handleKeyUp(e) {
    const { playingKeys, firstNote } = this.state;

    let note = this.getFrequency(e.key, firstNote);

    if (note && playingKeys.has(note)) {
      this.state.instrument.triggerRelease(
        Tone.Frequency(note, "midi").toNote()
      );
      playingKeys.delete(note);
      return;
    }
    console.log(this.getFrequency(e.key, firstNote));
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
              <li key={key.frequency} data-freq={key.frequency} className="key">
                {key.sharp ? (
                  <div
                    data-freq={key.frequency + 1}
                    className="black-key"
                  ></div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
