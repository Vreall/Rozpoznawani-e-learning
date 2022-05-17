import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s42Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s42'}  name={'2S4'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'2s5'}
				prevName={'2s4'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s42Picture;
