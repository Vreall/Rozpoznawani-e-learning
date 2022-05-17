import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bwp3Picture = () => {
	return (
		<>
			<VehiclePicture img={'bwp3'} name={'BWP-3'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bwp3'}
				prevName={'bwp3'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp3Picture;
