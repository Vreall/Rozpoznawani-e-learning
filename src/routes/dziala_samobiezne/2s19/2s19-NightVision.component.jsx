import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const G2s19NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'2s19'} name={'2S19'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'2s19'}
				prevName={'2s19'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s19NightVision;
