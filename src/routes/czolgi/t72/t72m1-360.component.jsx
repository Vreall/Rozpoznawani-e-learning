import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T72m1360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={81} tank={'t72m1'} name={'T-72'} />
			<Navigation
				slide={1}
				prevSlide={7}
				nextSlide={9}
				nextName={'t72'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72m1360;
