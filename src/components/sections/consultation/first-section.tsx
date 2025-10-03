import ConsultationOne from '../../../assets/consultation_one.webp';
import ConsultationTwo from '../../../assets/consultation_two.webp';
import ConsultationThree from '../../../assets/consultation_three.avif';
import ConsultationFour from '../../../assets/consultation_four.webp';
import ConsultationFive from '../../../assets/consultation_five.jpg';
import ConsultationSix from '../../../assets/consultation_six.jpg';
import { handleCheckout } from '../../helper/paypalCheckout';
import { useState } from 'react';
import Spinner from '../../common/Spinner';

function FirstSection() {
	const [loading, setLoading] = useState(false);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout();
			// ⚠️ Once handleCheckout finishes, it redirects to PayPal
			// so we don’t actually reach here unless there’s an error.
		} catch (error) {
			console.error(error);
			setLoading(false); // only reset if there’s an error
		}
	};
	return (
		<div>
			<div className='mt-[20px]'>
				<h1 className='poppins-regular text-(--text-color) text-center mt-10 px-10 text-3xl md:text-6xl font-bold'>
					<span>Double Your Business Profits</span>
				</h1>
				<h1 className='poppins-regular text-red-600 px-10  text-center text-3xl md:text-7xl font-bold'>
					<span className='uppercase'>in 90 Days or Less</span>
				</h1>
				<h1 className='poppins-regular text-(--text-color) text-2xl md:text-3xl text-center font-bold px-4'>
					<span>
						In just one consultation, you’ll discover the exact
						steps to fix leaks, focus on the right actions, and
						double your business profits
					</span>
				</h1>
				<hr className='border-t-2 md:border-t-4 border-white w-1/6 md:w-1/5   mx-auto my-4' />
				<h1 className='poppins-regular text-(--text-color) text-xl md:text-2xl text-center font-light px-4 italic'>
					<span className='capitalize'>
						you can potentially 2X your business in
						<span className='uppercase'> a FRACTION </span>
						of the time it would normally take!
					</span>
				</h1>
			</div>
			<div className='mt-10 p-10'>
				<div className='grid md:grid-cols-3 gap-8'>
					<img src={ConsultationOne} className='shadow-sm mt-3' />
					<img src={ConsultationTwo} className='shadow-sm' />
					<img src={ConsultationThree} className='shadow-sm' />
					<img src={ConsultationFour} className='shadow-sm' />
					<img src={ConsultationFive} className='shadow-sm' />
					<img src={ConsultationSix} className='shadow-sm' />
				</div>
			</div>
			{/* <div className='py-5 flex justify-center'>
				<button
					disabled={loading}
					onClick={onCheckout}
					className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all  bg-[#FFD700] rounded-xl group md:w-[50%]'
				>
					<span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#E6C200] rounded group-hover:-mr-4 group-hover:-mt-4'>
						<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
					</span>
					<span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#f0cd01] rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
					<span className='relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-(--btn-text-color) text-xl md:text-4xl roboto-condensed-bold'>
						Yes! I want to double my profits
					</span>
				</button>
			</div> */}
			<div className='py-5 flex justify-center'>
				<button
					disabled={loading}
					onClick={onCheckout}
					className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#FFD700] rounded-xl group md:w-[50%] ${
						loading ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					{loading ? (
						<span className='flex justify-center items-center w-full'>
							<Spinner /> {/* your custom spinner */}
							<span className='ml-2 text-black text-xl md:text-3xl roboto-condensed-bold'>
								Processing...
							</span>
						</span>
					) : (
						<>
							<span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#E6C200] rounded group-hover:-mr-4 group-hover:-mt-4'>
								<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
							</span>
							<span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#f0cd01] rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
							<span className='relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-(--btn-text-color) text-xl md:text-4xl roboto-condensed-bold'>
								Yes! I want to double my profits
							</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
}

export default FirstSection;
