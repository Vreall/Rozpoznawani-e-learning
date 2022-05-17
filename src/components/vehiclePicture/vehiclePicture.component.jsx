import { useContext, useState, useEffect } from 'react';
import { VehiclesContext } from '../../contexts/vehicleContext.jsx';
import './vehiclePicture.styles.scss';
import React from 'react';
import TopBar from '../../components/topBar/topBar.component.jsx';
import magnifyingGlass from '../../assets/img/icons/magnifying-glass.svg';
import { loadImage } from '../../functions/loadImage.js';
import Spinner from '../spinner/spinner.component.jsx';


const VehiclePicture = (props) => {
	const { vehicles } = useContext(VehiclesContext);
	const [vehicle, setVehicle] = useState({});
	const { type, fullname } = vehicle;
	const [isFullscreen, setIsFullscreen] = useState(false);

	// function searchingVehicle(value) {
	// 	if (value.type === props.name) {
	// 		console.log('weszło');
	// 		return value;
	// 	}
	// }
	// const downloadingData = async () => {
	// 	console.log("weszło 1")
	// 	const newVehicle = await vehicles.filter(searchingVehicle);
	// 	await setVehicle(newVehicle[0]);
	// };

	// useEffect(() => {
	// 	downloadingData();
	// }, []);

	const [imgsLoaded, setImgsLoaded] = useState(false);
	const imgs = [];
	function searchingVehicle(value) {
		if (value.type === props.name) {
			console.log('drugi');
			imgs.push(`./img/vehiclesImg/vehiclesPicture/${props.img}picture.png`);
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
	return (
		<>
			<div className='container'>
				<TopBar />
				{imgsLoaded ? <div className='contentContainer vehiclePictureContentContainer'>
			
			<h1>
				{type}
				{fullname}
			</h1>
			<h2>Rzut boczny:</h2>
			<div className={isFullscreen ? 'fullscreenBackground' : 'imgContainer'}>
				<img
					className={isFullscreen ? 'fullscreen' : 'vehiclePicture'}
					src={`./img/vehiclesImg/vehiclesPicture/${props.img}picture.png`}
					alt={props.img}
				/>
					{isFullscreen ? (
				<button
					className='closefullscreenBtn btn'
					onClick={() => {
						setIsFullscreen(false);
					}}
				>
					X
				</button>
			) : (
				<button
					className='fullscreenBtn btn'
					onClick={() => {
						setIsFullscreen(true);
					}}
				>
					<img className='magnifyingGlassIcon' src={magnifyingGlass} />
				</button>
			)}
				
			</div>
			
		</div> : <Spinner/>}
				
			</div>
		</>
	);
};

export default VehiclePicture;
