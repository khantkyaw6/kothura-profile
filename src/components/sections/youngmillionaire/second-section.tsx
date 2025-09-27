import globeWithMoney from '../../../assets/icons/globe_with_money.jpg';

interface AdvertiseCardProps {
	title: string;
	description: string;
	icon: string;
}

function AdvertiseCard({ title, description, icon }: AdvertiseCardProps) {
	return (
		<div className='p-5 grid gap-2.5'>
			<div className='md:flex md:gap-4 md:items-start'>
				<img
					className='w-[55px] md:w-16 mb-3 md:mb-0 flex-shrink-0'
					src={icon}
					alt={title}
				/>
				<div className='flex-1'>
					<h1 className='text-base md:text-5xl text-(--text-color-third) roboto-condensed-bold mb-2'>
						{title}
					</h1>
					<p className='md:text-lg font-extralight'>
						<span
							className='...'
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</p>
				</div>
			</div>
		</div>
	);
}

function SecondSection() {
	return (
		<div className='bg-white mx-5 rounded-md shadow-lg overflow-hidden mt-10'>
			<h1 className='roboto-condensed-bold text-center text-2xl md:text-[5rem] mt-10 text-(--text-color-third)'>
				Inside This FREE Presentation You'll Learn:
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 p-5'>
				<AdvertiseCard
					title="You'll Learn About Business"
					description={`"Business is simply solving problems for profit." The basic building blocks of any business. How everyday products and services create income. Why you don't need a big idea or big budget to get started. Thinking like a creator, not just a consumer`}
					icon={globeWithMoney}
				/>
				<AdvertiseCard
					title="You'll Learn About Marketing"
					description={`"Even the best product fails without attention." What marketing really means and how it's different from sales. How to stand out in a crowded, noisy world. The power of storytelling, branding, and hooks. Creating your first basic marketing post or video`}
					icon={globeWithMoney}
				/>
				<AdvertiseCard
					title="You'll Learn About Sale"
					description={`"Selling isn't pushing. It's understanding what people want." Why people really buy (it's not just price). How to communicate value with confidence. <br/> Simple scripts and story-based selling techniques. Practice: sell an idea, not a product`}
					icon={globeWithMoney}
				/>
				<AdvertiseCard
					title="You'll Learn About People"
					description='Build powerful networks that open doors to opportunities - Develop leadership skills that attract top talent - Master the art of influence and persuasion - Create strategic partnerships that multiply your success'
					icon={globeWithMoney}
				/>
			</div>
		</div>
	);
}

export default SecondSection;
