import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const T80Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'T-80'} />
			<Navigation
				slide={1}
				nextSlide={2}
				nextName={'t80'}
				nextPrev={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80Params;
