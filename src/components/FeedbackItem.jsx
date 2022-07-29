import { FaTimes, FaEdit } from 'react-icons/fa';
import React, { useState, useContext } from 'react';
import Card from './shared/Card';
import FeedbackContext from '../contexts/FeedbackContexts';

export default function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card className='card' reverse={true}>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>

			<button onClick={() => editFeedback(item)} className='edit'>
				<FaEdit color='purple' />
			</button>

			<div className='text-display'>{item.text}</div>
		</Card>
	);
}
