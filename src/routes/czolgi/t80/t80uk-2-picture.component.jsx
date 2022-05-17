import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T80uk2Picture = () => {
	return (
		<>
			<VehiclePicture img={'t80uk2'} name={'T-80 UK'}/>
			<Navigation
				slide={1}
				prevSlide={5}
				nextSlide={7}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80uk2Picture;
