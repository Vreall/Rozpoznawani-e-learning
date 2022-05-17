import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s7Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s7'} name={'2S7'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s7'}
				prevName={'2s7'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s7Picture;
