import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const BmptPicture = () => {
	return (
		<>
			<VehiclePicture img={'bmpt'} name={'BMPT'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bmpt'}
				prevName={'bmpt'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default BmptPicture;
