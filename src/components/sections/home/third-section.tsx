import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeChild from '../../../assets/home_child.avif';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function ThirdSection() {
	return (
		<div>
			<div className='text-cente mt-5 md:text-center md:my-10'>
				<h2 className='poppins-regular uppercase text-(--orange-text) font-bold text-base md:text-2xl'>
					<span>PROBLEMS PARENTS & KIDS ARE EXPERIENCING</span>
				</h2>
				<h1 className='mt-2 poppins-regular text-3xl md:text-6xl md:px-32 text-black font-extrabold'>
					<span>Does This Sound Like You or Your Child?</span>
				</h1>
			</div>
			<div className='flex flex-col md:flex-row gap-4 md:my-10'>
				<div className='w-full md:w-2/5'>
					<img
						src={HomeChild}
						className='w-full'
						alt='child learning from Ko Thura'
					/>
				</div>
				<div className='w-full md:w-3/5 flex flex-col justify-center p-2'>
					<h1 className='mt-2 poppins-regular text-xl md:text-4xl text-black font-extrabold'>
						<span>Does This Sound Like You?</span>
					</h1>

					<div className='mt-5 flex flex-col gap-4'>
						<div className='flex gap-4 md:text-lg'>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className='text-sky-400 mt-1'
							/>
							<p>
								<span className='font-bold'>
									Do you feel like ...
								</span>
								<span> </span>
								<span>
									your child’s school is teaching them facts,
									but not how to use money or think like a
									problem-solver?
								</span>
							</p>
						</div>
						<div className='flex gap-4'>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className='text-sky-400 mt-1'
							/>
							<p>
								<span className='font-bold'>Does it seem…</span>
								<span> </span>
								<span>
									like your child spends more time on screens
									than learning skills that will help them
									succeed in life?
								</span>
							</p>
						</div>
						<div className='flex gap-4'>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className='text-sky-400 mt-1'
							/>
							<p>
								<span className='font-bold'>
									Are you frustrated that…
								</span>
								<span> </span>
								<span>
									your child isn’t building confidence or
									leadership skills, and you’re not sure how
									to help them?
								</span>
							</p>
						</div>
						<div className='flex gap-4'>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className='text-sky-400 mt-1'
							/>
							<p>
								<span className='font-bold'>
									And when it comes down to it, do you…
								</span>
								<span> </span>
								<span>
									want them to understand money, business, and
									success before they enter the real world?
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ThirdSection;
