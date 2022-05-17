import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bmd2Picture = () => {
	return (
		<>
			<VehiclePicture img={'bmd2'} name={'BMD-2'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bmd2'}
				prevName={'bmd2'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd2Picture;
