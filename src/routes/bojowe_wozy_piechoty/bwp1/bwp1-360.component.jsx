import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bwp1360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={55} tank={'bwp1'} name={'BWP-1'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'bwp2'}
				prevName={'bwp1'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp1360;
