import { useState, useEffect } from 'react';
import HomePageOne from '../../../assets/home_one.webp';
import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';

function FirstSection() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, []);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout(); // redirects if successful
		} catch (error) {
			console.error(error);
			setLoading(false); // reset on error only
		}
	};

	return (
		<div className='md:mt-10'>
			<div className='text-center'>
				<h1 className='text-base md:text-2xl font-bold poppins-regular'>
					<span>Young Millionaire</span>
				</h1>
				<h1 className='mt-2 poppins-regular text-3xl md:text-6xl font-extrabold'>
					<span>"School Teaches Math… But Who Teaches Money?"</span>
				</h1>
				<h2 className='text-[12px] md:text-lg poppins-regular mt-2 font-semibold'>
					<span>
						"Fun, easy lessons that show kids (ages 8–15) how money
						works, how business is built, and how to think like a
						leader."
					</span>
				</h2>
			</div>
			<div className='md:flex flex-row-reverse mt-10 items-center'>
				<div className='flex justify-center mt-2 md:w-1/2'>
					<img
						className='rounded-3xl w-56 h-56 md:w-[80%] md:h-80'
						src={HomePageOne}
						alt='6 month , double'
					/>
				</div>

				<div className='mt-4 poppins-regular font-normal md:w-1/2 md:text-left text-center px-4'>
					<p className='text-lg md:text-xl'>
						"Hi, I’m Ko Thura – business coach and consultant with
						9+ years of experience helping entrepreneurs grow their
						profits. Now, I’m bringing my proven business, sales,
						and leadership lessons to the next generation."
					</p>
					<button
						onClick={onCheckout}
						disabled={loading}
						type='submit'
						className={`bg-amber-500 mt-4 md:mt-8 text-white px-6 py-3 rounded-2xl text-base md:text-2xl hover:cursor-pointer flex items-center justify-center transition w-full ${
							loading
								? 'opacity-80 cursor-not-allowed'
								: 'cursor-pointer'
						}`}
					>
						{loading ? (
							<div className='flex items-center justify-center gap-3'>
								<Spinner />
								<span className='text-white font-bold text-lg md:text-xl'>
									Processing...
								</span>
							</div>
						) : (
							'YES! I Want My Child to Join Young Millionaire'
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default FirstSection;
