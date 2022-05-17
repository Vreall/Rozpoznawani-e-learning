import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bm30360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={56} tank={'bm30'} name={'BM 30'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'9k79'}
				prevName={'bm30'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm30360;
