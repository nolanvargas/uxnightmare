import React, { useState, useEffect, useRef } from 'react';

const SurveyPopup: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const timeoutRef = useRef<number | null>(null);

	// Show popup 10 seconds after mount
	useEffect(() => {
		timeoutRef.current = window.setTimeout(() => setVisible(true), 10000);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	const handleStarClick = (rating: number) => {
		setSelectedRating(rating);
		setVisible(false);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => {
			setSelectedRating(null);
			setVisible(true);
		}, 10000);
		console.log(`User selected rating: ${rating}`);
	};

	if (!visible) return null;

	const containerStyle: React.CSSProperties = {
		position: 'fixed',
		bottom: '20px',
		left: '20px', // bottom-left corner
		width: '300px',
		backgroundColor: '#fff',
		borderRadius: '12px',
		boxShadow: '0 4px 18px rgba(0,0,0,0.35)',
		padding: '1.5rem',
		fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		zIndex: 1000,
		border: '2px solid #1e90ff',
	};

	const titleStyle: React.CSSProperties = {
		fontSize: '1.1rem',
		fontWeight: 600,
		marginBottom: '0.5rem',
		color: '#1e90ff',
	};

	const starsContainerStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '0.5rem',
		marginBottom: '0.5rem',
	};

	const starStyle: React.CSSProperties = {
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: 'transform 0.2s',
	};

	const surveyTextStyle: React.CSSProperties = {
		fontSize: '0.85rem',
		color: '#555',
		marginBottom: '0.5rem',
	};

	const linksStyle: React.CSSProperties = {
		fontSize: '0.75rem',
		color: '#1e90ff',
		textDecoration: 'underline',
		display: 'flex',
		justifyContent: 'space-between',
	};

	return (
		<div style={containerStyle}>
			<div style={titleStyle}>Rate your experience</div>
			<div style={starsContainerStyle}>
				{[1, 2, 3, 4, 5].map((star) => (
					<span
						key={star}
						style={{
							...starStyle,
							color:
								selectedRating && star <= selectedRating ? '#FFD700' : '#ccc',
							borderRadius: '50%',
						}}
						onClick={() => handleStarClick(star)}
						onMouseEnter={(e) =>
							(e.currentTarget.style.transform = 'scale(1.3)')
						}
						onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
					>
						★
					</span>
				))}
			</div>
			<div style={surveyTextStyle}>Click a star to take a short survey.</div>
			<div style={linksStyle}>
				<a href='#' target='_blank' rel='noopener noreferrer'>
					Privacy Policy
				</a>
				<a href='#' target='_blank' rel='noopener noreferrer'>
					Terms of Service
				</a>
			</div>
		</div>
	);
};

export default SurveyPopup;
