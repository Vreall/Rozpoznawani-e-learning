import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Bmpt360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={58} tank={'bmpt'} name={'BMPT'} />
			<Navigation
				slide={1}
				prevSlide={2}
				nextSlide={1}
				nextName={'kruganiec25'}
				prevName={'bmpt'}
				category={'bojowe wozy piechoty'}
			/>
		</>
	);
};

export default Bmpt360;
