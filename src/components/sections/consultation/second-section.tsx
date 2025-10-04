import ConsultationProfile from '../../../assets/consultation_profile.avif';
import ConsultationShowOne from '../../../assets/consultation_show_one.webp';
import ConsultationShowTwo from '../../../assets/consultation_show_two.avif';
import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';
import { useState, useEffect } from 'react';

function SecondSection() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
	}, []);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout();
			// redirect happens if success
		} catch (error) {
			console.error(error);
			setLoading(false); // reset only on error
		}
	};

	return (
		<div className='mt-10'>
			<h1 className='poppins-regular text-(--text-color) text-xl md:text-3xl text-center font-bold px-8'>
				<span>
					FINALLY: A Business Growth System That Doubles Profits
					Without Wasting Years On Trial And Error – In 2025!
				</span>
			</h1>
			<div className='my-10 bg-white shadow-lg p-5 mx-5'>
				<div className='flex flex-col md:flex-row md:gap-8'>
					<div className='md:w-2/6 w-full flex justify-center'>
						<img
							src={ConsultationProfile}
							alt='Ko Thura in Consultation section'
							className='shadow-sm rounded object-cover h-full'
						/>
					</div>

					<div className='md:w-4/6 w-full'>
						<p className='poppins-regular font-extralight text-sm md:text-xl leading-relaxed'>
							<span>
								Let’s face it,
								<br />
								<br />
								Running a business today is harder than ever.
								<br />
								<br />
								What worked last year doesn’t work anymore.
								<br />
								What worked 6 months ago is already outdated.
								<br />
								<br />
								Most “consultants” teaching business growth
								haven’t actually built or scaled a real company
								in years.
								<br />
								<br />
								They’re teaching outdated methods that leave you
								overworked, underpaid, and frustrated.
								<br />
								<br />
								The biggest challenge? PROFITS.
								<br />
								<br />
								If you don’t have a proven way to identify where
								your money is leaking and how to fix it… your
								business will stay stuck.
							</span>
						</p>
					</div>
				</div>
			</div>

			<h1 className='poppins-regular text-(--text-color) text-xl md:text-3xl text-center font-bold px-10'>
				<span>
					BUT KO THURA, “HOW AM I SUPPOSED TO DOUBLE PROFITS WITHOUT
					SPENDING MORE?”
				</span>
			</h1>

			<div className='my-10 shadow-lg p-5 mx-5'>
				<div className='flex flex-col md:flex-row md:items-stretch md:gap-8'>
					{/* Image container */}
					<div className='md:w-1/4 w-full flex justify-center mb-6 md:mb-0'>
						<img
							src={ConsultationShowOne}
							alt='Ko Thura in Consultation section'
							className='shadow-sm mt-3 rounded h-full object-cover'
						/>
					</div>

					{/* Text container */}
					<div className='md:w-3/4 w-full'>
						<p className='poppins-regular font-extralight text-sm md:text-xl leading-relaxed text-(--text-color)'>
							<span>
								I got you covered.
								<br />
								<br />
								Right now, the key isn’t about working harder…
								it’s about working smarter.
								<br />
								<br />
								Forget endless marketing hacks.
								<br />
								Forget risky investments.
								<br />
								Forget wasting money on things that don’t move
								the needle.
								<br />
								<br />
								This is the new frontier… and trust me, doubling
								profits in 2025 requires clarity, focus, and the
								right strategy.
							</span>
						</p>
					</div>
				</div>
			</div>

			<h1 className='poppins-regular text-(--text-color) text-xl md:text-3xl text-center font-bold px-10'>
				<span>WHY SHOULD YOU LISTEN TO ME?</span>
			</h1>

			<div className='my-10 shadow-lg p-5 mx-5'>
				<div className='flex flex-col md:flex-row md:items-stretch md:gap-8'>
					{/* Image container */}
					<div className='md:w-1/4 w-full flex justify-center mb-6 md:mb-0'>
						<img
							src={ConsultationShowTwo}
							alt='Ko Thura in Consultation section'
							className='shadow-sm mt-3 rounded h-full object-cover'
						/>
					</div>

					{/* Text container */}
					<div className='md:w-3/4 w-full'>
						<p className='poppins-regular font-extralight text-sm md:text-xl leading-relaxed text-(--text-color)'>
							<span>
								I’ve been consulting entrepreneurs and SMEs for
								9+ years.
								<br />
								<br />
								I’ve guided companies across retail,
								construction, clothing, and services to multiply
								their revenue.
								<br />
								<br />
								My clients have seen results like 200%+ profit
								growth in under a year.
								<br />
								<br />
								I charge $399/hour for private consultations —
								because my strategies work.
								<br />
								<br />
								But more importantly — I’m still in the trenches
								every single day, working with real
								entrepreneurs, solving real problems, and seeing
								what actually drives profit RIGHT NOW.
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className='py-5 px-5 flex justify-center'>
				<button
					onClick={onCheckout}
					disabled={loading}
					className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all md:w-[60%] bg-[#FFD700] rounded-xl group ${
						loading
							? 'opacity-70 cursor-not-allowed'
							: 'cursor-pointer'
					}`}
				>
					{loading ? (
						<span className='flex items-center gap-3'>
							<Spinner />
							<span className='text-black text-xl md:text-3xl roboto-condensed-bold'>
								Processing...
							</span>
						</span>
					) : (
						<>
							<span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#E6C200] rounded group-hover:-mr-4 group-hover:-mt-4'>
								<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
							</span>
							<span className='absolute bg-[#f0cd01] rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
							<span className='relative w-full text-left md:text-center text-black transition-colors duration-200 ease-in-out group-hover:text-(--btn-text-color) text-xl md:text-4xl roboto-condensed-bold'>
								Book My Profit Growth Session – $399
								<br />
								<div className='text-sm'>
									Only a few consultation slots open this
									month – secure yours today.
								</div>
							</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
}

export default SecondSection;
