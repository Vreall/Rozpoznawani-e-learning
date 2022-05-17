import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s1Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S1'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'2s1'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s1Params;
