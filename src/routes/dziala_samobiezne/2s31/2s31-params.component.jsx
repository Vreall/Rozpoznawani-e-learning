import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const G2s31Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'2S31'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={3}
				prevName={'2s25'}
				nextName={'2s31'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s31Params;
