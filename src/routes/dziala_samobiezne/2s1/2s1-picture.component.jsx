import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s1Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s1'} name={'2S1'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s1'}
				prevName={'2s1'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s1Picture;
