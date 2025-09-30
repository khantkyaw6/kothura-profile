import Navbar from '../components/common/Navbar';
import FirstSection from '../components/sections/home/first-section';
import FourthSection from '../components/sections/home/fourth-section';
import SecondSection from '../components/sections/home/second-section';
import ThirdSection from '../components/sections/home/third-section';

function Home() {
	return (
		<div className='text-black'>
			<Navbar />

			<main className='p-4'>
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<p className='text-center text-[12px] mt-5 zilla-slab-thin '>
					<span>Powered By MOT</span>
				</p>
			</main>
		</div>
	);
}

export default Home;
