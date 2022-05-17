import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';


const Bmd1Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BMD-1'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'bmd1'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd1Params;
