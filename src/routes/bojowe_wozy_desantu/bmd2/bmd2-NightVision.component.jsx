import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Bmd2NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'bmd2'} name={'BMD-2'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				prevName={'bmd2'}
				nextName={'bmd3'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd2NightVision;
