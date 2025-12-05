import FullPageArticle from './article';
import CookieOptionsBar from './cookies';
import NewsletterModal from './newsletter';
import FreeEbookSidebar from './ebook';
import MyBlogLoginCard from './google';
import AdblockerModal from './adblocker';
import SurveyPopup from './survey';
import AppPromoBanner from './downloadapp';
import TabloidHeadlines from './tabloid';
import AiChatWidget from './ai';
import NotificationPermissionPopup from './notifications';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
function App() {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<MantineProvider>
				<div>
					<NewsletterModal />
					<FullPageArticle />
					<AiChatWidget />
					<CookieOptionsBar />
					<FreeEbookSidebar />
					<MyBlogLoginCard />
					<AdblockerModal />
					<SurveyPopup />
					<AppPromoBanner />
					<TabloidHeadlines />
					<NotificationPermissionPopup />
				</div>
			</MantineProvider>
		</div>
	);
}

export default App;
