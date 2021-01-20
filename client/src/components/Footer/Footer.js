import React, { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import './Footer.css';

const Footer = ({ spotify }) => {
	const [{ item, playing }, dispatch] = useStateValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((res) => {
			console.log(res);

			dispatch({
				type: 'SET_PLAYING',
				playing: res.is_playing,
			});

			dispatch({
				type: 'SET_ITEM',
				item: res.item,
			});
		});
	}, [spotify, dispatch]);
	return (
		<div className='footer'>
			<div className='footer-left'>
				<img
					className='footer-album'
					src={item?.item?.album?.images[0]?.url || item?.album?.images[0]?.url}
					alt={item?.name}
				/>
				{item ? (
					<div className='footer-songInfo'>
						<h4>{item?.item?.name || item?.name}</h4>
						<p>
							{item?.artists?.map((artist) => artist?.name).join(', ') ||
								item?.item?.artists.map((artist) => artist?.name).join(', ')}
						</p>
					</div>
				) : (
					<div className='footer-songInfo'>
						<h4>No song is playing</h4>
					</div>
				)}
			</div>
			<div className='footer-center'>
				<ShuffleIcon className='footer-green' />
				<SkipPreviousIcon className='footer-icon' />
				<PlayCircleOutlineIcon className='footer-icon' fontSize='large' />
				<SkipNextIcon className='footer-icon' />
				<RepeatIcon className='footer-green' />
			</div>
			<div className='footer-right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
