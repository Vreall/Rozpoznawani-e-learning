import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T80bvPicture = () => {
	return (
		<>
			<VehiclePicture img={'t80bv'} name={'T-80 BV'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80bvPicture;
