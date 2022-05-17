import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bmd4Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BMD-4'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={2}
				nextName={'bmd4'}
				prevName={'bmd3'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd4Params;
