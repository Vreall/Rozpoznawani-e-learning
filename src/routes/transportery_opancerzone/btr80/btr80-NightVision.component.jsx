import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Btr80NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'btr80'} name={'BTR-80'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'btr80'}
				prevName={'btr80'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr80NightVision;
