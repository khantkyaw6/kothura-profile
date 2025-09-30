import Navbar from '../components/common/Navbar';
import FirstSection from '../components/sections/consultation/first-section';
import SecondSection from '../components/sections/consultation/second-section';
import ThirdSection from '../components/sections/consultation/third-section';

function Consultation() {
	return (
		<div>
			<Navbar theme={'dark'} />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</div>
	);
}

export default Consultation;
