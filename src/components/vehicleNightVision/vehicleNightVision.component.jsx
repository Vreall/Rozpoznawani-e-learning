import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { VehiclesContext } from '../../contexts/vehicleContext.jsx';
import './vehicleNightVision.styles.scss';
import TopBar from '../../components/topBar/topBar.component.jsx';
import magnifyingGlass from '../../assets/img/icons/magnifying-glass.svg';
import { loadImage } from '../../functions/loadImage.js';
import Spinner from '../spinner/spinner.component.jsx';
const VehicleNightVision = (props) => {
	const { vehicles } = useContext(VehiclesContext);
	const [vehicle, setVehicle] = useState({});
	const [firstIsFullScreen, setFirstIsFullScreen] = useState(false);
	const [secondIsFullScreen, setSecondIsFullScreen] = useState(false);

	// function searchingVehicle(value) {
	// 	if (value.type === props.name) {
	// 		console.log('weszło');
	// 		return value;
	// 	}
	// }

	// const downloadingData = async () => {
	// 	const newVehicle = await vehicles.filter(searchingVehicle);
	// 	await setVehicle(newVehicle[0]);
	// };

	// downloadingData();

	const [imgsLoaded, setImgsLoaded] = useState(false);
	const imgs = [];
	function searchingVehicle(value) {
		if (value.type === props.name) {
			console.log('drugi');
			imgs.push(`./img/vehiclesImg/vehicleNightVision/${props.img}nightvision1.jpg`);
			imgs.push(`./img/vehiclesImg/vehicleNightVision/${props.img}nightvision2.jpg`);
			return value;
		}
	}

	const downloadingData = async () => {
		console.log("pierwszy");
		const newVehicle = await vehicles.filter(searchingVehicle);
		console.log("trzeci");
		await setVehicle(newVehicle[0]);
	};
	
	
	useEffect(() => {
		console.log("robi download");
		downloadingData();
		console.log("powinien skonczyc")
		console.log(imgs[0]);

		  Promise.all(imgs.map((image) => loadImage(image)))
			.then(() => setImgsLoaded(true))
			.catch((err) => console.log("Failed to load images", err));
		}, []);

	const { type, fullname } = vehicle;
	return (
		<div className='container'>
			<TopBar />
			{imgsLoaded ? <div className='vehicleNightVisionContentContainer contentContainer'>
				<h1 className='vehicleNightVisionTitle'>
					{type}
					{fullname}
				</h1>
				<h2>Widok w termowizji:</h2>
				<div className='vehicleNightVisionContent'>
					<div
						className={
							firstIsFullScreen ? 'fullscreenBackground' : 'imgContainer'
						}
					>
						<img
							className={
								firstIsFullScreen ? 'fullscreen' : 'vehicleNightVisionPicture'
							}
							src={`./img/vehiclesImg/vehicleNightVision/${props.img}nightvision1.jpg`}
							alt={props.img + 'in night vision'}
						/>
						{firstIsFullScreen ? (
							<button
								className='closefullscreenBtn btn'
								onClick={() => {
									setFirstIsFullScreen(false);
								}}
							>
								X
							</button>
						) : (
							<button
								className='fullscreenBtn btn'
								onClick={() => {
									setFirstIsFullScreen(true);
								}}
							>
								<img
									className='magnifyingGlassIcon'
									src={magnifyingGlass}
									alt='magnifying glass'
								/>
							</button>
						)}
					</div>
					<div
						className={
							secondIsFullScreen ? 'fullscreenBackground' : 'imgContainer'
						}
					>
						<img
							className={
								secondIsFullScreen ? 'fullscreen' : 'vehicleNightVisionPicture'
							}
							src={`./img/vehiclesImg/vehicleNightVision/${props.img}nightvision2.jpg`}
							alt={props.img + 'in night vision'}
						/>
						{secondIsFullScreen ? (
							<button
								className='closefullscreenBtn btn'
								onClick={() => {
									setSecondIsFullScreen(false);
								}}
							>
								X
							</button>
						) : (
							<button
								className='fullscreenBtn btn'
								onClick={() => {
									setSecondIsFullScreen(true);
								}}
							>
								<img
									className='magnifyingGlassIcon'
									src={magnifyingGlass}
									alt='magnifying glass'
								/>
							</button>
						)}
					</div>

					
				</div>
			</div> : <Spinner/>}
			
		</div>
	);
};

export default VehicleNightVision;
