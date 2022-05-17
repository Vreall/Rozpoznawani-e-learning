import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s23Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S23'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={4}
				prevName={'2s19'}
				nextName={'2s23'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s23Params;
