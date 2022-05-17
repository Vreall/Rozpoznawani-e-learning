import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const T15Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'T-15'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={2}
				nextName={'t15'}
				prevName={'kruganiec25'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default T15Params;
