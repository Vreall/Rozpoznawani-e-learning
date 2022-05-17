import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bmd1Picture = () => {
	return (
		<>
			<VehiclePicture img={'bmd1'} name={'BMD-1'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'bmd2'}
				prevName={'bmd1'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd1Picture;
