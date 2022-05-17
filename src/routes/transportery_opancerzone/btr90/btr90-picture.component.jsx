import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Btr90Picture = () => {
	return (
		<>
			<VehiclePicture img={'btr90'} name={'BTR–90'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'vpk7829'}
				prevName={'btr90'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr90Picture;
