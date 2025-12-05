import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mantine/core';
import { getRandomUrl } from './utils';

const AppPromoBanner: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const timeoutRef = useRef<number | null>(null);

	// Show banner 2 seconds after mount
	useEffect(() => {
		timeoutRef.current = window.setTimeout(() => setVisible(true), 2000);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const handleButtonClick = () => {
		// Open a new tab instead of just closing
		window.open(getRandomUrl(), '_blank');
		setVisible(false);
		// Reappear after 12 seconds
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => setVisible(true), 12000);
	};

	const containerStyle: React.CSSProperties = {
		position: 'fixed',
		top: visible ? 0 : '-150px', // offscreen when hidden
		left: '50%',
		transform: 'translateX(-50%)',
		width: '580px',
		height: '120px',
		backgroundColor: '#888',
		color: '#fff',
		borderRadius: '0 0 12px 12px',
		boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
		zIndex: 1000,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0.5rem',
		fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		textAlign: 'center' as const,
		transition: 'top 0.5s ease-in-out', // slide effect
	};

	const topRowStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		gap: '0.75rem',
		marginBottom: '0.5rem',
	};

	const logoStyle: React.CSSProperties = {
		width: '40px',
		height: '40px',
	};

	const titleStyle: React.CSSProperties = {
		fontSize: '1.2rem',
		fontWeight: 700,
	};

	const buttonGroupStyle: React.CSSProperties = {
		display: 'flex',
		gap: '0.5rem',
		marginBottom: '0.25rem',
	};

	const linkStyle: React.CSSProperties = {
		fontSize: '0.7rem',
		color: '#fff',
		textDecoration: 'underline',
		margin: '0 0.5rem',
	};

	const finePrintStyle: React.CSSProperties = {
		fontSize: '0.65rem',
		color: '#eee',
	};

	return (
		<div style={containerStyle}>
			<div style={topRowStyle}>
				{/* Inline SVG logo */}
				<svg
					style={logoStyle}
					viewBox='0 0 100 100'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='50' cy='50' r='50' fill='#fff' />
					<text
						x='50%'
						y='55%'
						textAnchor='middle'
						fontSize='40'
						fill='#1e90ff'
						fontFamily='Arial, sans-serif'
						dy='.35em'
					>
						M
					</text>
				</svg>

				<div style={titleStyle}>MyBlog is better with the app!</div>
			</div>

			<div style={buttonGroupStyle}>
				<Button color='green' size='xs' onClick={handleButtonClick}>
					Download
				</Button>
				<Button color='yellow' size='xs' onClick={handleButtonClick}>
					Switch to App
				</Button>
			</div>

			<div>
				<a href='#' style={linkStyle}>
					Privacy Policy
				</a>
				<a href='#' style={linkStyle}>
					Terms of Service
				</a>
			</div>

			<div style={finePrintStyle}>
				By using the app, you agree to our terms and conditions. Some features
				may require internet connection.
			</div>
		</div>
	);
};

export default AppPromoBanner;
