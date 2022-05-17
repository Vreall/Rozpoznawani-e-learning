import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T72b31Picture = () => {
	return (
		<>
			<VehiclePicture img={'t72b3-1'} name={'T-72B3'} />
			<Navigation
				slide={1}
				prevSlide={5}
				nextSlide={7}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72b31Picture;
