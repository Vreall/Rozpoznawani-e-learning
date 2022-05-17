import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const T72NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'t72'} name={'T-72'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={6}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72NightVision;
