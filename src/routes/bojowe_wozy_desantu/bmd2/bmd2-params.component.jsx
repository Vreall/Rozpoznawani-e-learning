import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bmd2Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BMD-2'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={2}
				nextName={'bmd2'}
				prevName={'bmd1'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd2Params;
