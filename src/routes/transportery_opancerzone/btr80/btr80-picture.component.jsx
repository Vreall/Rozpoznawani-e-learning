import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Btr80Picture = () => {
	return (
		<>
			<VehiclePicture img={'btr80'} name={'BTR-80'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'btr80'}
				prevName={'btr80'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr80Picture;
