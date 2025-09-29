import { useState } from 'react';

import FirstSection from '../components/sections/home/first-section';
import SecondSection from '../components/sections/home/second-section';
import ThirdSection from '../components/sections/home/third-section';
import FourthSection from '../components/sections/home/fourth-section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import KoThuraLogo from '../assets/ko_thura_logo.avif';

function Home() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='text-black'>
			<header className='px-4 py-3'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					<div>
						<img
							src={KoThuraLogo}
							alt="Ko Thura's Logo"
							className='w-28 md:w-36'
						/>
					</div>

					<nav className='hidden md:flex items-center gap-8'>
						<a
							href='/youngboss'
							className='text-gray-600 hover:text-gray-900 transition'
						>
							Young Boss
						</a>
						<a
							href='/consultation'
							className='text-gray-600 hover:text-gray-900 transition'
						>
							Consultation
						</a>
						<a
							href='/youngmillionaire'
							className='text-gray-600 hover:text-gray-900 transition'
						>
							Young Millionaire
						</a>

						{/* Sign In button */}
						<button className='flex items-center gap-2 px-5 py-2   rounded-full transition hover:cursor-pointer'>
							<FontAwesomeIcon icon={faCircleUser} />
							Sign In
						</button>
					</nav>

					{/* Mobile Navigation (Hamburger) */}
					<div className='flex items-center gap-4 md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='flex flex-col justify-between w-6 h-5 z-50 relative'
						>
							<span
								className={`block h-0.5 bg-black transition-transform duration-300 origin-center ${
									isOpen ? 'rotate-45 translate-y-1.5' : ''
								}`}
							></span>
							<span
								className={`block h-0.5 bg-black transition-opacity duration-300 ${
									isOpen ? 'opacity-0' : ''
								}`}
							></span>
							<span
								className={`block h-0.5 bg-black transition-transform duration-300 origin-center ${
									isOpen ? '-rotate-45 -translate-y-3' : ''
								}`}
							></span>
						</button>
					</div>
				</div>

				{/* Fullscreen Mobile Menu */}
				<div
					className={`fixed inset-0 bg-white  transform transition-transform duration-300 z-40 ${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					<nav className='p-6 flex flex-col gap-6 text-lg mt-5'>
						<a
							href='/youngboss'
							onClick={() => setIsOpen(false)}
							className='hover:text-blue-600'
						>
							Young Boss
						</a>
						<a
							href='/consultation'
							onClick={() => setIsOpen(false)}
							className='hover:text-blue-600'
						>
							Consultation
						</a>
						<a
							href='/youngmillionaire'
							onClick={() => setIsOpen(false)}
							className='hover:text-blue-600'
						>
							Young Millionaire
						</a>
						<button
							onClick={() => setIsOpen(false)}
							className='mt-4 flex items-center gap-2 px-4 py-2 rounded-lg'
						>
							<FontAwesomeIcon icon={faCircleUser} />
							Sign In
						</button>
					</nav>
				</div>
			</header>

			<main className='p-4'>
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<p className='text-center text-[12px] mt-5 zilla-slab-thin '>
					<span>Powered By MOT</span>
				</p>
			</main>
		</div>
	);
}

export default Home;
