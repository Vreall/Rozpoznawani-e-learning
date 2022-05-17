import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const MtlbPicture = () => {
	return (
		<>
			<VehiclePicture img={'mtlb'} name={'MT-LB'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'mtlb'}
				prevName={'mtlb'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default MtlbPicture;
