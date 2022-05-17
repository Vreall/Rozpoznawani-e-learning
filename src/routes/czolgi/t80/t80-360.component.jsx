import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T80360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={67} tank={'t80'}  name={'T-80'}/>
			<Navigation
				slide={1}
				prevSlide={7}
				nextSlide={9}
				nextName={'t80'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80360;
