import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T80Picture = () => {
	return (
		<>
			<VehiclePicture img={'t80bu'} name={'T-80 BU'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80Picture;
