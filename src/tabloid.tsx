import React from 'react';

const TabloidHeadlines: React.FC = () => {
	const headlines = [
		{
			text: 'Hollywood Star Caught Sneaking Into Secret Island Party!',
			imgSrc:
				'https://www.alamy.com/stock-photo/british-tabloid-newspapers.html',
			alt: 'Island Party',
		},
		{
			text: 'Miracle Diet Pill Promises 20 Pounds in 2 Weeks – Doctors Shocked!',
			imgSrc: 'https://www.alamy.com/stock-photo/tabloid-newspapers.html',
			alt: 'Miracle Pill',
		},
		{
			text: 'Mystery Billionaire Buys Entire Town, Residents Stunned!',
			imgSrc: 'https://www.gettyimages.com/photos/tabloid-headline',
			alt: 'Billionaire Buys Town',
		},
		{
			text: "Pop Singer's Secret Twin Revealed in Viral Video!",
			imgSrc:
				'https://www.alamy.com/stock-photo/the-sun-newspaper-headline.html',
			alt: 'Secret Twin',
		},
		{
			text: 'Ancient Artifact Discovered in Backyard – Scientists Baffled!',
			imgSrc:
				'https://www.alamy.com/stock-photo/british-tabloid-newspapers.html',
			alt: 'Ancient Artifact',
		},
		{
			text: 'Royal Family Scandal: Secret Letter Exposed Online!',
			imgSrc: 'https://www.alamy.com/stock-photo/tabloid-newspapers.html',
			alt: 'Royal Scandal',
		},
		{
			text: 'Local Teen Wins Lottery Twice in One Month – Unbelievable Luck!',
			imgSrc: 'https://www.gettyimages.com/photos/tabloid-headline',
			alt: 'Teen Lottery Wins',
		},
		{
			text: 'Tech CEO Claims AI Will Replace Humans By 2030!',
			imgSrc:
				'https://www.alamy.com/stock-photo/the-sun-newspaper-headline.html',
			alt: 'AI Replaces Humans',
		},
		{
			text: 'Haunted Mansion Sale Sparks Supernatural Sightings!',
			imgSrc:
				'https://www.alamy.com/stock-photo/british-tabloid-newspapers.html',
			alt: 'Haunted Mansion',
		},
		{
			text: 'World’s Largest Pizza Discovered in Abandoned Warehouse!',
			imgSrc: 'https://www.alamy.com/stock-photo/tabloid-newspapers.html',
			alt: "World's Largest Pizza",
		},
	];

	const containerStyle: React.CSSProperties = {
		maxWidth: 600,
		margin: '2rem auto',
		padding: '1rem',
		background: '#fff3f3',
		border: '2px solid #ff0000',
		borderRadius: '8px',
		fontFamily: "'Arial Black', Gadget, sans-serif",
	};

	const itemStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		margin: '0.5rem 0',
		cursor: 'pointer',
	};

	const headlineStyle: React.CSSProperties = {
		fontSize: '1.25rem',
		fontWeight: 'bold',
		color: '#d60000',
		textShadow: '1px 1px #fff',
		marginLeft: '0.75rem',
	};

	const imageStyle: React.CSSProperties = {
		width: '60px',
		height: '60px',
		objectFit: 'cover',
		borderRadius: '4px',
		border: '2px solid #ff0000',
	};

	return (
		<div style={containerStyle}>
			{headlines.map((headline, index) => (
				<div key={index} style={itemStyle}>
					<img src={headline.imgSrc} alt={headline.alt} style={imageStyle} />
					<div style={headlineStyle}>{headline.text}</div>
				</div>
			))}
		</div>
	);
};

export default TabloidHeadlines;
