import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../contexts/FeedbackContexts';

export default function FeedbackList() {
	const { feedback, handleDelete } = useContext(FeedbackContext);

	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((x) => (
					<motion.div
						key={x.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem key={x.id} item={x} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
