import React, { useState } from 'react';

const MyBlogLoginCard: React.FC = () => {
	const [visible, setVisible] = useState(true);
	const styles = {
		container: {
			width: '320px',
			backgroundColor: '#fff',
			borderRadius: '8px',
			boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
			padding: '0.5rem',
			fontFamily: "'Roboto', sans-serif",
			display: 'flex',
			flexDirection: 'column' as const,
			alignItems: 'center',
			position: 'fixed' as const,
			right: '10px',
			top: '30px',
		},
		title: { fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem' },
		subtitle: {
			fontSize: '0.95rem',
			color: '#5f6368',
			marginBottom: '1.5rem',
			textAlign: 'center' as const,
		},
		iconContainer: {
			width: '48px',
			height: '48px',
			borderRadius: '50%',
			background: '#f1f3f4',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: '1.5rem',
			fontSize: '24px',
			fontWeight: 'bold' as const,
			color: '#1a73e8',
		},
		continueButton: {
			width: '100%',
			backgroundColor: '#1a73e8',
			color: '#fff',
			fontWeight: 500,
			fontSize: '0.95rem',
			padding: '0.75rem 0',
			border: 'none',
			borderRadius: '4px',
			cursor: 'pointer',
		},
		closeButton: {
			background: 'transparent',
			border: 'none',
			fontSize: '38px',
			cursor: 'pointer',
			color: '#5f6368',
		},
		header: {
			display: 'flex',
			width: '100%',
			flexDirection: 'row' as const,
			justifyContent: 'space-between' as const,
			alignItems: 'center',
			marginBottom: '1rem',
			height: '40px',
			borderBottom: '1px solid #999',
		},
	};

	const handleClose = () => {
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png'
						alt='Google Logo'
						style={{ width: '20px', height: '20px' }}
					/>
					<p>Sign in with Google</p>
				</div>
				<button style={styles.closeButton} onClick={handleClose}>
					×
				</button>
			</div>
			<div style={styles.title}>Sign in with MyBlog</div>
			<div style={styles.subtitle}>
				Use your MyBlog Account to sign in quickly and securely. No passwords to
				remember.
			</div>
			<div style={styles.iconContainer}>MB</div>
			<button style={styles.continueButton}>Continue</button>
		</div>
	);
};

export default MyBlogLoginCard;
