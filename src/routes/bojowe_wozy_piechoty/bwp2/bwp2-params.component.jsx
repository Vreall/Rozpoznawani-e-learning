import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bwp2Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BWP-2'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={2}
				nextName={'bwp2'}
				prevName={'bwp1'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp2Params;
