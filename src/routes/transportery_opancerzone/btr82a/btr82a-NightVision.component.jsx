import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const Btr82aNightVision = () => {
	return (
		<>
			<VehicleNightVision img={'btr82a'} name={'BTR–82A'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'btr90'}
				prevName={'btr82a'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr82aNightVision;
