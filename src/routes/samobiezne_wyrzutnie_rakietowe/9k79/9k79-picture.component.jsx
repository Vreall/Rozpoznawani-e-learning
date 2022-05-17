import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const T9k79Picture = () => {
	return (
		<>
			<VehiclePicture img={'9k79'} name={'9K79 Toczka'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'9k79'}
				prevName={'9k79'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default T9k79Picture;
