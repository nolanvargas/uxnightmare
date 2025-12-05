import React, { useEffect, useState } from 'react';
import { Modal, Button, TextInput, Group } from '@mantine/core';

const NewsletterModal: React.FC = () => {
	const [opened, setOpened] = useState(false);
	const [email, setEmail] = useState('');

	// Open modal 5 seconds after mount
	useEffect(() => {
		const initialTimer = setTimeout(() => {
			setOpened(true);
		}, 5000);

		return () => clearTimeout(initialTimer);
	}, []);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Email submitted:', email);
		setEmail('');
		setOpened(false);
	};

	const handleNoThanks = () => {
		setOpened(false);
		setTimeout(() => {
			setOpened(true); // Reopen after 8 seconds
		}, 8000);
	};

	return (
		<Modal
			opened={opened}
			onClose={() => {
				setOpened(false);
				setTimeout(() => {
					setOpened(true); // Reopen after 8 seconds
				}, 8000);
			}}
			size='lg'
			title='Subscribe to Our Newsletter'
			centered
			style={{ zIndex: 1100 }}
			closeOnClickOutside={false}
		>
			<p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
				Join thousands of subscribers who get our latest recipes, tips, and
				exclusive offers delivered straight to your inbox every week! This
				includes special seasonal recipes, baking secrets, and behind-the-scenes
				content.
			</p>

			<ul style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
				<li>Weekly updates and exclusive recipes.</li>
				<li>Tips for perfect baking and cooking techniques.</li>
				<li>Special offers and discounts from our partners.</li>
				<li>Access to limited-time content and events.</li>
			</ul>

			<form onSubmit={handleSubmit}>
				<TextInput
					label='Email Address'
					placeholder='you@example.com'
					required
					value={email}
					onChange={(event) => setEmail(event.currentTarget.value)}
					size='md'
				/>
				<Group mt='md'>
					<Button type='submit' size='md'>
						Subscribe
					</Button>
					<Button variant='outline' size='md' onClick={handleNoThanks}>
						No Thanks
					</Button>
				</Group>
			</form>

			<p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
				By clicking Subscribe, you agree to our{' '}
				<a href='#' style={{ color: '#1e90ff' }}>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a href='#' style={{ color: '#1e90ff' }}>
					Terms of Service
				</a>
			</p>
		</Modal>
	);
};

export default NewsletterModal;
