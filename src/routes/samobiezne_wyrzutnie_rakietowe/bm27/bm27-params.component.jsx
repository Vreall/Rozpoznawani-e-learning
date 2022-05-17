import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bm27Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BM 27'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={2}
				prevName={'bm21'}
				nextName={'bm27'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm27Params;
