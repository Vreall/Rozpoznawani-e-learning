import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Vpk7829Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'VPK–7829'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={2}
				nextName={'vpk7829'}
				prevName={'btr90'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Vpk7829Params;
