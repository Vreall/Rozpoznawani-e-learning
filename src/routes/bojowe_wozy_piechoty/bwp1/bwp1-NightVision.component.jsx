import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Bwp1NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'bwp1'} name={'BWP-1'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'bwp1'}
				prevName={'bwp1'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp1NightVision;
