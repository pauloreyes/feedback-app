import React, { createContext, useState } from 'react';
import FeedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [selected, setSelected] = useState(10);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const deleteFeedback = (id) => {
		setFeedback(feedback.filter((x) => x.id !== id));
	};

	function handleAdd(newFeedback) {
		setFeedback([newFeedback, ...feedback]);
	}

	function editFeedback(item) {
		setFeedbackEdit({
			item,
			edit: true,
		});
	}

	function updateFeedback(id, updatedFeedback) {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updatedFeedback } : item))
		);
	}

	const value = {
		feedback,
		deleteFeedback,
		handleAdd,
		editFeedback,
		feedbackEdit,
		updateFeedback,
		setFeedbackEdit,
		selected,
		setSelected,
	};

	return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
