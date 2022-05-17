import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s3Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S3'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={4}
				prevName={'2s1'}
				nextName={'2s3'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s3Params;
