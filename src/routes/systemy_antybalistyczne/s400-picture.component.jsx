import React from 'react';
import VehiclePicture from '../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../components/navigation/navigation.component.jsx';

const S400Picture = () => {
	return (
		<>
			<VehiclePicture img={'s400'} name={'S 400'} />
			<Navigation
				slide={2}
				prevSlide={1}
				// nextSlide={1}
				// nextName={'s400'}
				prevName={'s300v'}
				category={'systemy antybalistyczne'}
			/>
		</>
	);
};

export default S400Picture;
