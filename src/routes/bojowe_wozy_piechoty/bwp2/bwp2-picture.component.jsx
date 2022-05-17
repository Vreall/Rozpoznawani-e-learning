import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bwp2Picture = () => {
	return (
		<>
			<VehiclePicture img={'bwp2'} name={'BWP-2'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bwp2'}
				prevName={'bwp2'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp2Picture;
