import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const G2s9NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'2s9'} name={'2S9'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'2s19'}
				prevName={'2s9'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s9NightVision;
