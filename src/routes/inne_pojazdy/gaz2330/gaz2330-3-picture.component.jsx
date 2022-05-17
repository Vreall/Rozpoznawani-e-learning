import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Gaz23303Picture = () => {
	return (
		<>
			<VehiclePicture img={'gaz23303'} name={'GAZ-2330/2331'}/>
			<Navigation
				slide={2}
				prevSlide={3}
				prevName={'gaz2330'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Gaz23303Picture;
