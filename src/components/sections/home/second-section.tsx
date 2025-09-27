import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePageTwo from '../../../assets/home_two.webp';
import HomeDoubleOne from '../../../assets/home_double_one.avif';
import HomeDoubleTwo from '../../../assets/home_double_two.webp';
import HomeDoubleThree from '../../../assets/home_double_three.avif';
import {
	faFacebook,
	faTiktok,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function SecondSection() {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:my-20'>
				<div className='flex justify-center items-center'>
					<img
						className='w-full px-3'
						src={HomePageTwo}
						alt='Ko Thura , 6 months double'
					/>
				</div>

				<div className='flex flex-col justify-center px-1 gap-1'>
					<h1 className='text-2xl font-extrabold poppins-regular'>
						<span>About Ko Thura</span>
					</h1>
					<p className='text-xl mt-2 poppins-regular font-light'>
						<span>
							Helping Entrepreneurs Grow Since 2015
							<br />
							<br />
							Ko Thura is a business coach, trainer, and
							consultant with over 9 years of experience helping
							entrepreneurs, small business owners, and corporate
							leaders achieve growth and profitability.
							<br />
							<br />
							He has guided hundreds of business owners in
							developing profitable strategies, building effective
							marketing plans, improving sales systems, and
							becoming stronger leaders.
							<br />
							<br />
							Today, Ko Thura is expanding his reach
							internationally, sharing his proven business, sales,
							marketing, and leadership training with a global
							audience.
						</span>
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0 mt-5'>
				<div className='w-full md:w-1/3 px-3'>
					<img
						className='w-full '
						src={HomeDoubleOne}
						alt='Ko Thura , 6 months double'
					/>
				</div>
				<div className='w-full md:w-1/3 px-3'>
					<img
						className='w-full '
						src={HomeDoubleTwo}
						alt='Ko Thura , 6 months double'
					/>
				</div>
				<div className='w-full md:w-1/3 px-3'>
					<img
						className='w-full '
						src={HomeDoubleThree}
						alt='Ko Thura , 6 months double'
					/>
				</div>
			</div>

			<div className='bg-[#1C1F33] text-center p-10 my-20'>
				<h1 className='text-lg md:text-5xl my-5 text-white poppins-regular font-bold mt-4'>
					<span>Get To Know Ko Thura Better</span>
				</h1>
				<h2 className='poppins-regular text-(--orange-text) text-sm md:text-xl font-medium'>
					<span>Engage, learn, and collaborate</span>
				</h2>
				<div className='grid grid-cols-1 md:flex justify-center gap-4'>
					<div className='p-4 text-center'>
						<a
							target='_blank'
							href='youtube.com/@KoThuraMOE/'
							className='hover:cursor-pointer'
						>
							<FontAwesomeIcon
								icon={faYoutube}
								className='text-(--orange-text) mt-1 text-5xl'
							/>
						</a>
					</div>
					<div className='p-4 text-center'>
						<a
							className='hover:cursor-pointer'
							target='_blank'
							href='https://www.facebook.com/profile.php?id=61579151540592'
						>
							<FontAwesomeIcon
								icon={faFacebook}
								className='text-(--orange-text) mt-1 text-5xl'
							/>
						</a>
					</div>
					<div className='p-4 text-center'>
						<a
							className='hover:cursor-pointer'
							target='_blank'
							href='https://www.tiktok.com/@kothura.moe'
						>
							<FontAwesomeIcon
								icon={faTiktok}
								className='text-(--orange-text) mt-1 text-5xl'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecondSection;
