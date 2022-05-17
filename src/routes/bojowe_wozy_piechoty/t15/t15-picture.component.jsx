import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T15Picture = () => {
	return (
		<>
			<VehiclePicture img={'t15'} name={'T-15'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'t15'}
				prevName={'t15'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default T15Picture;
