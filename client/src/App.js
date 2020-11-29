import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';
import { getTokenFromUrl } from './spotify';
import Login from './components/Login/Login';
import Spotify from './components/Spotify/Spotify';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token, user }, dispatch] = useStateValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		let _token = hash.access_token;
		if (_token) {
			spotify.setAccessToken(_token);
		}
		dispatch({
			type: 'SET_TOKEN',
			token: _token,
		});

		spotify.getMe().then((user) => {
			dispatch({
				type: 'SET_USER',
				user: user,
			});
		});
	}, [token, dispatch]);
	return <div className='App'>{token ? <Spotify /> : <Login />}</div>;
}

export default App;
