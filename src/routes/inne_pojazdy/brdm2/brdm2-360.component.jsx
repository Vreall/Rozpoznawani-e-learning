import React from 'react';
import Navigation from '../../../components/navigation/navigation.component.jsx';
import Vehicle360 from '../../../components/vehicle360/vehicle360.component.jsx';

const Brdm2360 = () => {
	return (
		<>
			<Vehicle360 numbersOfPhotos={62} tank={'brdm2'} name={'BRDM-2'} />
			<Navigation
				slide={1}
				prevSlide={3}
				nextSlide={1}
				nextName={'gaz2330'}
				prevName={'brdm2'}
				category={'inne pojazdy'}
			/>
		</>
	);
};

export default Brdm2360;
