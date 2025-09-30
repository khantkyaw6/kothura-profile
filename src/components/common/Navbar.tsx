import KoThuraLogo from '../../assets/ko_thura_logo.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation } from 'react-router'; // 👈 make sure this is from react-router-dom

function Navbar({ theme = 'light' }) {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const isDark = theme === 'dark';
	const textColor = isDark ? 'text-white' : 'text-gray-600';
	const hoverText = isDark ? 'hover:text-gray-300' : 'hover:text-gray-900';
	const bgColor = isDark ? 'bg-black' : 'bg-white';
	const hamburgerColor = isDark ? 'bg-white' : 'bg-black';

	// Helper to check if the current link is active
	const linkClasses = (path: string) =>
		`${textColor} transition ${
			location.pathname === path ? 'font-bold underline' : hoverText
		}`;

	return (
		<header className={`px-4 py-3 ${bgColor}`}>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div>
					<img
						src={KoThuraLogo}
						alt="Ko Thura's Logo"
						className='w-28 md:w-36'
					/>
				</div>

				<nav className='hidden md:flex items-center gap-8'>
					<a href='/youngboss' className={linkClasses('/youngboss')}>
						Young Boss
					</a>
					<a
						href='/consultation'
						className={linkClasses('/consultation')}
					>
						Consultation
					</a>
					<a
						href='/youngmillionaire'
						className={linkClasses('/youngmillionaire')}
					>
						Young Millionaire
					</a>

					<button
						className={`flex items-center gap-2 px-5 py-2 rounded-full transition hover:cursor-pointer ${textColor}`}
					>
						<FontAwesomeIcon icon={faCircleUser} />
						Sign In
					</button>
				</nav>

				{/* Mobile Hamburger */}
				<div className='flex items-center gap-4 md:hidden'>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='flex flex-col justify-between w-6 h-5 z-50 relative'
					>
						<span
							className={`block h-0.5 ${hamburgerColor} transition-transform duration-300 origin-center ${
								isOpen ? 'rotate-45 translate-y-1.5' : ''
							}`}
						></span>
						<span
							className={`block h-0.5 ${hamburgerColor} transition-opacity duration-300 ${
								isOpen ? 'opacity-0' : ''
							}`}
						></span>
						<span
							className={`block h-0.5 ${hamburgerColor} transition-transform duration-300 origin-center ${
								isOpen ? '-rotate-45 -translate-y-3' : ''
							}`}
						></span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 ${bgColor} transform transition-transform duration-300 z-40 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<nav className='p-6 flex flex-col gap-6 text-lg mt-5'>
					<a
						href='/youngboss'
						onClick={() => setIsOpen(false)}
						className={linkClasses('/youngboss')}
					>
						Young Boss
					</a>
					<a
						href='/consultation'
						onClick={() => setIsOpen(false)}
						className={linkClasses('/consultation')}
					>
						Consultation
					</a>
					<a
						href='/youngmillionaire'
						onClick={() => setIsOpen(false)}
						className={linkClasses('/youngmillionaire')}
					>
						Young Millionaire
					</a>
					<button
						onClick={() => setIsOpen(false)}
						className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg ${textColor}`}
					>
						<FontAwesomeIcon icon={faCircleUser} />
						Sign In
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
