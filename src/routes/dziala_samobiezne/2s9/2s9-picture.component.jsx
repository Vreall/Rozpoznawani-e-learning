import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s9Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s9'} name={'2S9'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s9'}
				prevName={'2s9'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s9Picture;
