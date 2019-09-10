import React, { Component } from "react";
import * as $ from "jquery";

// export default class Chords extends Component {
//   //   constructor() {
//   //     super();
//   //     this.state = {
//   //       loadedSong: []
//   //     };
//   //   }

//   render() {
//     const { song } = this.props;
//     console.log(song[0]);
//     let displayChords;
//     if (song[0]) {
//       displayChords = (
//         <div>
//           <h1>{`${song[0].title} - ${song[0].authors[0].name}`}</h1>
//           <p>{song[0].body}</p>
//           {song[0].chords.map(chords => (
//             <img src={chords.image_url} alt={chords.name} />
//           ))}
//         </div>
//       );
//     } else {
//       displayChords = <div>Loading</div>;
//     }
//     return { displayChords };
//   }
// }

const Chords = props => {
  console.log(props);
  const { song } = this.props;
  let displayChords;

  if (song[0]) {
    displayChords = (
      <div>
        <h1>{`${song[0].title} - ${song[0].authors[0].name}`}</h1>
        <p>{song[0].body}</p>
        <div>{song[0].body_chords_html}</div>
        {song[0].chords.map(chords => (
          <img src={chords.image_url} alt={chords.name} />
        ))}
      </div>
    );
  } else {
    displayChords = <div>Loading</div>;
  }
  return { displayChords };

  //   return <div>Soon</div>;
};

export default Chords;
