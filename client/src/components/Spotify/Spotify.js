import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import './Spotify.css';

const Spotify = ({ spotify }) => {
	return (
		<div className='spotify'>
			<div className='spotify-body'>
				<Sidebar />
				<Body spotify={spotify} />
			</div>
			<Footer spotify={spotify} />
		</div>
	);
};

export default Spotify;
