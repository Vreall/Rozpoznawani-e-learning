import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s25Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s25'} name={'2S25'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s25'}
				prevName={'2s25'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s25Picture;
