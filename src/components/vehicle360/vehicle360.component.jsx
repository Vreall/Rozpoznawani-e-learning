import React from 'react';
import { createElement, useEffect, useState, useContext, useRef } from 'react';
import { VehiclesContext } from '../../contexts/vehicleContext.jsx';
import TopBar from '../../components/topBar/topBar.component.jsx';
import magnifyingGlass from '../../assets/img/icons/magnifying-glass.svg';
import './vehicle360.styles.scss';
import { loadImage } from '../../functions/loadImage.js';
import Spinner from '../spinner/spinner.component.jsx';



const Vehicle360 = (props) => {
	const [show, setShow] = useState(0);
	const [mouseDownPosition, setMouseDownPosition] = useState(0);
	const [touchPosition, setTouchPosition] = useState(0);
	const { vehicles } = useContext(VehiclesContext);
	const [vehicle, setVehicle] = useState({});
	const { type, fullname } = vehicle;
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [imgsLoaded, setImgsLoaded] = useState(false);

	function searchingVehicle(value) {
		if (value.type === props.name) {
			console.log('weszło');
			return value;
		}
	}
	const downloadingData = async () => {
		const newVehicle = await vehicles.filter(searchingVehicle);
		await setVehicle(newVehicle[0]);
	};

	useEffect(() => {
		downloadingData();
		const imgs = [];
		for (let i = 0; i <= props.numbersOfPhotos; i++) {
			imgs.push(
				`img/vehiclesImg/vehicle360/${props.tank}/tank-${i}.jpg`
			);
		}
	
		Promise.all(imgs.map((image) => loadImage(image)))
		  .then(() => setImgsLoaded(true))
			.catch((err) => console.log("Failed to load images", err));
		
		
	}, []);
	const images = () => {
		return createElement('img', {
			className: 'picture',
			cursor: 'pointer',
			src: `img/vehiclesImg/vehicle360/${props.tank}/tank-${show}.jpg`,
			key: { show },
		});
	};

	const mouseMoveHandler = async (e) => {
		if (mouseDownPosition > 0) {
			if (mouseDownPosition + 20 < e.clientX) {
				if (show === props.numbersOfPhotos) {
					setShow(0);
				} else {
					setShow(show + 1);
					await setMouseDownPosition(e.clientX);
				}
			} else if (mouseDownPosition > e.clientX + 20) {
				if (show === 0) {
					setShow(props.numbersOfPhotos);
				} else {
					console.log(mouseDownPosition);
					setShow(show - 1);
					await setMouseDownPosition(e.clientX);
				}
			}
		}
	};

	const touchMoveHandler = (e) => {
		if (touchPosition > 0) {
			if (touchPosition < e.touches[0].clientX) {
				if (show === props.numbersOfPhotos) {
					setShow(0);
				} else {
					setShow(show + 1);
					setTouchPosition(e.touches[0].clientX);
				}
			} else if (touchPosition > e.touches[0].clientX) {
				if (show === 0) {
					setShow(props.numbersOfPhotos);
				} else {
					setShow(show - 1);
					setTouchPosition(e.touches[0].clientX);
				}
			}
		}

		setTouchPosition(e.touches[0].clientX);
	};
	const touchStartHandler = (e) => {
		setTouchPosition(e.touches[0].clientX);
	};
	const mouseDownHandler = (e) => {
		setMouseDownPosition(e.clientX);
	};
	const mouseUpHandler = () => {
		setMouseDownPosition(0);
	};

	const touchEndHandler = () => {
		setTouchPosition(0);
	};

	const onscroll = (e) => {
		console.log(e.deltaY);
		if (e.deltaY < 0) {
			if (show === props.numbersOfPhotos) {
				setShow(0);
			} else {
				setShow(show + 1);
			}
		}
		if (e.deltaY > 0) {
			if (show === 0) {
				setShow(props.numbersOfPhotos);
			} else {
				setShow(show - 1);
			}
		}
	};

	return (
		<>
			<div className='container'>
				<TopBar />
				{imgsLoaded ? <div className='vehicle360ContentContainer'>
					<h1>
						{type}
						{fullname}
					</h1>
					<h2>Interaktywny widok w 360°:</h2>
					<span className='instruction'>Chwyć zdjęcie i przesuwaj by obracać model</span>
					<div
						className={
							isFullscreen ? 'fullscreenBackground' : 'pictureContainer'
						}
						onMouseDown={mouseDownHandler}
						onMouseMove={mouseMoveHandler}
						onMouseUp={mouseUpHandler}
						onTouchMove={touchMoveHandler}
						onTouchStart={touchStartHandler}
						onTouchEnd={touchEndHandler}
						onWheel={onscroll}
					>
						{images()}
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
								<img
									className='magnifyingGlassIcon'
									src={magnifyingGlass}
									alt='magnifying glass'
								/>
							</button>
						)}
					</div>
					
				
				</div> : <Spinner/>}
				
			</div>
		</>
	);
};

export default Vehicle360;
