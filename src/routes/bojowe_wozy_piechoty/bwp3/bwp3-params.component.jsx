import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bwp3Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BWP-3'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				nextName={'bwp3'}
				prevName={'bwp2'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp3Params;
