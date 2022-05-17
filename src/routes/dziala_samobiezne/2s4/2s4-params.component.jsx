import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s4Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S4'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={4}
				prevName={'2s3'}
				nextName={'2s4'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s4Params;
