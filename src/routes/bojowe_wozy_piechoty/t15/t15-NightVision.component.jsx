import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const T15NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'t15'} name={'T-15'} />
			<Navigation
				slide={2}
				prevSlide={2}
				nextSlide={1}
				prevName={'t15'}
				nextName={'t15'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default T15NightVision;
