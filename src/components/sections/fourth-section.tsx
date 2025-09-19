import GroupOne from '../../assets/group_one.avif';
import GroupTwo from '../../assets/group_two.avif';

function FourthSection() {
	return (
		<div className='mb-5 px-[15px]'>
			<div className='text-center'>
				<h2 className='roboto-normal-regular text-(--text-color) text-sm'>
					<span>Entrepreneurs' TESTIMONIALS</span>
				</h2>
				<h1 className='roboto-condensed-bold text-(--text-color) capitalize mt-2.5'>
					<span className='font-light text-2xl'>
						What others are saying about us
					</span>
				</h1>
				<div className='my-4'>
					<img src={GroupOne} />
				</div>
				<div className='my-10'>
					<img src={GroupTwo} />
				</div>
				<div className='py-5'>
					<button className='btn-grad flex flex-col'>
						<a>
							<span className='text-(--btn-text-color) text-2xl roboto-condensed-bold'>
								🔥 CLAIM MY EARLY BIRD DISCOUNT NOW
							</span>
							<br />
							<span className='text-(--btn-text-color) text-xs font-extralight font-'>
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
