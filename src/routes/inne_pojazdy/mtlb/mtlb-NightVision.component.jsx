import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import VehicleNightVision from '../../../components/vehicleNightVision/vehicleNightVision.component.jsx';

const MtlbNightVision = () => {
	return (
		<>
			<VehicleNightVision img={'mtlb'} name={'MT-LB'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'brdm2'}
				prevName={'mtlb'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default MtlbNightVision;
