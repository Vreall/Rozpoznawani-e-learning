import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bm21Picture = () => {
	return (
		<>
			<VehiclePicture img={'bm21'} name={'BM 21'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bm21'}
				prevName={'bm21'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm21Picture;
