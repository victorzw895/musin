import React, { Component } from "react";
import SampleLibrary from "../Tonejs-Instruments";
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
    this.setState({
      instrument: SampleLibrary.load({
        instruments: "piano",
        baseUrl: "samples/"
      }).toMaster()
    });

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

  _handleMouseDown(e) {
    const { freq } = e.target.dataset;
    if (freq) {
      // e.preventDefault();
      this.state.instrument.triggerAttack(
        Tone.Frequency(freq, "midi").toNote()
      );
    }
  }

  _handleMouseUp(e) {
    const { freq } = e.target.dataset;
    if (freq) {
      // e.preventDefault();
      this.state.instrument.triggerRelease(
        Tone.Frequency(freq, "midi").toNote()
      );
    }
  }

  getFrequency(eKey, freq) {
    switch (eKey) {
      case "q":
        return freq;
      case "2":
        return (freq += 1);
      case "w":
        return (freq += 2);
      case "3":
        return (freq += 3);
      case "e":
        return (freq += 4);
      case "r":
        return (freq += 5);
      case "5":
        return (freq += 6);
      case "t":
        return (freq += 7);
      case "6":
        return (freq += 8);
      case "y":
        return (freq += 9);
      case "7":
        return (freq += 10);
      case "u":
        return (freq += 11);
      case "i":
        return (freq += 12);
      case "9":
        return (freq += 13);
      case "o":
        return (freq += 14);
      case "0":
        return (freq += 15);
      case "p":
        return (freq += 16);
      case "[":
        return (freq += 17);
      case "=":
        return (freq += 18);
      case "z":
        return (freq += 19);
      case "s":
        return (freq += 20);
      case "x":
        return (freq += 21);
      case "d":
        return (freq += 22);
      case "c":
        return (freq += 23);
      case "v":
        return (freq += 24);
      case "g":
        return (freq += 25);
      case "b":
        return (freq += 26);
      case "h":
        return (freq += 27);
      case "n":
        return (freq += 28);
      case "m":
        return (freq += 29);
      case "k":
        return (freq += 30);
      case ",":
        return (freq += 31);
      case "l":
        return (freq += 32);
      case ".":
        return (freq += 33);
      case ";":
        return (freq += 34);
      case "/":
        return (freq += 35);
      default:
        return;
    }
  }

  _handleKeyDown(e) {
    const { playingKeys, firstNote } = this.state;

    // Tone.Frequency(12, "midi").toNote() => C0
    if (e.key === "Tab") {
      e.preventDefault();
    }

    let note = this.getFrequency(e.key, firstNote);

    if (note && playingKeys.get(note) !== "pressed") {
      this.state.instrument.triggerAttack(
        Tone.Frequency(note, "midi").toNote()
      );
      this.setState(playingKeys.set(note, "pressed"));
      return;
    }
  }

  _handleKeyUp(e) {
    const { playingKeys, firstNote } = this.state;

    let note = this.getFrequency(e.key, firstNote);

    if (note && playingKeys.get(note) === "pressed") {
      this.state.instrument.triggerRelease(
        Tone.Frequency(note, "midi").toNote()
      );
      this.setState(playingKeys.set(note, ""));
      return;
    }
  }

  render() {
    const { playingKeys } = this.state;
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
              <li
                key={key.frequency}
                data-freq={key.frequency}
                className={`key ${
                  playingKeys.has(key.frequency)
                    ? playingKeys.get(key.frequency)
                    : ""
                }`}
              >
                {key.sharp ? (
                  <div
                    data-freq={key.frequency + 1}
                    className={`black-key ${
                      playingKeys.get(key.frequency + 1)
                        ? playingKeys.get(key.frequency + 1)
                        : ""
                    }`}
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
