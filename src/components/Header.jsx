import React, { useContext } from 'react';
import FeedbackContext from '../contexts/FeedbackContexts';

export default function Header(props) {
	const { feedback } = useContext(FeedbackContext);

	return (
		<header style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95' }}>
			<div className='container'>
				<h2>{props.text}</h2>
			</div>
		</header>
	);
}
