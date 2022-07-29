import React, { useContext } from 'react';
import FeedbackContext from '../contexts/FeedbackContexts';

export default function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);

	let average =
		feedback.reduce((x, y) => {
			return x + y.rating;
		}, 0) / feedback.length;

	average = average.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
		</div>
	);
}
