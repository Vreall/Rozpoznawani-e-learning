import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bm21360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={46} tank={'bm21'} name={'BM 21'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'bm27'}
				prevName={'bm21'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Bm21360;
