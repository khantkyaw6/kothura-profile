import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';
import { useState, useEffect } from 'react';

function ThirdSection() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log('in use effect');
		// setLoading(false);
		const handleFocus = () => setLoading(false);
		window.addEventListener('focus', handleFocus);
		return () => window.removeEventListener('focus', handleFocus);
	}, []);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout();
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	return (
		<div className='my-10 bg-white shadow-lg p-5'>
			<div className='text-center px-5'>
				<h1 className='text-4xl md:text-7xl text-(--color-danger) poppins-regular font-bold'>
					<span>Double Your Profits</span>
				</h1>
				<h1 className='poppins-regular text-3xl md:text-7xl px-20 mt-5'>
					<span>by Working Harder on the Right Things</span>
				</h1>
				<h2 className='poppins-regular text-center text-lg md:text-3xl mt-10 px-10'>
					<span>
						In one focused hour with Ko Thura, you’ll uncover your
						biggest profit leaks, get a step-by-step growth plan,
						and know exactly what to prioritize next.
					</span>
				</h2>
			</div>

			<div className='mt-10'>
				<p className='text-base md:text-3xl px-10 poppins-regular leading-relaxed font-extralight'>
					<span>
						✔️ Profit Leak Audit – Find out where your money is
						slipping away.
						<br />
						<br />
						✔️ Growth Roadmap – Step-by-step strategy tailored for
						your business.
						<br />
						<br />
						✔️ Clarity & Focus – Know exactly what to do, what to
						fix, and what to prioritize.
					</span>
				</p>
			</div>

			<div className='py-5 flex justify-center'>
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
							<span className='text-black text-xl md:text-6xl roboto-condensed-bold'>
								Processing...
							</span>
						</span>
					) : (
						<>
							<span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#E6C200] rounded group-hover:-mr-4 group-hover:-mt-4'>
								<span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
							</span>
							<span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#f0cd01] rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
							<span className='relative w-full text-center text-black transition-colors duration-200 ease-in-out group-hover:text-(--btn-text-color) text-xl md:text-6xl roboto-condensed-bold'>
								INVEST FOR $399
							</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
}

export default ThirdSection;
