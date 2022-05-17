import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T80ukPicture = () => {
	return (
		<>
			<VehiclePicture img={'t80uk'} name={'T-80 UK'} />
			<Navigation
				slide={1}
				prevSlide={4}
				nextSlide={6}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80ukPicture;
