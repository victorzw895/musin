import React, { Component } from "react";

export default class SearchSong extends Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(id, songName, artistName, duration) {
    this.props.loadSong(id, songName, artistName, duration);
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <div>
          <ul id="list">
            {searchResults.map(song => (
              <li
                id={song.id}
                className="search-list"
                onClick={() =>
                  this._handleClick(
                    song.id,
                    song.name,
                    song.artists[0].name,
                    song.duration_ms
                  )
                }
              >
                <img
                  className="featured"
                  src={song.album.images[2].url}
                  alt={song.album.name}
                />
                <p className="list-songs">{`${song.artists[0].name} - ${song.name}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
