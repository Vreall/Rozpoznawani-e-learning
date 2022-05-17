import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bmd3Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BMD-3'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={3}
				nextName={'bmd3'}
				prevName={'bmd2'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd3Params;
