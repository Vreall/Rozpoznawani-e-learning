import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const G2s35NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'2s35'} name={'2S35'}/>
			<Navigation
				slide={2}
				prevSlide={2}
				nextSlide={4}
				nextName={'2s19'}
				prevName={'2s35'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s35NightVision;
