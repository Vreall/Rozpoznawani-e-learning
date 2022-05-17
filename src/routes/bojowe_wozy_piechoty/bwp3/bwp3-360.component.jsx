import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bwp3360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={55} tank={'bwp3'} name={'BWP-3'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'bmpt'}
				prevName={'bwp3'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp3360;
