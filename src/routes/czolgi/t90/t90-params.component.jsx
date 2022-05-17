import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const T90Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'T-90'} />
			<Navigation
				slide={1}
				nextSlide={2}
				prevSlide={9}
				nextName={'t90'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T90Params;
