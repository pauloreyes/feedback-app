import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './shared/RatingSelect';
import FeedbackContext from '../contexts/FeedbackContexts';

export default function FeedbackForm() {
	const { feedback, handleAdd, feedbackEdit, updateFeedback, setFeedbackEdit, setSelected } =
		useContext(FeedbackContext);
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	function handleTextChange(e) {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim(' ').length <= 10) {
			setMessage('Text must be at least 10 characters long');
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (text.trim().length) {
			const newFeedback = {
				id: feedback.length + 1,
				text,
				rating,
			};
			if (feedbackEdit.edit === true) {
				const updatedFeedback = {
					id: feedbackEdit.item.id,
					text,
					rating,
				};
				updateFeedback(feedbackEdit.item.id, updatedFeedback);
				setText('');
				setRating(10);
				setFeedbackEdit({
					item: {},
					edit: false,
				});
			} else {
				handleAdd(newFeedback);
				setText('');
				setRating(10);
				setSelected(10);
			}
		}
	}

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>

					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}
