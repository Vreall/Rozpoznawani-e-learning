import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const Bm27Picture = () => {
	return (
		<>
			<VehiclePicture img={'bm27'} name={'BM 27'}/>
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'bm27'}
				prevName={'bm27'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm27Picture;
