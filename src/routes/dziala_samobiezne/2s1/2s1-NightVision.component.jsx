import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const G2s1NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'2s1'} name={'2S1'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'2s1'}
				prevName={'2s1'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s1NightVision;
