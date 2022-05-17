import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Btr82aPicture = () => {
	return (
		<>
			<VehiclePicture img={'btr82a'} name={'BTR–82A'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'btr82a'}
				prevName={'btr82a'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr82aPicture;
