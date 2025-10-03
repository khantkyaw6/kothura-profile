import { useState } from 'react';
import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';

function FirstSection() {
	const [loading, setLoading] = useState(false);

	const onCheckout = async () => {
		setLoading(true);
		try {
			await handleCheckout(); // redirects if successful
		} catch (error) {
			console.error(error);
			setLoading(false); // reset on error
		}
	};
	return (
		<>
			<div className='mt-[20px] pb-0.5'>
				<h1 className='px-11 text-center text-(--text-color) text-3xl md:text-[5rem] roboto-condensed-bold '>
					<span>
						“Most Teens Graduate Without Ever Learning How Money
						Works. That Ends Here.”
					</span>
				</h1>
			</div>
			<div className='px-[15px] '>
				<div className='py-[10px] md:px-[60px]'>
					<h2 className='text-(--text-color) text-center px-[18px] md:[px-[50px]] text-base md:text-[2rem] roboto-light-italic'>
						<span>
							Join the step-by-step training that teaches
							teenagers how to sell, earn, and build real-world
							business skills before they even finish school.
						</span>
					</h2>
				</div>

				<div className='my-5'>
					<div className='px-6'>
						<iframe
							className='w-full md:h-[600px]'
							src='https://www.youtube.com/embed/E6xX0MuvbqM?si=gah9rlQ3milGaG-Z'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						></iframe>
					</div>
				</div>
				<div className='mt-20 mb-5 mx-auto max-w-2xl px-4 md:mt-40'>
					<p className='text-(--para-text-color) text-base zilla-slab-regular md:text-xl'>
						<span>
							Hey there,
							<br />
							<br />
							Let me ask you something that nobody in school ever
							asked you:
							<br />
							<br />
							Do you know how money actually works?
							<br />
							<br />
							Not how to add it.
							<br />
							Not how to save it.
							<br />
							I mean… do you know how to make it?
							<br />
							<br />
							If you're like most people, the answer is no.
							<br />
							Because school was never designed to teach you that.
							<br />
							<br />
							They teach you how to follow rules. Memorize things.
							Get good grades.
							<br />
							Then what?
							<br />
							<br />
							➡️ Graduate
							<br />
							➡️ Get a job
							<br />
							➡️ Work for someone else
							<br />
							➡️ Wait for a paycheck
							<br />
							➡️ Repeat
							<br />
							<br />
							But what if you started learning something
							different?
							<br />
							<br />
							What if you understood how to turn your ideas into
							money?
							<br />
							What if you could sell, earn, and grow — even while
							you're still in school?
							<br />
							<br />
							That’s exactly why I created the Young Millionaire
							Academy.
							<br />
							<br />
							It’s a program built for teenagers who are ready to
							think bigger.
							<br />
							Not in a "get rich quick" way. In a “learn the real
							stuff early” kind of way.
							<br />
							<br />
							Here’s what we’ll teach you:
							<br />
							<br />
							✅ How to spot business opportunities around you
							<br />
							✅ How to sell without sounding salesy
							<br />
							✅ How to build systems that make you money
							<br />✅ And most importantly — how to believe in
							yourself when no one else does
						</span>
					</p>
					<div className='py-5 flex justify-center'>
						<button
							onClick={onCheckout}
							disabled={loading}
							className={`btn-grad flex flex-col md:w-full md:px-8 md:py-4 md:h-20 items-center justify-center transition ${
								loading ? 'opacity-80 cursor-not-allowed' : ''
							}`}
						>
							{loading ? (
								<div className='flex items-center justify-center gap-3'>
									<Spinner />
									<span className='text-(--btn-text-color) text-xl md:text-3xl roboto-condensed-bold'>
										Processing...
									</span>
								</div>
							) : (
								<>
									<span className='text-(--btn-text-color) text-xl md:text-3xl roboto-condensed-bold'>
										Join Young Millionaire Program
									</span>
									<br />
									<span className='text-(--btn-text-color) text-xs md:text-base font-extralight capitalize'>
										Pre Roll for $97
									</span>
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default FirstSection;
