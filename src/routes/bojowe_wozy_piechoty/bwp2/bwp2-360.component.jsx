import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bwp2360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={65} tank={'bwp2'} name={'BWP-2'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'bwp3'}
				prevName={'bwp2'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bwp2360;
