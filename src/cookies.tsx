import React, { useState } from 'react';
import {
	Modal,
	Button,
	Checkbox,
	ScrollArea,
	Text,
	Stack,
	Divider,
	Group,
} from '@mantine/core';

const CookieOptionsBar: React.FC = () => {
	const [visible, setVisible] = useState(true);
	const [preferencesModalOpen, setPreferencesModalOpen] = useState(false);
	const [learnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
	const [partnersModalOpen, setPartnersModalOpen] = useState(false);
	const [cookiePreferences, setCookiePreferences] = useState({
		essential: true,
		analytics: false,
		marketing: false,
		functional: false,
		social: false,
		advertising: false,
	});

	const styles = {
		container: {
			position: 'fixed' as const,
			bottom: 0,
			left: 0,
			boxSizing: 'border-box' as const,
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

	const handleAcceptAll = () => {
		console.log('All cookies accepted');
		setVisible(false);
	};

	const handleRejectNonEssential = () => {
		console.log('Non-essential cookies rejected');
		setVisible(false);
	};

	const handleCustomizePreferences = () => {
		setPreferencesModalOpen(true);
	};

	const handleLearnMore = () => {
		setLearnMoreModalOpen(true);
	};

	const handleManagePartners = () => {
		setPartnersModalOpen(true);
	};

	const handleSavePreferences = () => {
		console.log('Cookie preferences saved:', cookiePreferences);
		setPreferencesModalOpen(false);
		setVisible(false);
	};

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
				<button style={styles.buttonPrimary} onClick={handleAcceptAll}>
					Accept All Cookies
				</button>
				<button
					style={styles.buttonSecondary}
					onClick={handleRejectNonEssential}
				>
					Reject All Non-Essential
				</button>
				<button
					style={styles.buttonSecondary}
					onClick={handleCustomizePreferences}
				>
					Customize Preferences
				</button>
				<button style={styles.buttonSecondary} onClick={handleLearnMore}>
					Learn More About Cookies
				</button>
				<button style={styles.buttonSecondary} onClick={handleManagePartners}>
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

			{/* Customize Preferences Modal */}
			<Modal
				opened={preferencesModalOpen}
				onClose={() => setPreferencesModalOpen(false)}
				title='Customize Your Cookie Preferences'
				size='lg'
				centered
				closeOnClickOutside={false}
			>
				<ScrollArea h={400}>
					<Stack gap='md'>
						<Text size='sm' c='dimmed'>
							Please select which types of cookies you would like to accept.
							Essential cookies cannot be disabled as they are necessary for the
							website to function.
						</Text>
						<Divider />
						<Checkbox
							label='Essential Cookies (Required)'
							description='These cookies are necessary for the website to function and cannot be switched off. They include authentication, security, and basic functionality.'
							checked={cookiePreferences.essential}
							disabled
						/>
						<Checkbox
							label='Analytics Cookies'
							description='These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.'
							checked={cookiePreferences.analytics}
							onChange={(e) =>
								setCookiePreferences({
									...cookiePreferences,
									analytics: e.currentTarget.checked,
								})
							}
						/>
						<Checkbox
							label='Marketing Cookies'
							description='These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.'
							checked={cookiePreferences.marketing}
							onChange={(e) =>
								setCookiePreferences({
									...cookiePreferences,
									marketing: e.currentTarget.checked,
								})
							}
						/>
						<Checkbox
							label='Functional Cookies'
							description='These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.'
							checked={cookiePreferences.functional}
							onChange={(e) =>
								setCookiePreferences({
									...cookiePreferences,
									functional: e.currentTarget.checked,
								})
							}
						/>
						<Checkbox
							label='Social Media Cookies'
							description='These cookies are set by social media services to enable you to share content and connect with social networks.'
							checked={cookiePreferences.social}
							onChange={(e) =>
								setCookiePreferences({
									...cookiePreferences,
									social: e.currentTarget.checked,
								})
							}
						/>
						<Checkbox
							label='Advertising Cookies'
							description='These cookies are used to deliver personalized advertisements and track ad performance across different websites.'
							checked={cookiePreferences.advertising}
							onChange={(e) =>
								setCookiePreferences({
									...cookiePreferences,
									advertising: e.currentTarget.checked,
								})
							}
						/>
					</Stack>
				</ScrollArea>
				<Group mt='md' justify='flex-end'>
					<Button
						variant='outline'
						onClick={() => {
							setPreferencesModalOpen(false);
						}}
					>
						Cancel
					</Button>
					<Button onClick={handleSavePreferences}>Save Preferences</Button>
				</Group>
			</Modal>

			{/* Learn More Modal */}
			<Modal
				opened={learnMoreModalOpen}
				onClose={() => setLearnMoreModalOpen(false)}
				title='Learn More About Cookies'
				size='xl'
				centered
			>
				<ScrollArea h={500}>
					<Stack gap='md'>
						<Text size='lg' fw={600}>
							What Are Cookies?
						</Text>
						<Text size='sm'>
							Cookies are small text files that are placed on your device when
							you visit a website. They are widely used to make websites work
							more efficiently and provide information to the website owners.
							Cookies can be "persistent" or "session" cookies. Persistent
							cookies remain on your device for a set period or until you delete
							them, while session cookies are deleted when you close your
							browser.
						</Text>

						<Text size='lg' fw={600} mt='md'>
							Types of Cookies We Use
						</Text>

						<Text size='sm' fw={600}>
							Essential Cookies
						</Text>
						<Text size='sm'>
							These cookies are strictly necessary to provide you with services
							available through our website and to use some of its features,
							such as access to secure areas. Without these cookies, services
							you have asked for cannot be provided.
						</Text>

						<Text size='sm' fw={600} mt='md'>
							Analytics Cookies
						</Text>
						<Text size='sm'>
							These cookies help us understand how visitors interact with our
							website by collecting and reporting information anonymously. This
							helps us improve the way our website works, for example, by
							ensuring that users are finding what they are looking for easily.
						</Text>

						<Text size='sm' fw={600} mt='md'>
							Marketing Cookies
						</Text>
						<Text size='sm'>
							These cookies are used to track visitors across websites to
							display relevant advertisements and measure campaign
							effectiveness. They may be set by us or by advertising partners
							and may be used to build a profile of your interests.
						</Text>

						<Text size='sm' fw={600} mt='md'>
							Functional Cookies
						</Text>
						<Text size='sm'>
							These cookies enable enhanced functionality and personalization,
							such as remembering your preferences and settings. They may be set
							by us or by third-party providers whose services we have added to
							our pages.
						</Text>

						<Text size='sm' fw={600} mt='md'>
							Social Media Cookies
						</Text>
						<Text size='sm'>
							These cookies are set by social media services to enable you to
							share content and connect with social networks. They may track
							your browsing activity across other websites and build a profile
							of your interests.
						</Text>

						<Text size='lg' fw={600} mt='md'>
							How to Manage Cookies
						</Text>
						<Text size='sm'>
							You can control and/or delete cookies as you wish. You can delete
							all cookies that are already on your device and you can set most
							browsers to prevent them from being placed. However, if you do
							this, you may have to manually adjust some preferences every time
							you visit a site and some services and functionalities may not
							work.
						</Text>

						<Text size='lg' fw={600} mt='md'>
							Third-Party Cookies
						</Text>
						<Text size='sm'>
							In addition to our own cookies, we may also use various
							third-party cookies to report usage statistics of the website,
							deliver advertisements on and through the website, and so on.
							These third parties may use cookies, web beacons, and similar
							technologies to collect or receive information from our website
							and elsewhere on the internet.
						</Text>

						<Text size='lg' fw={600} mt='md'>
							Your Rights
						</Text>
						<Text size='sm'>
							You have the right to accept or reject cookies. Most web browsers
							automatically accept cookies, but you can usually modify your
							browser setting to decline cookies if you prefer. However, this
							may prevent you from taking full advantage of the website.
						</Text>
					</Stack>
				</ScrollArea>
				<Group mt='md' justify='flex-end'>
					<Button
						onClick={() => {
							setLearnMoreModalOpen(false);
						}}
					>
						Close
					</Button>
				</Group>
			</Modal>

			{/* Manage Partners Modal */}
			<Modal
				opened={partnersModalOpen}
				onClose={() => setPartnersModalOpen(false)}
				title='Manage Your Data Sharing Partners'
				size='xl'
				centered
			>
				<ScrollArea h={500}>
					<Stack gap='md'>
						<Text size='sm' c='dimmed'>
							The following partners may collect and process your personal data.
							You can manage your preferences for each partner individually.
							Note that disabling a partner may affect website functionality.
						</Text>
						<Divider />
						{[
							{
								name: 'Google Analytics',
								purpose: 'Analytics and performance measurement',
								required: false,
							},
							{
								name: 'Facebook Pixel',
								purpose: 'Advertising and social media integration',
								required: false,
							},
							{
								name: 'Amazon Associates',
								purpose: 'Affiliate marketing and product recommendations',
								required: false,
							},
							{
								name: 'DoubleClick',
								purpose: 'Advertising and ad serving',
								required: false,
							},
							{
								name: 'Adobe Analytics',
								purpose: 'Website analytics and user behavior tracking',
								required: false,
							},
							{
								name: 'Twitter Analytics',
								purpose: 'Social media integration and analytics',
								required: false,
							},
							{
								name: 'LinkedIn Insight Tag',
								purpose: 'Professional networking and advertising',
								required: false,
							},
							{
								name: 'Pinterest Tag',
								purpose: 'Social media and advertising',
								required: false,
							},
							{
								name: 'Snapchat Pixel',
								purpose: 'Advertising and social media',
								required: false,
							},
							{
								name: 'TikTok Pixel',
								purpose: 'Advertising and social media',
								required: false,
							},
							{
								name: 'Microsoft Advertising',
								purpose: 'Search advertising and analytics',
								required: false,
							},
							{
								name: 'Yahoo Advertising',
								purpose: 'Display advertising and analytics',
								required: false,
							},
							{
								name: 'Criteo',
								purpose: 'Retargeting and personalized advertising',
								required: false,
							},
							{
								name: 'The Trade Desk',
								purpose: 'Programmatic advertising',
								required: false,
							},
							{
								name: 'Salesforce Marketing Cloud',
								purpose: 'Customer relationship management and marketing',
								required: false,
							},
							{
								name: 'HubSpot',
								purpose: 'Marketing automation and analytics',
								required: false,
							},
							{
								name: 'Segment',
								purpose: 'Customer data platform and analytics',
								required: false,
							},
							{
								name: 'Mixpanel',
								purpose: 'Product analytics and user behavior',
								required: false,
							},
							{
								name: 'Hotjar',
								purpose: 'User experience analytics and heatmaps',
								required: false,
							},
							{
								name: 'Optimizely',
								purpose: 'A/B testing and experimentation',
								required: false,
							},
						].map((partner, index) => (
							<div key={index}>
								<Group justify='space-between' align='flex-start'>
									<div style={{ flex: 1 }}>
										<Text size='sm' fw={600}>
											{partner.name}
										</Text>
										<Text size='xs' c='dimmed'>
											{partner.purpose}
										</Text>
									</div>
									<Checkbox
										checked={!partner.required}
										disabled={partner.required}
										onChange={(e) =>
											console.log(
												`${partner.name} ${
													e.currentTarget.checked ? 'enabled' : 'disabled'
												}`
											)
										}
									/>
								</Group>
								{index < 19 && <Divider mt='md' />}
							</div>
						))}
					</Stack>
				</ScrollArea>
				<Group mt='md' justify='space-between'>
					<Button
						variant='outline'
						onClick={() => {
							console.log('All partners disabled');
						}}
					>
						Disable All
					</Button>
					<Group>
						<Button
							variant='outline'
							onClick={() => {
								setPartnersModalOpen(false);
							}}
						>
							Cancel
						</Button>
						<Button
							onClick={() => {
								console.log('Partner preferences saved');
								setPartnersModalOpen(false);
							}}
						>
							Save Preferences
						</Button>
					</Group>
				</Group>
			</Modal>
		</div>
	);
};

export default CookieOptionsBar;
