import React, { Component } from "react";
import { Button, Segment } from "semantic-ui-react";

export default class Chords extends Component {
  render() {
    const { song, songId } = this.props;

    let iframe;
    if (songId !== "") {
      iframe = (
        <div>
          <Segment basic style={{ padding: "0" }}>
            <iframe
              src={`https://open.spotify.com/embed/track/${songId}`}
              title="player"
              id="music-player"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              tabIndex="-1"
            ></iframe>
            {/* <button onClick={this.props.startScroll}>Start Scroll</button> */}
          </Segment>
          <Button circular icon="caret down" onClick={this.props.startScroll}>
            Start Scroll
          </Button>
        </div>
      );
    }

    return (
      <div>
        {iframe}
        {song.length === 0 ? null : (
          <Segment style={{ width: "30vw", marginLeft: "9vw" }}>
            {song[0].chords.map(chords => (
              <img key={chords.code} src={chords.image_url} alt={chords.name} />
            ))}
          </Segment>
        )}
      </div>
    );
  }
}
