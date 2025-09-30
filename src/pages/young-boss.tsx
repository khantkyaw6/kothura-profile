import YoungBossPlayBook from '../assets/youngboss_playbook.webp';
import YoungBossEvent from '../assets/youngboss_event.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/common/Navbar';

function YoungBoss() {
	return (
		<div className='bg-white '>
			<Navbar />
			<div className='px-8 mt-5'>
				<h1 className='text-(--text-youngboss) font-extrabold poppins-regular text-2xl md:text-6xl text-center leading-relaxed'>
					<span>
						Raise a Young Boss: Guide for Kids to Start Their First
						Mini-Business
					</span>
				</h1>
			</div>
			<h1 className='font-extralight text-base md:text-3xl text-center px-4'>
				<span className='italic capitalize'>
					Discover the 10 simple steps to help your child make their
					first $100
				</span>
			</h1>
			<div className='container mx-auto px-4 py-8 mt-10'>
				<div className='flex flex-col md:flex-row'>
					<div className='md:w-2/5 w-full'>
						<img
							src={YoungBossPlayBook}
							alt='young boss playbook'
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='md:w-3/5 w-full p-6  '>
						<div className='bg-white shadow-xl p-4 my-5'>
							<div className='my-5 text-center'>
								<h1 className='text-2xl md:text-4xl font-bold'>
									<span>Get Young Boss Starter Guide</span>
								</h1>
								<ul className='mt-5 text-left md:text-xl md:px-10 md:py-2 leading-relaxed space-y-3'>
									<li>
										<span>
											<FontAwesomeIcon
												icon={faCheck}
												className='text-sky-400 mt-1'
											/>
											Step-by-step guide kids can follow
											easily
										</span>
									</li>
									<li>
										<span>
											<FontAwesomeIcon
												icon={faCheck}
												className='text-sky-400 mt-1'
											/>
											Teaches confidence, leadership, and
											sales skills
										</span>
									</li>
									<li>
										<span>
											<FontAwesomeIcon
												icon={faCheck}
												className='text-sky-400 mt-1'
											/>
											A perfect first step into the Young
											Boss Program
										</span>
									</li>
								</ul>
							</div>

							<form className='flex flex-col gap-3 mb-6 md:px-10'>
								<input
									type='email'
									placeholder='Email'
									className='flex-1 border border-gray-300 rounded-lg px-3 py-2'
								/>
								<button
									type='submit'
									className='bg-amber-500 text-white px-4 py-2 rounded-lg'
								>
									<FontAwesomeIcon icon={faSquareCheck} />
									<span className='md:text-2xl'>
										YES! Send Me the Guide for $5
									</span>
								</button>
							</form>
						</div>
						<div className='bg-gray-100 p-4 my-5'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
								<div>
									<img
										src={YoungBossEvent}
										alt='Ko Thura Event'
										className='w-full h-full object-cover rounded-lg'
									/>
								</div>
								<div className='flex items-center'>
									<p className='text-gray-700 font-normal text-[12px] md:text-base'>
										<span>
											“For 9+ years, I’ve helped
											entrepreneurs grow their businesses.
											Now, I’m teaching kids how to think
											like entrepreneurs early... starting
											with this guide”
											<br />
											<br />
											<br />
											<b>– Ko Thura</b>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default YoungBoss;
