import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s35Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S35'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={2}
				prevName={'2s31'}
				nextName={'2s35'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s35Params;
