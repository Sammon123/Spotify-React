import React from 'react';
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

const Footer = () => {
	const [{ item, playing }, dispatch] = useStateValue();
	return (
		<div className='footer'>
			<div className='footer-left'>
				<img className='footer-album' src='' alt='' />
				<div className='footer-songInfo'>
					<h4>No song is playing</h4>
				</div>
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
