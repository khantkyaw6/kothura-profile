import LayoutWrapper from './components/common/LayoutWrapper';
import { createBrowserRouter } from 'react-router';
import YoungMillionaire from './pages/young-millionaire';
import HelmetWrapper from './components/common/HelmetWrapper';
import Consultation from './pages/consultation';
import YoungBoss from './pages/young-boss';
import Home from './pages/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutWrapper className={'bg-white'} />,
		children: [
			{
				index: true,
				element: (
					<HelmetWrapper title='Home'>
						<Home />
					</HelmetWrapper>
				),
			},
			{
				path: 'youngboss',
				element: (
					<HelmetWrapper
						title='Young Boss Program'
						description='Empower young minds with the Young Boss Program, designed to cultivate leadership and business skills from an early age.'
						content='Young Boss Program, Leadership, Business Skills'
					>
						<YoungBoss />
					</HelmetWrapper>
				),
			},
		],
	},
	{
		path: '/',
		element: <LayoutWrapper className={'bg-black'} />,
		children: [
			{
				path: 'youngmillionaire',
				element: (
					<HelmetWrapper
						title='Young Millionaire Program'
						description='Join the Young Millionaire Program to learn the secrets of business and entrepreneurship from a young age.'
						content='Young Millionaire Program, Business, Entrepreneurship, Financial Education'
					>
						<YoungMillionaire />
					</HelmetWrapper>
				),
			},
			{
				path: 'consultation',
				element: (
					<HelmetWrapper
						title="Ko Thura's Consultation"
						description='Get expert business consultation from Ko Thura, a successful entrepreneur and mentor.'
						content='Business Consultation, Entrepreneurship, Mentorship'
					>
						<Consultation />
					</HelmetWrapper>
				),
			},
		],
	},
]);

export default router;
