import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		let _token = hash.access_token;
		if (_token) {
			spotify.setAccessToken(_token);
		}
	}, []);
	return (
		<div className='App'>
			<h1>Spotify-React</h1>
		</div>
	);
}

export default App;
