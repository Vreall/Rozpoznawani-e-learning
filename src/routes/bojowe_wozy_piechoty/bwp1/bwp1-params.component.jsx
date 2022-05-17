import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bwp1Params = (props) => {
	

	return (
		<>
			<VehicleParams name={'BWP-1'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'bwp1'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp1Params;
