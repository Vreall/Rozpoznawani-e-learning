import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bwp1Picture = () => {
	return (
		<>
			<VehiclePicture img={'bwp1'} name={'BWP-1'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bwp1'}
				prevName={'bwp1'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp1Picture;
