import React from 'react';
import VehiclePicture from '../../../components/vehiclePicture/vehiclePicture.component.jsx';
import Navigation from '../../../components/navigation/navigation.component.jsx';

const G2s3Picture = () => {
	return (
		<>
			<VehiclePicture img={'2s3'} name={'2S3'} />
			<Navigation
				slide={1}
				prevSlide={1}
				nextSlide={3}
				nextName={'2s3'}
				prevName={'2s3'}
				category={'dziala samobiezne'}
			/>
		</>
	);
};

export default G2s3Picture;
