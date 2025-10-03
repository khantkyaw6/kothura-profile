import { useState } from 'react';
import ProfileImg from '../../../assets/profile.avif';
import { handleCheckout } from '../../helper/paypalCheckout';
import Spinner from '../../common/Spinner';

function ThirdSection() {
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
		<div className='my-5 px-[15px] md:px-[30px]'>
			<p className='text-(--para-text-color) text-base md:text-xl zilla-slab-regular my-16'>
				<span>
					Business is just this — two people exchanging what they
					want.
					<br /> <br />
					That’s it....
					<br /> <br />
					Don’t take that lightly.
					<br /> <br />
					Because if you don’t truly understand this, nothing else
					will make sense.
					<br />
					Let me show you how it works:
					<br /> <br />
					Would you ever trade your $20 for someone else’s $20?
					<br />
					No way....!
					<br />
					Why bother? It’s the same thing.
					<br />
					But…
					<br />
					What if someone offered you a hot, cheesy pepperoni pizza
					stacked with meat for $20?
					<br />
					Now that’s different.
					<br />
					If you’re a pizza lover, your answer is yes — without even
					thinking twice.
					<br />
					Because now there’s a real value exchange happening.
					<br />
					You want pizza.
					<br />
					They want your money.
					<br /> <br />
					That’s business — plain and simple.
					<br /> <br />
					Before you start worrying about profit margins, breakeven
					points, or fancy spreadsheets…
					<br />
					Understand this:
					<br />
					Business only happens when both sides actually want what the
					other has.
					<br /> <br />
					No value = no deal.
					<br /> <br />
					No desire = no business.
					<br /> <br />
					It’s that simple.
					<br />
					Yeah, you’ll still need to learn what things like margin,
					cost, and profit mean…
					<br />
					But we’re not going to throw boring graphs, lectures, or
					math formulas at you.
					<br />
					Instead, at Young Millionaire Academy,
					<br />
					we’ll teach you how business works in a way that even a kid
					could understand — and apply.
					<br />
					Because once you really get it,
					<br />
					you’ll start seeing opportunities everywhere.
					<br /> <br />
					Ready to learn the game?
				</span>
			</p>
			<hr className='border-gray-700 mb-10' />
			<div className='px-2.5'>
				<h1 className='bree-serif-bold text-xl md:text-5xl md:px-16 text-(--text-color) text-center'>
					<span>
						“Everyone Wants to Get Rich. But Very Few Understand
						What Money Truly Is.”
					</span>
				</h1>
				<div className='py-5 flex justify-center'>
					<button
						onClick={onCheckout}
						disabled={loading}
						className={`btn-grad flex flex-col md:w-[70%] md:h-20 md:px-8 md:py-4 items-center justify-center transition ${
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
							<span className='text-(--btn-text-color) text-xl md:text-3xl roboto-condensed-bold'>
								Join Now for $97 – Limited Until September 1st
							</span>
						)}
					</button>
				</div>
			</div>
			<hr className='border-gray-700 mb-10' />
			<div className='text-center '>
				<h1 className='text-2xl md:text-6xl bree-serif-bold text-(--text-color)'>
					<span>Meet The Founder, Kyaw Thura</span>
				</h1>
				<h1 className='zilla-slab-regular text-base md:text-4xl mt-2  text-(--text-color)'>
					<span>Over 10 Years in The Industry</span>
				</h1>
				<div className='mt-4 flex justify-center'>
					<img
						className='w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover'
						src={ProfileImg}
					/>
				</div>
			</div>
			{/* <div className='py-2.5 px-10'> */}
			<div className='mt-20 mb-5 mx-auto max-w-2xl px-4 md:mt-40'>
				<p className='text-(--para-text-color) text-base zilla-slab-regular md:text-xl'>
					<span>
						Hi, I’m Ko Thura.
						<br /> <br />
						For the past 10 years, I’ve been helping business owners
						grow their companies — not by working harder, but by
						thinking smarter.
						<br />
						My strategies have guided over 10,000 entrepreneurs to
						double their growth, simplify their systems, and build
						sustainable success.
						<br />
						But along the way, I noticed something interesting...
						<br />
						Many of these business owners brought their children to
						my events — curious, full of questions, and hungry to
						learn.
						<br />
						<br />
						So I launched Young Boss, a private program for the
						children of my clients.
						<br /> <br />
						And something amazing happened:
						<br /> <br />
						These teens started building faster, smarter, and with
						more confidence than even their parents expected.
						<br />
						Some of them made their first sales before they turned
						16.
						<br />
						Some already run online stores.
						<br />A few now mentor their friends on how business
						works.
						<br />
						<br />
						That’s when it hit me:
						<br />
						What if every teenager had access to this kind of
						knowledge — not just the children of business owners?
						<br />
						<br />
						That’s why I created Young Millionaire Academy — a
						program built specifically for teens around the world
						who want to learn the truth about money, business, and
						how to create a life they control.
						<br />
						<br />
						If you’re young, curious, and ready to do things
						differently —
						<br />
						I’ll teach you everything I’ve taught entrepreneurs for
						the last decade…
						<br />
						But in a way that’s fun, simple, and powerful enough for
						you to take action right now.
						<br />
						<br />
						Welcome to the future of business education.
					</span>
				</p>
			</div>
			{/* <hr className='border-gray-700 mb-10' /> */}
		</div>
	);
}

export default ThirdSection;
