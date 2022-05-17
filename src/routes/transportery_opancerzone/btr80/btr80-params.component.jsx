import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Btr80Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BTR-80'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'btr80'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr80Params;
