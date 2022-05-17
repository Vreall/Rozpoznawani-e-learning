import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const T90NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'t90'} name={'T-90'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={5}
				nextName={'t90'}
				prevName={'t90'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T90NightVision;
