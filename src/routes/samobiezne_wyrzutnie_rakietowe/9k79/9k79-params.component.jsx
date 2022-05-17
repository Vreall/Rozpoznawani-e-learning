import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const T9k79Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'9K79 Toczka'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				prevName={'bm30'}
				nextName={'9k79'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default T9k79Params;
