import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Tos1Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'TOS-1'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				prevName={'9k79'}
				nextName={'tos1'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Tos1Params;
