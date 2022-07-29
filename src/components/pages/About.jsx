import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

export default function About() {
	return (
		<Card>
			<h2>This is the about page</h2>
			<Link to='/'>Home</Link>
		</Card>
	);
}
