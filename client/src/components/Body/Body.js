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
	return (
		<div className='body'>
			<Header spotify={spotify} />
			<div className='body-info'>
				<img src='' alt='' />
				<div className='body-infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className='body-songs'>
				<div className='body-icon'>
					<PlayCircleFilledIcon className='body-shuffle' />
					<FavoriteIcon fontSize='large' />
					<MoreHorizIcon />
				</div>
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
};

export default Body;
