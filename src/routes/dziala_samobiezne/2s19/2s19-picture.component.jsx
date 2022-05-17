import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s19Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s19'} name={'2S19'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s19'}
				prevName={'2s19'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s19Picture;
