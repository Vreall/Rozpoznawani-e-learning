import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bmd3Picture = () => {
	return (
		<>
			<VehiclePicture img={'bmd3'} name={'BMD-3'}  />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'bmd4'}
				prevName={'bmd3'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd3Picture;
