import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const MtlbParams = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'MT-LB'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'mtlb'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default MtlbParams;
