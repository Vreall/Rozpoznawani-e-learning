import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Bwp3NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'bwp3'} name={'BWP-3'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				prevName={'bwp3'}
				nextName={'bwp3'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp3NightVision;
