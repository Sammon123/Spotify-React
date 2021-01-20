import React from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../../StateProvider';
import './Header.css';

const Header = () => {
	const [{ user }] = useStateValue();
	return (
		<div className='header'>
			<div className='header-left'>
				<SearchIcon />
				<input type='text' placeholder='Search for Artists, Songs or Albums' />
			</div>
			<div className='header-right'>
				<Avatar src={user?.images[0]?.url} alt={user?.display_name} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
