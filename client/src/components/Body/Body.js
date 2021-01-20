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
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
						consequuntur dolores libero, reiciendis eveniet explicabo fuga alias
						voluptate odio quibusdam animi, odit amet minus iure perferendis,
						enim laborum facere reprehenderit.
					</p>
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
