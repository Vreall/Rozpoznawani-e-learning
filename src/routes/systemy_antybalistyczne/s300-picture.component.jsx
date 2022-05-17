import React from 'react';
import VehiclePicture from '../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../components/navigation/navigation.component.jsx';

const S300Picture = () => {
	return (
		<>
			<VehiclePicture img={'s300'} name={'S 300'}/>
			<Navigation
				slide={0}
				// prevSlide={1}
				nextSlide={1}
				nextName={'s300v'}
				// prevName={'bm21'}
				category={'systemy antybalistyczne'}
			/>
		</>
	);
};

export default S300Picture;
