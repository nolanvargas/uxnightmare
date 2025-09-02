import React, { useState, useEffect, useRef } from 'react';
import { TextInput, Button } from '@mantine/core';

const FreeEbookSidebar: React.FC = () => {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [visible, setVisible] = useState(false);
	const timeoutRef = useRef<number | null>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Email submitted:', email);
		setSubmitted(true);
		setEmail('');
		slideOutAndReappear();
	};

	const handleClose = () => {
		slideOutAndReappear();
	};

	const slideOutAndReappear = () => {
		setVisible(false);
		// clear any existing timeout
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => setVisible(true), 10000); // reappear after 10s
	};

	// slide in on mount
	useEffect(() => {
		timeoutRef.current = window.setTimeout(() => setVisible(true), 500);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const sidebarStyle: React.CSSProperties = {
		position: 'fixed',
		top: '40%',
		left: visible ? 0 : '-320px', // offscreen when hidden
		width: '300px',
		background: '#421d02ff',
		color: '#fff',
		padding: '1.5rem',
		borderRadius: '0px 8px 8px 0px',
		boxShadow: '-2px 2px 12px rgba(0,0,0,0.2)',
		zIndex: 1000,
		transition: 'left 0.5s ease-in-out',
	};

	const titleStyle: React.CSSProperties = {
		fontSize: '1.3rem',
		fontWeight: 600,
		marginBottom: '1rem',
	};

	const textStyle: React.CSSProperties = {
		fontSize: '0.95rem',
		marginBottom: '1rem',
	};

	return (
		<div style={sidebarStyle}>
			{!submitted ? (
				<>
					<div style={titleStyle}>Get Your Free E-Book!</div>
					<div style={textStyle}>
						Enter your email below to receive our exclusive guide instantly.
					</div>
					<form onSubmit={handleSubmit}>
						<TextInput
							placeholder='you@example.com'
							required
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
							size='sm'
							style={{ marginBottom: '1rem' }}
						/>
						<Button type='submit' fullWidth>
							Get My Free E-Book
						</Button>
						<Button variant='outline' fullWidth mt='sm' onClick={handleClose}>
							Close
						</Button>
					</form>
				</>
			) : (
				<div>
					<div style={titleStyle}>Thank you!</div>
					<div style={textStyle}>
						Your free e-book is on its way to your inbox. Check your email!
					</div>
				</div>
			)}
		</div>
	);
};

export default FreeEbookSidebar;
