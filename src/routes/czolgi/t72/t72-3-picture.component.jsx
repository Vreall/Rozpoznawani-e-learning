import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T723Picture = () => {
	return (
		<>
			<VehiclePicture img={'t723'} name={'T-72'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={5}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T723Picture;
