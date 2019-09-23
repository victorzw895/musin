// import * as $ from "jquery";

let axios = require("axios");

let spotifyURL = `https://api.spotify.com/v1/`;
let guitarPartyURL = `http://api.guitarparty.com/v2/songs/`;

const guitarKey = process.env.REACT_APP_GUITAR_API_KEY;

module.exports = {
  getSpotifySongs: function(query, token) {
    return axios({
      method: "get",
      url: spotifyURL + "search",
      Accept: "application/json",
      "Content-Type": "application/json",
      headers: { Authorization: "Bearer " + token },
      params: { q: query, type: "track" }
    });
  },
  getSongChords: function(songName) {
    return axios({
      method: "get",
      url: guitarPartyURL,
      headers: {
        "Guitarparty-Api-Key": guitarKey
      },
      params: { query: songName }
    });
  },
  getAudioInfo: function(songId, token) {
    return axios({
      method: "get",
      url: `${spotifyURL}audio-analysis/${songId}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      headers: { Authorization: "Bearer " + token }
    });
  }
};
