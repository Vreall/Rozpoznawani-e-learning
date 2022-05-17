import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const T80NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'t80'} name={'T-80'} />
			<Navigation
				slide={1}
				prevSlide={6}
				nextSlide={8}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80NightVision;
