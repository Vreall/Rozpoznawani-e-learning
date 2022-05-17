import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Kruganiec252Picture = () => {
	return (
		<>
			<VehiclePicture img={'kruganiec25-2'} name={"Kruganiec25"} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={1}
				nextName={'t15'}
				prevName={'kruganiec25'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Kruganiec252Picture;
