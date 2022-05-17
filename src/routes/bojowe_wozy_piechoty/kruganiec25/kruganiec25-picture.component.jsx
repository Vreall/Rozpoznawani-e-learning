import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Kruganiec251Picture = () => {
	return (
		<>
			<VehiclePicture img={'kruganiec25-1'} name={"Kruganiec25"} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={2}
				nextName={'kruganiec25'}
				prevName={'bmpt'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Kruganiec251Picture;
