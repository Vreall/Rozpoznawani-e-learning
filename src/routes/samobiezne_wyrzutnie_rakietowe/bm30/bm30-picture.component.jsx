import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bm30Picture = () => {
	return (
		<>
			<VehiclePicture img={'bm30'} name={'BM 30'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bm30'}
				prevName={'bm30'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm30Picture;
