import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Btr82aParams = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BTR–82A'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={2}
				nextName={'btr82a'}
				prevName={'btr80'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr82aParams;
