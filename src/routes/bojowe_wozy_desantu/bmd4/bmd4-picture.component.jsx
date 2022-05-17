import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bmd4Picture = () => {
	return (
		<>
			<VehiclePicture img={'bmd4'} name={'BMD-4'} />
			<Navigation
				slide={2}
				prevSlide={1}
				prevName={'bmd4'}
				category={'bojowe wozy desantu'}
			/>
		</>
	);
};

export default Bmd4Picture;
