import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s23Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s23'} name={'2S23'}  />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'2s25'}
				prevName={'2s23'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s23Picture;
