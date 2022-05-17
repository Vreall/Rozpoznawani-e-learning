import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const T80reactive360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={58} tank={'t80reactive'} name={'T-80 z pancerzem reaktywnym'} />
			<Navigation
				slide={1}
				prevSlide={8}
				nextSlide={1}
				nextName={'t90'}
				prevName={'t80'}
				category={'czolgi'}
			/>
		</>
	);
};

export default T80reactive360;
