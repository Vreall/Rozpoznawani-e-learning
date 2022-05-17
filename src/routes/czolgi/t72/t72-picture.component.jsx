import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T72Picture = () => {
	return (
		<>
			<VehiclePicture img={'t721'} name={'T-72'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72Picture;
