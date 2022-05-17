import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s25Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S25'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={2}
				prevName={'2s23'}
				nextName={'2s25'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s25Params;
