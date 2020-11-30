export const initialState = {
	user: null,
	token: null,
	// 'BQDWXm8n19RpU72JNUoxgSCdQO02Vy2sesPimCwpjpCDLVHeDhhtPhthLm2WuuG_LviIleiGilOGDXCnu77XlbFCf6fMZ0YRMtB9-cd6_hvSNi-6SiubtkBdFW61rxAFxuZx5saSdFxEVykmvcfJLXWAQvJhtd7K',
	playlists: [],
};

export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};
