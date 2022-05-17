import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T90msPicture = () => {
	return (
		<>
			<VehiclePicture img={'t90ms'} name={'T-90 MS'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'t90'}
				prevName={'t90'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T90msPicture;
