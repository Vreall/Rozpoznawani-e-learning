import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s72Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s72'} name={'2S7'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'2s9'}
				prevName={'2s7'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s72Picture;
