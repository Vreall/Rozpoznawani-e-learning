import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const G2s19360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={95} tank={'2s19'} name={'2S19'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'2s23'}
				prevName={'2s19'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s19360;
