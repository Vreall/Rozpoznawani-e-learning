import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const G2s3NightVision = () => {
	return (
		<>
			<VehicleNightVision img={'2s3'} name={'2S3'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'2s3'}
				prevName={'2s3'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s3NightVision;
