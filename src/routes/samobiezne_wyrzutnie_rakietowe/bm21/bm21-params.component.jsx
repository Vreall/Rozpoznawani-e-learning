import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleParams from '../../../components/vehicleParams/vehicleParams.component.jsx';

const Bm21Params = (props) => {
	console.log(props);

	return (
		<>
			<VehicleParams name={'BM 21'} />
			<Navigation
				slide={0}
				nextSlide={2}
				nextName={'bm21'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm21Params;
