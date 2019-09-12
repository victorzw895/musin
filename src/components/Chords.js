import React, { Component } from "react";
import * as $ from "jquery";

export default class Chords extends Component {
  render() {
    const { song, songId } = this.props;

    let iframe;
    if (songId !== "") {
      iframe = (
        <div>
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
          <button onClick={this.startScroll}>Start Scroll</button>
        </div>
      );
    }

    return (
      <div>
        <h2>{`${song.title} - ${song.authors[0].name}`}</h2>
        {iframe}
        {song.chords.map(chords => (
          <img src={chords.image_url} alt={chords.name} />
        ))}
      </div>
    );
  }
}

// const Chords = () => {
//   const { song, songId } = this.props;

//   let iframe;
//   if (songId !== "") {
//     iframe = (
//       <div>
//         <iframe
//           src={`https://open.spotify.com/embed/track/${songId}`}
//           title="player"
//           id="music-player"
//           width="300"
//           height="80"
//           frameborder="0"
//           allowtransparency="true"
//           allow="encrypted-media"
//           tabIndex="-1"
//         ></iframe>
//         <button onClick={this.startScroll}>Start Scroll</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>{`${song.title} - ${song.authors[0].name}`}</h2>;{iframe}
//       {song.chords.map(chords => (
//         <img src={chords.image_url} alt={chords.name} />
//       ))}
//     </div>
//   );
// };

// export default Chords;
