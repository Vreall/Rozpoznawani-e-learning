import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s52Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s52'} name={'2S5'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'2s7'}
				prevName={'2s5'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s52Picture;
