import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T90s360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={109} tank={'t90'} name={'T-90'} />
			<Navigation
				slide={2}
				prevSlide={4}
				nextName={'t80'}
				prevName={'t90'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T90s360;
