import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Bm21NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'bm21'} name={'BM 21'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'bm21'}
				prevName={'bm21'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm21NightVision;
