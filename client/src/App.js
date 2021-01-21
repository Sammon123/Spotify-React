import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';
import { getTokenFromUrl } from './spotify';
import Login from './components/Login/Login';
import Spotify from './components/Spotify/Spotify';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		let _token = hash.access_token;
		if (_token) {
			spotify.setAccessToken(_token);

			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.getPlaylist('37i9dQZEVXcOLRfAqi2lGS').then((response) => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				});
			});

			spotify.getMyTopArtists().then((response) => {
				dispatch({
					type: 'SET_TOP_ARTISTS',
					top_artists: response,
				});
			});

			dispatch({
				type: 'SET_SPOTIFY',
				spotify: spotify,
			});

			spotify.getMe().then((user) => {
				console.log(user);
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists,
				});
			});
		}
	}, [token, dispatch]);
	return (
		<div className='App'>
			{!token && <Login />}
			{token && <Spotify spotify={spotify} />}
		</div>
	);
}

export default App;
