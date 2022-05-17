import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Brdm2Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BRDM-2'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				prevName={'mtlb'}
				nextName={'brdm2'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Brdm2Params;
