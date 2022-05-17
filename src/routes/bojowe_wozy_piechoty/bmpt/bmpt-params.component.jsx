import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const BmptParams = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BMPT'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={2}
				nextName={'bmpt'}
				prevName={'bwp3'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default BmptParams;
