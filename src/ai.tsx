import React, { useState, useEffect } from 'react';

const AiChatWidget: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState<string[]>([]);
	const [input, setInput] = useState('');

	// Automatically open 8 seconds after mount
	useEffect(() => {
		const timeout = setTimeout(() => setOpen(true), 8000);
		return () => clearTimeout(timeout);
	}, []);

	const toggleOpen = () => setOpen(!open);

	const handleSend = () => {
		if (!input.trim()) return;
		setMessages([
			...messages,
			`You: ${input}`,
			`AI: This is a placeholder response.`,
		]);
		setInput('');
	};

	const bubbleStyle: React.CSSProperties = {
		position: 'fixed',
		bottom: '20px',
		right: '20px',
		width: '60px',
		height: '60px',
		borderRadius: '50%',
		backgroundColor: '#1e90ff',
		color: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		fontSize: '28px',
		boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
		zIndex: 1000,
	};

	const chatWindowStyle: React.CSSProperties = {
		position: 'fixed',
		bottom: '90px',
		right: '20px',
		width: '300px',
		height: '400px',
		backgroundColor: '#fff',
		borderRadius: '8px',
		boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		zIndex: 1000,
	};

	const messagesStyle: React.CSSProperties = {
		flex: 1,
		padding: '1rem',
		overflowY: 'auto',
		fontSize: '0.9rem',
	};

	const inputContainerStyle: React.CSSProperties = {
		display: 'flex',
		borderTop: '1px solid #ddd',
	};

	const inputStyle: React.CSSProperties = {
		flex: 1,
		padding: '0.5rem',
		border: 'none',
		outline: 'none',
		fontSize: '0.9rem',
	};

	const sendButtonStyle: React.CSSProperties = {
		padding: '0 1rem',
		border: 'none',
		backgroundColor: '#1e90ff',
		color: '#fff',
		cursor: 'pointer',
	};

	return (
		<>
			{/* Chat Bubble */}
			<div style={bubbleStyle} onClick={toggleOpen}>
				💬
			</div>

			{/* Mini Chat Window */}
			{open && (
				<div style={chatWindowStyle}>
					<div style={messagesStyle}>
						{messages.length === 0 ? (
							<div style={{ color: '#666' }}>
								Hello! I am an AI Assistant, ready to help! Ask me anything.
							</div>
						) : (
							messages.map((msg, idx) => <div key={idx}>{msg}</div>)
						)}
					</div>
					<div style={inputContainerStyle}>
						<input
							type='text'
							placeholder='Type a message...'
							value={input}
							onChange={(e) => setInput(e.currentTarget.value)}
							style={inputStyle}
							onKeyDown={(e) => e.key === 'Enter' && handleSend()}
						/>
						<button style={sendButtonStyle} onClick={handleSend}>
							Send
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default AiChatWidget;
