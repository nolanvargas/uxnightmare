import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Group } from '@mantine/core';

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
		setOpened(false);

		// Reopen after 8 seconds
		timeoutRef.current = window.setTimeout(() => {
			setOpened(true);
		}, 8000);
	};

	return (
		<Modal
			opened={opened}
			onClose={() => handleButtonClick('keepOn')}
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
				<Group direction='column' spacing='sm' style={{ width: '100%' }}>
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
						onClick={() => handleButtonClick('keepOn')}
					>
						KEEP AD BLOCKER ON
					</Button>
				</Group>
			</div>
		</Modal>
	);
};

export default AdblockerNoticeModal;
