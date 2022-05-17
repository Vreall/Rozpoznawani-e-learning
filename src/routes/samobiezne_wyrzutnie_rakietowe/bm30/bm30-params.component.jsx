import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bm30Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BM 30'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				prevName={'bm27'}
				nextName={'bm30'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm30Params;
