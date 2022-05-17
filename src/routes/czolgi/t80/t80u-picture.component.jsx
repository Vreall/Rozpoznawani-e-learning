import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T80uPicture = () => {
	return (
		<>
			<VehiclePicture img={'t80u'} name={'T-80 U'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={5}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80uPicture;
