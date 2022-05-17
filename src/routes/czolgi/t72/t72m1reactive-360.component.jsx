import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T72m1reactive360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={80} tank={'t72m1reactive'} name={'T-72 z pancerzem reaktywnym'} />
			<Navigation
				slide={1}
				prevSlide={8}
				nextSlide={1}
				nextName={'t80'}
				prevName={'t72'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T72m1reactive360;
