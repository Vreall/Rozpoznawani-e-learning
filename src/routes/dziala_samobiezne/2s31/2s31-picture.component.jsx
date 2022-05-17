import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s31Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s31'} name={'2S31'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'2s35'}
				prevName={'2s31'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s31Picture;
