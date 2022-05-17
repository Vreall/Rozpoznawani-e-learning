import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T90Picture = () => {
	return (
		<>
			<VehiclePicture img={'t90'} name={'T-90'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'t90'}
				prevName={'t90'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T90Picture;
