import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

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
      <List
        animated
        divided
        inverted
        selection
        verticalAlign="middle"
        style={{
          overflow: "auto",
          maxHeight: "50vh",
          width: "55vw",
          textAlign: "start"
        }}
      >
        {searchResults.map(song => (
          <List.Item
            key={song.id}
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
            <Image
              avatar
              size="tiny"
              verticalAlign="middle"
              src={song.album.images[2].url}
              alt={song.album.name}
            />
            <List.Content>
              <List.Header>{song.name}</List.Header>
              <List.Description>{song.artists[0].name}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}
