import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Tos1360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={60} tank={'tos1'} name={'TOS-1'} />
			<Navigation
				slide={2}
				prevSlide={2}
				nextSlide={1}
				nextName={'9k79'}
				prevName={'tos1'}
				category={'samobiezne wyrzutnie rakietowe'}
			/>
		</>
	);
};

export default Tos1360;
