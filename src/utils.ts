// Array of URLs to randomly open in new tabs
const RANDOM_URLS = [
	'https://how-i-experience-web-today.com/detail',
	'https://phishingquiz.withgoogle.com/',
	'https://badhtml.com/',
	'https://longdogechallenge.com/',
	'https://floatingqrcode.com/',
];

/**
 * Returns a random URL from the predefined list
 */
export const getRandomUrl = (): string => {
	const randomIndex = Math.floor(Math.random() * RANDOM_URLS.length);
	return RANDOM_URLS[randomIndex];
};
