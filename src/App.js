import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { FeedbackProvider } from './contexts/FeedbackContexts';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import Card from './components/shared/Card';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './components/pages/About';
import AboutIcon from './components/AboutIcon';

export default function App() {
	return (
		<>
			<div className='container'>
				<FeedbackProvider>
					<Router>
						<Header text='Feedback UI' />
						<Routes>
							<Route
								exact
								path='/'
								element={
									<>
										<FeedbackForm />
										<FeedbackStats />
										<FeedbackList />
										<AboutIcon />
									</>
								}
							/>
							<Route path='/about' element={<About />} />
						</Routes>
					</Router>
				</FeedbackProvider>
			</div>
		</>
	);
}
