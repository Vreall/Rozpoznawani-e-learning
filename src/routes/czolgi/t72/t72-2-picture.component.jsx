import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T722Picture = () => {
	return (
		<>
			<VehiclePicture img={'t722'} name={'T-72'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T722Picture;
