import React, { useState, useEffect } from 'react';

const NotificationPermissionPopup: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('');

	useEffect(() => {
		// Get current URL for display
		setCurrentUrl(window.location.hostname || 'this site');
		
		// Show popup after a short delay (e.g., 2 seconds)
		const timer = setTimeout(() => {
			setVisible(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const handleAllow = () => {
		console.log('Notifications allowed');
		setVisible(false);
	};

	const handleBlock = () => {
		console.log('Notifications blocked');
		setVisible(false);
	};

	if (!visible) return null;

	const styles = {
		overlay: {
			position: 'fixed' as const,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'transparent',
			zIndex: 10000,
			pointerEvents: 'none' as const,
		},
		popup: {
			backgroundColor: '#ffffff',
			borderRadius: '8px',
			boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)',
			padding: '20px',
			minWidth: '360px',
			maxWidth: '400px',
			fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
			position: 'absolute' as const,
			top: '16px',
			left: '16px',
			pointerEvents: 'auto' as const,
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '16px',
		},
		icon: {
			width: '24px',
			height: '24px',
			marginRight: '12px',
			flexShrink: 0,
		},
		title: {
			fontSize: '16px',
			fontWeight: 500,
			color: '#202124',
			margin: 0,
			lineHeight: '1.4',
		},
		message: {
			fontSize: '14px',
			color: '#5f6368',
			marginBottom: '20px',
			lineHeight: '1.5',
		},
		url: {
			fontWeight: 500,
			color: '#1a73e8',
		},
		buttons: {
			display: 'flex',
			gap: '8px',
			justifyContent: 'flex-end',
		},
		button: {
			padding: '8px 16px',
			borderRadius: '4px',
			border: 'none',
			fontSize: '14px',
			fontWeight: 500,
			cursor: 'pointer',
			transition: 'background-color 0.2s',
			fontFamily: 'inherit',
		},
		buttonBlock: {
			backgroundColor: '#f1f3f4',
			color: '#202124',
		},
		buttonAllow: {
			backgroundColor: '#1a73e8',
			color: '#ffffff',
		},
	};

	return (
		<div style={styles.overlay}>
			<div style={styles.popup}>
				<div style={styles.header}>
					<svg
						style={styles.icon}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
							fill="#1a73e8"
						/>
					</svg>
					<h3 style={styles.title}>Show notifications</h3>
				</div>
				<p style={styles.message}>
					<span style={styles.url}>{currentUrl}</span> wants to show notifications
				</p>
				<div style={styles.buttons}>
					<button
						style={{ ...styles.button, ...styles.buttonBlock }}
						onClick={handleBlock}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#e8eaed';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#f1f3f4';
						}}
					>
						Block
					</button>
					<button
						style={{ ...styles.button, ...styles.buttonAllow }}
						onClick={handleAllow}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#1765cc';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = '#1a73e8';
						}}
					>
						Allow
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotificationPermissionPopup;

