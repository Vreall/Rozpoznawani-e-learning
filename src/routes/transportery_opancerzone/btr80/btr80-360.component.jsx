import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Btr80360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={65} tank={'btr80'} name={'BTR-80'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'btr82a'}
				prevName={'btr80'}
				category={'transportery opancerzone'}
			/>
		</>
	);
};

export default Btr80360;
