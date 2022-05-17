import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const G2s1360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={65} tank={'2s1'} name={'2S1'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'2s3'}
				prevName={'2s1'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s1360;
