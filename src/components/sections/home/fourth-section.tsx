import { useState } from 'react';
import YoungBossProgram from '../../../assets/kothura_youngboss_program.avif';
import KoThuraLogo from '../../../assets/ko_thura_logo.avif';
import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';

function FourthSection() {
	const [loading, setLoading] = useState(false);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout(); // redirects if successful
		} catch (error) {
			console.error(error);
			setLoading(false); // reset only on error
		}
	};

	return (
		<div>
			<div className='bg-black py-6'>
				<div className='flex flex-col md:flex-row gap-4'>
					<div className='w-full md:w-2/5'>
						<img src={YoungBossProgram} />
					</div>
					<div className='w-full md:w-3/5'>
						<div className='md:flex md:flex-col md:px-12 gap-5'>
							<div className='flex flex-col text-center px-2 gap-3'>
								<h1 className='text-white text-xl md:text-4xl font-bold poppins-regular md:my-5'>
									<span>
										Start Your Child’s First Business for
										Just $5
									</span>
								</h1>
								<p className='text-white text-sm md:text-lg poppins-regular font-extralight'>
									<span>
										Click the button below to grab instant
										access to the Young Boss Starter Pack —
										the fun, step-by-step training that
										shows kids (ages 8–15) how to earn their
										first $10–$50.
									</span>
								</p>
							</div>
						</div>
						<div className='text-center md:my-5'>
							<button
								onClick={onCheckout}
								disabled={loading}
								type='submit'
								className={`bg-amber-500 text-white p-3 rounded-4xl w-[90%] flex items-center justify-center transition ${
									loading
										? 'opacity-80 cursor-not-allowed'
										: ''
								}`}
							>
								{loading ? (
									<div className='flex items-center justify-center gap-3'>
										<Spinner />
										<span className='font-bold text-base md:text-2xl'>
											Processing...
										</span>
									</div>
								) : (
									<span className='text-xl md:text-3xl'>
										YES! I’M READY TO GET STARTED FOR $5
									</span>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-gray-500 md:mt-20 shadow-lg py-5 text-white grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
				<div className='p-4 text-center'>
					<div className='flex justify-center'>
						<img src={KoThuraLogo} className='w-[75%]' />
					</div>
				</div>
				<div className='p-4'>
					<p className='text-base md:text-lg'>
						<span className='uppercase font-medium'>Pages</span>
					</p>
					<ul className='text-sm md:text-base'>
						<li>Home</li>
						<li>
							<a
								target='_blank'
								href='https://www.facebook.com/permalink.php?story_fbid=pfbid02qbzsp1gyKEor7odGhmXLgPQDgDtXHLWWyE52ZJ126pyrmciSdEtNERj9A6PPbZfWl&id=61579151540592'
							>
								About Us
							</a>
						</li>
						<li>Contact Us</li>
						<li>Products</li>
					</ul>
				</div>
				<div className='p-4'>
					<p className='text-base md:text-lg'>
						<span className='uppercase font-medium'>Social</span>
					</p>
					<ul className='text-sm md:text-base'>
						<li>
							<a
								target='_blank'
								href='https://www.facebook.com/profile.php?id=61579151540592'
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href='https://www.tiktok.com/@kothura.moe'
							>
								Tiktok
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href='https://www.youtube.com/@KoThuraMOE/shorts'
							>
								Youtube
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FourthSection;
