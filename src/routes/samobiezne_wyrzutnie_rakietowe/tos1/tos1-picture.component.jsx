import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Tos1Picture = () => {
	return (
		<>
			<VehiclePicture img={'tos1'} name={'TOS-1'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'tos1'}
				prevName={'tos1'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Tos1Picture;
