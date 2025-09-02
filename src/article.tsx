import React, { useState, useRef, useEffect } from 'react';

const FullPageRecipeBlog: React.FC = () => {
	const [expanded, setExpanded] = useState(false);
	const articleRef = useRef<HTMLDivElement>(null);

	// Collapse if clicking outside
	const handleClickOutside = (event: MouseEvent) => {
		if (
			articleRef.current &&
			!articleRef.current.contains(event.target as Node)
		) {
			setExpanded(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	const styles = {
		body: {
			fontFamily: "'Georgia', serif",
			lineHeight: 1.7,
			color: '#333',
			margin: 0,
			padding: 0,
			background: '#f9f9f9',
		},
		nav: {
			background: '#1a1a1a',
			color: '#fff',
			padding: '1rem 2rem',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		navLink: {
			color: '#fff',
			textDecoration: 'none',
			marginLeft: '1.5rem',
			fontWeight: 500,
		},
		header: {
			background: '#fff',
			padding: '3rem 2rem',
			textAlign: 'center' as const,
			boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
		},
		title: { fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111' },
		meta: { color: '#888', fontSize: '1rem', marginBottom: '1rem' },
		articleWrapper: {
			maxWidth: 800,
			margin: '2rem auto',
			padding: '2rem',
			background: '#fff',
			borderRadius: '8px',
			boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
		},
		h2: {
			fontSize: '1.8rem',
			marginTop: '2rem',
			marginBottom: '1rem',
			color: '#333',
		},
		p: { fontSize: '1rem', marginBottom: '1rem' },
		ul: { paddingLeft: '1.5rem', marginBottom: '1rem' },
		ol: { paddingLeft: '1.5rem', marginBottom: '1rem' },
		readMore: {
			color: '#1e90ff',
			cursor: 'pointer',
			fontWeight: 500,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: '1rem',
			gap: '0.25rem',
			fontSize: '1rem',
		},
		hiddenContent: (expanded: boolean) => ({
			filter: expanded ? 'none' : 'blur(6px)',
			maxHeight: expanded ? 'none' : '0px',
			overflow: 'hidden',
			transition: 'all 0.4s ease',
		}),
		tips: {
			fontStyle: 'italic',
			fontSize: '0.9rem',
			color: '#555',
			marginTop: '1rem',
		},
		image: { width: '100%', borderRadius: '8px', marginBottom: '1.5rem' },
	};

	return (
		<div style={styles.body}>
			<nav style={styles.nav}>
				<div style={{ fontWeight: 700, fontSize: '1.2rem' }}>MyBlog</div>
				<div>
					<a href='#' style={styles.navLink}>
						Home
					</a>
					<a href='#' style={styles.navLink}>
						Recipes
					</a>
					<a href='#' style={styles.navLink}>
						Blog
					</a>
					<a href='#' style={styles.navLink}>
						Contact
					</a>
				</div>
			</nav>

			<header style={styles.header}>
				<h1 style={styles.title}>Ultimate Chocolate Chip Cookies</h1>
				<div style={styles.meta}>By Jane Doe | April 2025 | 8 servings</div>
				<img
					style={styles.image}
					src='https://via.placeholder.com/800x400?text=Chocolate+Chip+Cookies'
					alt='Chocolate Chip Cookies'
				/>
			</header>

			<main ref={articleRef} style={styles.articleWrapper}>
				{/* Beginning of Journey – always visible */}
				<section>
					<h2 style={styles.h2}>My Chocolate Chip Cookie Journey</h2>
					<p style={styles.p}>
						I still remember the very first time I attempted to make chocolate
						chip cookies. It was a rainy afternoon, the kind where the sky is a
						sheet of grey and the sound of raindrops against the window is both
						soothing and restless. That day, I picked up my mother’s old wooden
						mixing spoon, determined to make something magical.
					</p>
				</section>

				{/* Everything else hidden until “Read More” */}
				<div style={styles.hiddenContent(expanded)}>
					<p style={styles.p}>
						My first batch was, unsurprisingly, a disaster. The dough was too
						sticky, the oven too hot, and I misread the recipe for sugar by a
						half-cup. When I took the cookies out, they had spread like little
						molten puddles across the baking sheet. But biting into one, warm
						and slightly underbaked, I realized even failure could be delicious.
					</p>

					<p style={styles.p}>
						Over months of experimenting—brown sugar instead of white, chilling
						the dough, folding chocolate carefully—I refined the recipe. Friends
						were my taste testers, giving brutally honest feedback, helping me
						perfect the golden, chewy, chocolate-filled cookies we know today.
					</p>

					{/* Recipe */}
					<section>
						<h2 style={styles.h2}>Ingredients</h2>
						<ul style={styles.ul}>
							<li>2 cups all-purpose flour</li>
							<li>1 cup sugar</li>
							<li>1 cup chocolate chips</li>
							<li>2 large eggs</li>
							<li>1 tsp vanilla extract</li>
							<li>1/2 tsp baking soda</li>
							<li>1/4 tsp salt</li>
							<li>1 cup unsalted butter, softened</li>
						</ul>
					</section>

					<section>
						<h2 style={styles.h2}>Instructions</h2>
						<ol style={styles.ol}>
							<li>Preheat oven to 350°F (175°C).</li>
							<li>Cream butter and sugar until light and fluffy.</li>
							<li>Add eggs and vanilla extract, mix well.</li>
							<li>Mix flour, baking soda, and salt separately.</li>
							<li>Combine dry ingredients with wet mixture gradually.</li>
							<li>Fold in chocolate chips.</li>
							<li>Scoop dough onto lined baking sheets.</li>
							<li>Bake 10–12 minutes until edges are golden.</li>
							<li>Cool slightly before serving.</li>
						</ol>
					</section>

					<section>
						<h2 style={styles.h2}>Serving Tips</h2>
						<p style={styles.p}>
							Serve warm with milk or store in an airtight container for up to 5
							days.
						</p>
						<p style={styles.tips}>
							Tip: Chill dough for 30 minutes to prevent spreading and get
							thicker cookies.
						</p>
					</section>
				</div>

				{!expanded && (
					<div
						style={styles.readMore}
						onClick={(e) => {
							e.stopPropagation();
							setExpanded(true);
						}}
					>
						Read More ▼
					</div>
				)}
			</main>
		</div>
	);
};

export default FullPageRecipeBlog;
