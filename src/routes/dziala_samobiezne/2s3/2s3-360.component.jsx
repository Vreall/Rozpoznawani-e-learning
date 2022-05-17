import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const G2s3360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={62} tank={'2s3'} name={'2S3'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'2s4'}
				prevName={'2s3'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s3360;
