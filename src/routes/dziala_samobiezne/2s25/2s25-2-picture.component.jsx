import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s252Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s252'} name={'2S25'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'2s31'}
				prevName={'2s25'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s252Picture;
