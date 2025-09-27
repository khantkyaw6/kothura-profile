import ShowOne from '../../../assets/show_one.avif';
import ShowTwo from '../../../assets/show_two.avif';
import ShowThree from '../../../assets/show_three.avif';
import ShowFour from '../../../assets/show_four.avif';
import ShowFive from '../../../assets/show_five.avif';
import ShowSix from '../../../assets/show_six.avif';

function FifthSection() {
	return (
		<div className='mb-5 px-[15px] mt-20'>
			<div className='text-center grid gap-5'>
				<h1 className='text-xl md:text-5xl md:px-16 bree-serif-bold text-(--text-color)'>
					<span>
						The Man Who Trains Millionaire-Minded Entrepreneurs
					</span>
				</h1>
				<h2 className='text-sm md:text-3xl md:px-16 zilla-slab-thin  text-(--text-color)'>
					<span>
						After guiding thousands of business owners to scale
						faster, Ko Thura created Young Millionaire Academy to
						teach teens worldwide the real secrets to wealth,
						growth, and independence.
					</span>
				</h2>
			</div>
			<div className='bg-white shadow-lg mt-10 p-10'>
				<div className='grid md:grid-cols-3 gap-8'>
					<img src={ShowOne} className='shadow-sm mt-3' />
					<img src={ShowTwo} className='shadow-sm' />
					<img src={ShowThree} className='shadow-sm' />
					<img src={ShowFour} className='shadow-sm' />
					<img src={ShowFive} className='shadow-sm' />
					<img src={ShowSix} className=' shadow-sm' />
				</div>
			</div>
			<div className='bg-white shadow-lg md:w-[70%] md:mx-auto mt-10'>
				<div className='space-y-2'>
					<p className='p-12 md:px-36 text-xl md:text-2xl bree-serif-bold text-(--btn-text-color)'>
						<span>
							Think $97 is Too Much? Let's Be Real About That
						</span>
					</p>
					<p className='px-12 md:px-36  source-sans-3-regular text-base md:text-xl font-extralight text-(--btn-text-color) leading-relaxed'>
						<span>
							The
							<b> full price </b>of &nbsp;&nbsp; the
							<b>Young Millionaire Program</b>
							is
							<b>$200</b> — and honestly, it’s worth every cent.
							<br />
							Right now, we’re offering *early access
							(pre-roll)for
							<b>just $97</b>.
							<br />
							That’s not a discount to make it cheap — it’s a
							chance for early-takers to act fast and get in
							before we launch officially.
							<br />
							Now, some people might still say:
							<br />
							<br />
							$97 for a course? That’s too much. But let’s
							compare:
							<br />
							<br />
							🎓 <b>An MBA costs $20,000+</b>
							and still won’t teach you how to make your first
							$100.
							<br />
							<br />
							🏫
							<b>Private schools cost thousands every year</b>
							— yet never cover sales, marketing, or financial
							freedom.
							<br />
							<br />
							📉 Most teenagers leave school knowing nothing about
							how money really works.
							<br />
							But in Young Millionaire Academy, we teach:
							<br />
							Real-world money mindset
							<br />
							How business actually works
							<br />
							Sales and marketing that generate income
							<br />
							And simple systems that teens can use to earn now,
							not 10 years later
							<br />
							This program is based on strategies I’ve used to
							help over
							<b>10,000 business owners grow 2X</b>— now
							simplified for teenagers worldwide.
							<br />
							So no —<b>it’s not cheap.</b>
							<br />
							Because it’s
							<b>not meant to be</b>.
							<br />
							It’s an investment in a mindset that could pay off
							forever.
							<br />
							And right now,
							<b>you can start that journey for just $97</b>
							.
							<br />
							<br />
						</span>
					</p>
				</div>
				<div className='pb-10 flex justify-center'>
					<button className='btn-grad flex flex-col md:w-[80%]  md:px-8 md:py-4 md:h-20'>
						<a>
							<span className='text-(--btn-text-color) text-xl md:text-3xl roboto-condensed-bold'>
								Join Young Millionaire Program for $97
							</span>
							<br />
							<span className='text-(--btn-text-color) text-xs font-extralight md:text-base'>
								Before It Goes Back to $200 on September 1st
							</span>
						</a>
					</button>
				</div>
			</div>
			<div className='mt-5'>
				<p
					className='text-[10px] md:text-sm bree-serif-bold 
				text-center text-(--text-color-second)'
				>
					<span>Powered By MOT</span>
				</p>
			</div>
		</div>
	);
}

export default FifthSection;
