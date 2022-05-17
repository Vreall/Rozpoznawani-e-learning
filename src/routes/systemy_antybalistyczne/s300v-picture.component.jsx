import React from 'react';
import VehiclePicture from '../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../components/navigation/navigation.component.jsx';

const S300vPicture = () => {
	return (
		<>
			<VehiclePicture img={'s300v'} name={'S 300V'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'s400'}
				prevName={'s300'}
				category={'systemy antybalistyczne'}
			/>
		</>
	);
};

export default S300vPicture;
