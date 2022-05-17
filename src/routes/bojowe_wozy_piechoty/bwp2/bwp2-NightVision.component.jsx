import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Bwp1NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'bwp2'} name={'BWP-2'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				prevName={'bwp2'}
				nextName={'bwp2'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp1NightVision;
