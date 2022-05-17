import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s4Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s4'} name={'2S4'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s4'}
				prevName={'2s4'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s4Picture;
