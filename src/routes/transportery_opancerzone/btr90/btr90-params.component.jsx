import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Btr90Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BTR–90'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				nextName={'btr90'}
				prevName={'btr82a'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr90Params;
