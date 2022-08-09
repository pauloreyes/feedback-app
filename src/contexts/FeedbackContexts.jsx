import React, { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/feedbackData';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);
	const [selected, setSelected] = useState(10);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	const fetchFeedback = async () => {
		const response = await fetch(`/feedback?_sort=id&_order=desc`);
		const data = await response.json();
		setFeedback(data);
		setIsLoading(false);
	};

	const deleteFeedback = async (id) => {
		await fetch(`/feedback/${id}`, { method: 'DELETE' });
		setFeedback(feedback.filter((x) => x.id !== id));
	};

	const handleAdd = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		});
		const data = await response.json();
		setFeedback([data, ...feedback]);
	};

	function editFeedback(item) {
		setFeedbackEdit({
			item,
			edit: true,
		});
	}

	async function updateFeedback(id, updatedFeedback) {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedFeedback),
		});

		const data = await response.json();

		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
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
		isLoading,
	};

	return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
