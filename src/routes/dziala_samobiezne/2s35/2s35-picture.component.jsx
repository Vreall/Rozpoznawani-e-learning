import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s35Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s35'} name={'2S35'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s35'}
				prevName={'2s35'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s35Picture;
