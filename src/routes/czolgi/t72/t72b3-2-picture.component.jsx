import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T72b32Picture = () => {
	return (
		<>
			<VehiclePicture img={'t72b3-2'} name={'T-72B3'}/>
			<Navigation
				slide={1}
				prevSlide={6}
				nextSlide={8}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72b32Picture;
