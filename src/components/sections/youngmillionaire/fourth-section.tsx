import GroupOne from '../../../assets/group_one.avif';
import GroupTwo from '../../../assets/group_two.avif';
import { handleCheckout } from '../../helper/paypalCheckout';

function FourthSection() {
	return (
		<div className='mb-5 px-[15px]'>
			<div className='text-center mt-20'>
				<h2 className='roboto-normal-regular text-(--text-color) text-sm md:text-2xl tracking-widest'>
					<span>Entrepreneurs' TESTIMONIALS</span>
				</h2>
				<h1 className='roboto-condensed-bold text-(--text-color) capitalize mt-2.5'>
					<span className='font-normal text-2xl md:text-5xl'>
						What others are saying about us
					</span>
				</h1>
				<div className='mt-16'>
					<div className='my-4 md:flex md:justify-center'>
						<img
							src={GroupOne}
							className='md:w-[90%]'
							alt='group photo one'
						/>
					</div>
					<div className='my-10 md:flex md:justify-center'>
						<img
							src={GroupTwo}
							className='md:w-[90%]'
							alt='group photo two'
						/>
					</div>
				</div>
				<div className='py-5 flex justify-center'>
					<button
						className='btn-grad flex flex-col md:w-[70%]  md:px-8 md:py-4 md:h-20'
						onClick={handleCheckout}
					>
						<a>
							<span className='text-(--btn-text-color) text-xl md:text-3xl roboto-condensed-bold'>
								🔥 CLAIM MY EARLY BIRD DISCOUNT NOW
							</span>
							<br />
							<span className='text-(--btn-text-color) text-xs md:text-base font-extralight font-'>
								Before It Goes Back to $200 on September 1st
							</span>
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default FourthSection;
