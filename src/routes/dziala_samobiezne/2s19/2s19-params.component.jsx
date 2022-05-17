import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s19Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S19'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={3}
				prevName={'2s9'}
				nextName={'2s19'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s19Params;
