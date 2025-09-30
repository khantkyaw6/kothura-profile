import Navbar from '../components/common/Navbar';
import FifthSection from '../components/sections/youngmillionaire/fifth-section';
import FirstSection from '../components/sections/youngmillionaire/first-section';
import FourthSection from '../components/sections/youngmillionaire/fourth-section';
import SecondSection from '../components/sections/youngmillionaire/second-section';
import ThirdSection from '../components/sections/youngmillionaire/third-section';

function YoungMillionaire() {
	return (
		<div>
			<Navbar theme={'dark'} />
			<FirstSection />
			<SecondSection />
			<div className='bg-[#FCE9D1] sm:p-14 mt-5 '>
				<h1 className='p-5 text-xl md:text-5xl text-center text-(--btn-text-color) bree-serif-bold '>
					<span>
						Let Me Explain What Business Really Is..? <br /> (In
						Simple Words)
					</span>
				</h1>
			</div>
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</div>
	);
}

export default YoungMillionaire;
