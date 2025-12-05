import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Stack } from '@mantine/core';
import { getRandomUrl } from './utils';

const AdblockerNoticeModal: React.FC = () => {
	const [opened, setOpened] = useState(false);
	const timeoutRef = useRef<number | null>(null);

	// Show modal 4 seconds after mount
	useEffect(() => {
		timeoutRef.current = window.setTimeout(() => {
			setOpened(true);
		}, 4000);

		return () => {
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);

	const handleButtonClick = (action: 'turnOff' | 'keepOn') => {
		console.log('User action:', action);
		if (action === 'turnOff') {
			// Open a new tab for the main action
			window.open(getRandomUrl(), '_blank');
		}
		setOpened(false);

		// Reopen after 8 seconds
		timeoutRef.current = window.setTimeout(() => {
			setOpened(true);
		}, 8000);
	};

	return (
		<Modal
			opened={opened}
			onClose={() => {
				setOpened(false);
				// Reopen after 8 seconds
				if (timeoutRef.current) clearTimeout(timeoutRef.current);
				timeoutRef.current = window.setTimeout(() => {
					setOpened(true);
				}, 8000);
			}}
			centered
			size='sm'
			withCloseButton={true}
			closeOnClickOutside={false}
		>
			<div style={{ textAlign: 'center', padding: '1rem' }}>
				<h2
					style={{
						color: '#1a237e',
						fontSize: '1.5rem',
						marginBottom: '0.75rem',
					}}
				>
					Thanks for visiting
				</h2>
				<p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.5rem' }}>
					We notice you have an ad blocker on. Advertisements help us provide
					quality content.
				</p>
				<Stack gap='sm' style={{ width: '100%' }}>
					<Button
						fullWidth
						color='blue'
						style={{ fontWeight: 600, padding: '0.75rem 0' }}
						onClick={() => handleButtonClick('turnOff')}
					>
						TURN AD BLOCKER OFF
					</Button>
					<Button
						variant='subtle'
						color='gray'
						style={{ fontSize: '0.85rem' }}
						onClick={() => {
							setOpened(false);
							// Reopen after 8 seconds
							if (timeoutRef.current) clearTimeout(timeoutRef.current);
							timeoutRef.current = window.setTimeout(() => {
								setOpened(true);
							}, 8000);
						}}
					>
						KEEP AD BLOCKER ON
					</Button>
				</Stack>
			</div>
		</Modal>
	);
};

export default AdblockerNoticeModal;
