import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const T72Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'T-72'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72Params;
