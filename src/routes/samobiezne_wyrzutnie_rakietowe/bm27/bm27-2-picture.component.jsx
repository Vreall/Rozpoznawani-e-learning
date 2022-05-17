import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bm272Picture = () => {
	return (
		<>
			<VehiclePicture img={'bm272'} name={'BM 27'}/>
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'bm30'}
				prevName={'bm27'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm272Picture;
