import LayoutWrapper from './components/common/LayoutWrapper';
import FifthSection from './components/sections/fifth-section';
import FirstSection from './components/sections/first-section';
import FourthSection from './components/sections/fourth-section';
import SecondSection from './components/sections/second-section';
import ThirdSection from './components/sections/third-section';

function App() {
	return (
		<LayoutWrapper>
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
		</LayoutWrapper>
	);
}

export default App;
