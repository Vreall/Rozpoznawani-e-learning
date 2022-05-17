import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Gaz2330Picture = () => {
	return (
		<>
			<VehiclePicture img={'gaz2330'} name={'GAZ-2330/2331'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'gaz2330'}
				prevName={'gaz2330'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Gaz2330Picture;
