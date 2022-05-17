import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Gaz23302Picture = () => {
	return (
		<>
			<VehiclePicture img={'gaz23302'} name={'GAZ-2330/2331'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={4}
				nextName={'gaz2330'}
				prevName={'gaz2330'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Gaz23302Picture;
