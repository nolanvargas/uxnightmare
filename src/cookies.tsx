import React, { useState } from 'react';

const CookieOptionsBar: React.FC = () => {
	const [visible, setVisible] = useState(true);

	const styles = {
		container: {
			position: 'fixed' as const,
			bottom: 0,
			left: 0,
			boxSizing: 'border-box',
			width: '100vw',
			background: '#222',
			color: '#fff',
			padding: '1.5rem 2rem',
			display: 'flex',
			flexDirection: 'column' as const,
			gap: '1rem',
			zIndex: 20,
			fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
			boxShadow: '0 -4px 12px rgba(0,0,0,0.3)',
			fontSize: '0.95rem',
		},
		text: { lineHeight: 1.5 },
		buttonsContainer: {
			display: 'flex',
			flexWrap: 'wrap' as const,
			gap: '0.5rem',
		},
		buttonPrimary: {
			background: '#1e90ff',
			border: 'none',
			borderRadius: '4px',
			padding: '0.7rem 1.2rem',
			color: '#fff',
			cursor: 'pointer',
			fontWeight: 600,
			fontSize: '0.95rem',
		},
		buttonSecondary: {
			background: '#555',
			border: 'none',
			borderRadius: '4px',
			padding: '0.7rem 1.2rem',
			color: '#fff',
			cursor: 'pointer',
			fontWeight: 500,
			fontSize: '0.95rem',
		},
		link: {
			color: '#1e90ff',
			textDecoration: 'underline',
			marginLeft: '0.2rem',
		},
		finePrint: { fontSize: '0.8rem', color: '#ccc', lineHeight: 1.4 },
	};

	if (!visible) return null;

	const handleClick = () => setVisible(false);

	return (
		<div style={styles.container}>
			<span style={styles.text}>
				We and our partners use cookies, web beacons, pixels, and similar
				technologies to enhance your browsing experience, analyze site traffic,
				personalize content and ads, and provide social media features. You can{' '}
				<a href='#' style={styles.link}>
					read more in our Privacy Policy
				</a>
				,{' '}
				<a href='#' style={styles.link}>
					Cookie Policy
				</a>
				, or{' '}
				<a href='#' style={styles.link}>
					Terms of Service
				</a>
				.
			</span>

			<span style={styles.finePrint}>
				By clicking "Accept All," you consent to the use of all cookies and
				similar technologies for the purposes described. You can also choose to
				customize your preferences below, or reject non-essential cookies.
				Please note that some features of the website may not function properly
				if you reject certain categories of cookies.
			</span>

			<div style={styles.buttonsContainer}>
				<button style={styles.buttonPrimary} onClick={handleClick}>
					Accept All Cookies
				</button>
				<button style={styles.buttonSecondary} onClick={handleClick}>
					Reject All Non-Essential
				</button>
				<button style={styles.buttonSecondary} onClick={handleClick}>
					Customize Preferences
				</button>
				<button style={styles.buttonSecondary} onClick={handleClick}>
					Learn More About Cookies
				</button>
				<button style={styles.buttonSecondary} onClick={handleClick}>
					Manage Partners
				</button>
			</div>

			<span style={styles.finePrint}>
				Your data may be shared with partners for analytics and marketing
				purposes. For full details, see our{' '}
				<a href='#' style={styles.link}>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a href='#' style={styles.link}>
					Cookie Settings
				</a>
				. You may change your preferences at any time.
			</span>
		</div>
	);
};

export default CookieOptionsBar;
