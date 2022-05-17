import { NavLink } from 'react-router-dom';
import './home.styles.scss';
import React from 'react';
import TopBar from '../../components/topBar/topBar.component.jsx';
import vehicles from '../vehicleList/vehicleList.json';
import { useEffect, useState } from 'react/cjs/react.production.min';

// import CswotLogo  from '../../assets/img/cswotLogo.svg';



const Home = () => {

	

	useEffect(() => {
		const imgs = [];


		const listVehicles = vehicles.map((vehicle) => (
			imgs.push(
				`img/vehiclesImg/vehiclesListImg/${vehicle.img}.jpg`
			)
		));
		
		cacheImages(imgs);
		
	}, []);

	const [isLoading, setIsLoading] = useState(true);
	const cacheImages = async (srcArray) => {
		const promises = await srcArray.map((src) => {
			return new Promise(function (resolve, reject) {
				const img = new Image();

				img.src = src;
				img.onloaded = resolve();
				img.onerror = reject();
			});
		});
		await Promise.all(promises);

		setIsLoading(false);
	};


	return (
		<>
		
		<div className='container homeContainer'>
			<TopBar />
			<div className='homeContentContainer'>
				<div className='homeTitleContainer'>
					<h1 className='homeTitle'>
						ZASADNICZY SPRZĘT<br/> I UZBROJENIE SIŁ ZBROJNYCH
						<span>FEDERACJI ROSYJSKIEJ</span>
					</h1>
				</div>
				<NavLink className={'buttonBegin'} to={'/introduction'}>
					Rozpocznij
				</NavLink>
			</div>
		</div>
	</>
	);
};

export default Home;
