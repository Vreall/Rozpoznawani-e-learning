import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Vpk7829Picture = () => {
	return (
		<>
			<VehiclePicture img={'vpk7829'} name={'VPK–7829'} />
			<Navigation
				slide={2}
				prevSlide={1}
				nextSlide={1}
				nextName={'vpk7829'}
				prevName={'vpk7829'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Vpk7829Picture;
