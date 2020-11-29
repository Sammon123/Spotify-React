export const authEndPoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://localhost:3000';
const clientId = '878ad3e7edf44a4f84185b1484251077';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};
