IMPROVISATION APP

# TODO

1. Keyboard keys CSS, highlight ones being pressed
2. Error handling / Validations.
   - If song search returns no songs
   - If selected song has no chords
   - If song chords are not in original key
3. Add Original key info, add transposer
4. Get new chord images from different API
5. Consider not using Spotify iframe and build own player.
   - To sync play button with autoscroll
6. Overall CSS
7. Leap Motion

# Challenges

### 1. Using Leap Motion Controller, how to add plugins to React

### 2. Using chord API is very restricting and limiting.

- There is currently one API from GuitarParty that is able to return chord information about any song, as long as it exists in their database.
- Downside is, all the chords/progression for every song has a different format based on which user submitted the chord progression.
- This makes it difficult to ensure that each song has the exact correct chords, specially when they have been transposed to simpler chords.
- GuitarParty API does not consistently return whether or not the chords returned are in the original key of the song
- Partial Solution: Add a transposer

### 3. Synching the chord progression from GuitarAPI with Spotify

- Currently GuitarAPI returns either all the chords used or the lyrics with the chord progression/changes placed next the lyric, where the chords change.
- Due to each song having a different tempo, rythm, length to each note or chord being played at a time, it is extremelly difficult to have it match up to the duration of the song.
- Possible that another library is required to listen to the song and return the lyrics, in order to match the lyrics with the chords provided from GuitarAPI.
- OR Possible if api returns each chord and how long each is played for

### 4. Use Leap Motion Controller to play 2D piano

- Leap Motion Controller has 3 axis (x, y, z) to return position and depth, allowing more accuracy.
- Translating its position to a 2D environment is not too complicated, however detecting whether a finger is moving downwards to press on a piano key is where the challenge lies.
- Need to detect all fingers at all times

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
