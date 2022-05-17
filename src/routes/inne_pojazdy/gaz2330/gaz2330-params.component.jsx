import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Gaz2330Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'GAZ-2330/2331'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={2}
				prevName={'brdm2'}
				nextName={'gaz2330'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Gaz2330Params;
