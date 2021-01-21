import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Body.css';
import { useStateValue } from '../../StateProvider';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import './Body.css';

const Body = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useStateValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: `spotify:playlist:37i9dQZEVXcOLRfAqi2lGS`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((res) => {
					dispatch({
						type: 'SET_ITEM',
						item: res.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				console.log(res);
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};
	return (
		<div className='body'>
			<Header spotify={spotify} />
			<div className='body-info'>
				<img src={discover_weekly?.images[0]?.url} alt='' />
				<div className='body-infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className='body-songs'>
				<div className='body-icon'>
					<PlayCircleFilledIcon
						className='body-shuffle'
						onClick={playPlaylist}
					/>
					<FavoriteIcon fontSize='large' />
					<MoreHorizIcon />
				</div>
				{/* list of songs */}
				{discover_weekly?.tracks?.items?.map((item) => (
					<SongRow playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
