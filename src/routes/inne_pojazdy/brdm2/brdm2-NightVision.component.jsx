import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Brdm2NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'brdm2'} name={'BRDM-2'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'brdm2'}
				prevName={'brdm2'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Brdm2NightVision;
