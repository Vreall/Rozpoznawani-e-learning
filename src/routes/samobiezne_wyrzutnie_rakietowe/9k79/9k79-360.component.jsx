import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T9k79360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={85} tank={'9k79'} name={'9K79 Toczka'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'tos1'}
				prevName={'9k79'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default T9k79360;
