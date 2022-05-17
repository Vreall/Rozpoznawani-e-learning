import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Brdm2Picture = () => {
	return (
		<>
			<VehiclePicture img={'brdm2'} name={'BRDM-2'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'brdm2'}
				prevName={'brdm2'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Brdm2Picture;
