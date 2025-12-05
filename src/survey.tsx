import React, { useState, useEffect, useRef } from 'react';
import {
	Modal,
	Button,
	TextInput,
	Textarea,
	Checkbox,
	Radio,
	Group,
	Stack,
	Text,
	ScrollArea,
	Divider,
} from '@mantine/core';

const SurveyPopup: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const [surveyModalOpened, setSurveyModalOpened] = useState(false);
	const [surveyStep, setSurveyStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		age: '',
		income: '',
		comments: '',
		checkboxes: [] as string[],
		radio1: '',
		radio2: '',
		radio3: '',
	});
	const timeoutRef = useRef<number | null>(null);
	const modalContentRef = useRef<HTMLDivElement>(null);

	// Show popup 10 seconds after mount
	useEffect(() => {
		timeoutRef.current = window.setTimeout(() => setVisible(true), 10000);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	// Auto-scroll modal content annoyingly
	useEffect(() => {
		if (surveyModalOpened && modalContentRef.current) {
			const interval = setInterval(() => {
				if (modalContentRef.current) {
					modalContentRef.current.scrollTop += 5;
					if (
						modalContentRef.current.scrollTop >=
						modalContentRef.current.scrollHeight -
							modalContentRef.current.clientHeight
					) {
						modalContentRef.current.scrollTop = 0;
					}
				}
			}, 100);
			return () => clearInterval(interval);
		}
	}, [surveyModalOpened]);

	const handleStarClick = (rating: number) => {
		setSelectedRating(rating);
		setVisible(false);
		setSurveyModalOpened(true);
		setSurveyStep(1);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		console.log(`User selected rating: ${rating}`);
	};

	const handleNextStep = () => {
		if (surveyStep < 5) {
			setSurveyStep(surveyStep + 1);
			if (modalContentRef.current) {
				modalContentRef.current.scrollTop = 0;
			}
		}
	};

	const handlePrevStep = () => {
		if (surveyStep > 1) {
			setSurveyStep(surveyStep - 1);
			if (modalContentRef.current) {
				modalContentRef.current.scrollTop = 0;
			}
		}
	};

	const handleCheckboxChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			checkboxes: prev.checkboxes.includes(value)
				? prev.checkboxes.filter((c) => c !== value)
				: [...prev.checkboxes, value],
		}));
	};

	const handleSubmit = () => {
		alert(
			'Thank you! Your response has been recorded. We will contact you within 24 hours for a follow-up survey.'
		);
		setSurveyModalOpened(false);
		setFormData({
			name: '',
			email: '',
			phone: '',
			address: '',
			age: '',
			income: '',
			comments: '',
			checkboxes: [],
			radio1: '',
			radio2: '',
			radio3: '',
		});
		setSurveyStep(1);
		timeoutRef.current = window.setTimeout(() => {
			setSelectedRating(null);
			setVisible(true);
		}, 10000);
	};

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
		<>
			{visible && (
				<div style={containerStyle}>
					<div style={titleStyle}>Rate your experience</div>
					<div style={starsContainerStyle}>
						{[1, 2, 3, 4, 5].map((star) => (
							<span
								key={star}
								style={{
									...starStyle,
									color:
										selectedRating && star <= selectedRating
											? '#FFD700'
											: '#ccc',
									borderRadius: '50%',
								}}
								onClick={() => handleStarClick(star)}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform = 'scale(1.3)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = 'scale(1)')
								}
							>
								★
							</span>
						))}
					</div>
					<div style={surveyTextStyle}>
						Click a star to take a short survey.
					</div>
					<div style={linksStyle}>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							Privacy Policy
						</a>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							Terms of Service
						</a>
					</div>
				</div>
			)}

			<Modal
				opened={surveyModalOpened}
				onClose={() => {}}
				title={
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							color: '#ff0000',
							textTransform: 'uppercase',
						}}
					>
						⚠️ REQUIRED: Customer Satisfaction Survey (Step {surveyStep} of 5)
						⚠️
					</div>
				}
				size='xl'
				centered
				closeOnClickOutside={false}
				closeOnEscape={false}
				withCloseButton={false}
				styles={{
					header: {
						backgroundColor: '#fff3cd',
						borderBottom: '3px solid #ff0000',
					},
				}}
			>
				<ScrollArea h={500} ref={modalContentRef}>
					<Stack gap='md'>
						{surveyStep === 1 && (
							<>
								<Text size='sm' c='red' fw={700}>
									* ALL FIELDS ARE REQUIRED. INCOMPLETE FORMS WILL BE REJECTED.
								</Text>
								<TextInput
									label='Full Legal Name (as it appears on your birth certificate)'
									placeholder='Enter your full legal name'
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<TextInput
									label='Email Address (we will send you 3-5 emails per day)'
									placeholder='your.email@example.com'
									type='email'
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<TextInput
									label='Phone Number (including country code, area code, and extension)'
									placeholder='+1 (555) 123-4567 ext. 890'
									required
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<TextInput
									label='Home Address (street, city, state, zip, country)'
									placeholder='123 Main St, City, State 12345, Country'
									required
									value={formData.address}
									onChange={(e) =>
										setFormData({ ...formData, address: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
							</>
						)}

						{surveyStep === 2 && (
							<>
								<Text size='sm' c='red' fw={700}>
									PERSONAL INFORMATION REQUIRED FOR DEMOGRAPHIC ANALYSIS
								</Text>
								<TextInput
									label='Age (must be exact age, not a range)'
									placeholder='Enter your exact age'
									type='number'
									required
									value={formData.age}
									onChange={(e) =>
										setFormData({ ...formData, age: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<TextInput
									label='Annual Household Income (exact amount in USD)'
									placeholder='$50,000'
									required
									value={formData.income}
									onChange={(e) =>
										setFormData({ ...formData, income: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<Divider
									label='REQUIRED: Select ALL that apply'
									labelPosition='center'
								/>
								<Checkbox
									label='I consent to receive marketing emails (required)'
									checked={formData.checkboxes.includes('marketing')}
									onChange={() => handleCheckboxChange('marketing')}
									styles={{ label: { fontWeight: 600 } }}
								/>
								<Checkbox
									label='I consent to receive phone calls (required)'
									checked={formData.checkboxes.includes('phone')}
									onChange={() => handleCheckboxChange('phone')}
									styles={{ label: { fontWeight: 600 } }}
								/>
								<Checkbox
									label='I consent to receive text messages (required)'
									checked={formData.checkboxes.includes('text')}
									onChange={() => handleCheckboxChange('text')}
									styles={{ label: { fontWeight: 600 } }}
								/>
								<Checkbox
									label='I consent to share my data with third-party partners (required)'
									checked={formData.checkboxes.includes('thirdparty')}
									onChange={() => handleCheckboxChange('thirdparty')}
									styles={{ label: { fontWeight: 600 } }}
								/>
								<Checkbox
									label='I have read and agree to the 47-page Terms of Service (required)'
									checked={formData.checkboxes.includes('tos')}
									onChange={() => handleCheckboxChange('tos')}
									styles={{ label: { fontWeight: 600 } }}
								/>
							</>
						)}

						{surveyStep === 3 && (
							<>
								<Text size='sm' c='red' fw={700}>
									RATING QUESTIONS - ALL MUST BE ANSWERED
								</Text>
								<Text fw={600} size='lg'>
									On a scale of 1-10, how would you rate your experience?
								</Text>
								<Radio.Group
									value={formData.radio1}
									onChange={(value) =>
										setFormData({ ...formData, radio1: value })
									}
									required
								>
									<Stack mt='xs'>
										<Radio value='1' label='1 - Terrible' />
										<Radio value='2' label='2 - Very Bad' />
										<Radio value='3' label='3 - Bad' />
										<Radio value='4' label='4 - Poor' />
										<Radio value='5' label='5 - Average' />
										<Radio value='6' label='6 - Above Average' />
										<Radio value='7' label='7 - Good' />
										<Radio value='8' label='8 - Very Good' />
										<Radio value='9' label='9 - Excellent' />
										<Radio value='10' label='10 - Perfect' />
									</Stack>
								</Radio.Group>
								<Divider />
								<Text fw={600} size='lg'>
									How likely are you to recommend us to a friend, family member,
									colleague, neighbor, acquaintance, or stranger?
								</Text>
								<Radio.Group
									value={formData.radio2}
									onChange={(value) =>
										setFormData({ ...formData, radio2: value })
									}
									required
								>
									<Stack mt='xs'>
										<Radio value='definitely' label='Definitely' />
										<Radio value='probably' label='Probably' />
										<Radio value='maybe' label='Maybe' />
										<Radio value='probablynot' label='Probably Not' />
										<Radio value='definitelynot' label='Definitely Not' />
									</Stack>
								</Radio.Group>
							</>
						)}

						{surveyStep === 4 && (
							<>
								<Text size='sm' c='red' fw={700}>
									ADDITIONAL FEEDBACK REQUIRED
								</Text>
								<Text fw={600} size='lg'>
									What is your favorite color? (This helps us personalize your
									experience)
								</Text>
								<Radio.Group
									value={formData.radio3}
									onChange={(value) =>
										setFormData({ ...formData, radio3: value })
									}
									required
								>
									<Stack mt='xs'>
										<Radio value='red' label='Red' />
										<Radio value='blue' label='Blue' />
										<Radio value='green' label='Green' />
										<Radio value='yellow' label='Yellow' />
										<Radio value='purple' label='Purple' />
										<Radio value='orange' label='Orange' />
										<Radio value='pink' label='Pink' />
										<Radio
											value='other'
											label='Other (please specify in comments)'
										/>
									</Stack>
								</Radio.Group>
								<Textarea
									label='Please provide detailed feedback (minimum 500 words required)'
									placeholder="Tell us everything about your experience in great detail. What did you like? What didn't you like? What could we improve? What features would you like to see? What's your favorite memory from using our service? How has this experience changed your life? Please be as detailed as possible..."
									required
									minRows={10}
									value={formData.comments}
									onChange={(e) =>
										setFormData({ ...formData, comments: e.target.value })
									}
									styles={{ label: { fontWeight: 700, fontSize: '1.1rem' } }}
								/>
								<Text size='xs' c='dimmed'>
									* Minimum 500 words required. Current word count:{' '}
									{formData.comments.split(/\s+/).filter(Boolean).length} / 500
								</Text>
							</>
						)}

						{surveyStep === 5 && (
							<>
								<Text size='lg' fw={700} c='red' ta='center'>
									FINAL CONFIRMATION STEP
								</Text>
								<Text size='sm' c='dimmed' ta='center'>
									Please review all your answers carefully. You cannot go back
									after submitting.
								</Text>
								<Divider />
								<Text fw={600}>Name: {formData.name || 'Not provided'}</Text>
								<Text fw={600}>Email: {formData.email || 'Not provided'}</Text>
								<Text fw={600}>Phone: {formData.phone || 'Not provided'}</Text>
								<Text fw={600}>
									Address: {formData.address || 'Not provided'}
								</Text>
								<Divider />
								<Text size='sm' c='red' fw={700}>
									By clicking submit, you agree to:
								</Text>
								<ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
									<li>Receive promotional emails daily</li>
									<li>Allow us to share your information with our partners</li>
									<li>Participate in follow-up surveys</li>
									<li>Allow us to contact you via phone, email, and text</li>
									<li>
										Accept our Terms of Service (which you may not have read)
									</li>
									<li>Allow us to use your feedback for marketing purposes</li>
								</ul>
							</>
						)}

						<Divider />
						<Group justify='space-between'>
							<Button
								variant='subtle'
								onClick={handlePrevStep}
								disabled={surveyStep === 1}
							>
								← Previous
							</Button>
							<Text size='sm' c='dimmed'>
								Step {surveyStep} of 5
							</Text>
							{surveyStep < 5 ? (
								<Button onClick={handleNextStep}>Next →</Button>
							) : (
								<Button color='green' onClick={handleSubmit}>
									Submit Survey ✓
								</Button>
							)}
						</Group>
						<Text size='xs' c='dimmed' ta='center'>
							* This survey cannot be closed. Please complete all steps to
							continue.
						</Text>
					</Stack>
				</ScrollArea>
			</Modal>
		</>
	);
};

export default SurveyPopup;
