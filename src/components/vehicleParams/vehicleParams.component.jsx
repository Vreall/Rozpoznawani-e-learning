import React from 'react';
import { useContext, useEffect, useState} from 'react';
import './vehicleParams.styles.scss';
import { VehiclesContext } from '../../contexts/vehicleContext.jsx';
import TopBar from '../../components/topBar/topBar.component.jsx';
import { loadImage } from '../../functions/loadImage';
import Spinner from '../spinner/spinner.component.jsx';

const VehicleParams = (props) => {
	const { vehicles } = useContext(VehiclesContext);
	const [vehicle, setVehicle] = useState({});
	
	const [imgsLoaded, setImgsLoaded] = useState(false);
	const imgs = [];
	function searchingVehicle(value) {
		if (value.type === props.name) {
			console.log('drugi');
			imgs.push(`./img/vehiclesImg/vehiclesParamsImg/${value.img}.jpg`);
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
	const {
		type,
		crew,
		weight,
		weapon1,
		weapon2,
		weapon3,
		weapon4,
		dimensions,
		fullname,
		img,
	} = vehicle;



	
	return (
		<>
			<div className='container'>
				<TopBar />
				
				{imgsLoaded ? <>
					<div className='vehicleParamsContentContainer contentContainer'>
						<h1 className='vehicleParamsTitle'>
							{type}
							{fullname}
						</h1>
						<img
							className='vehicleParamsImg'
							src={`./img/vehiclesImg/vehiclesParamsImg/${img}.jpg`}
							
							alt={type}
						></img>
						<div className='vehicleParamsContent'>
							<ul>
								<p>
									Typ: <span>{type}</span>
								</p>
								<p>
									załoga: <span>{crew}</span>
								</p>
								<p>
									masa bojowa: <span>{weight}</span>
								</p>
								{weapon1 !== '' && <span>Uzbrojenie:</span>}
								{weapon1 !== '' && <li className='weapon'>{weapon1}</li>}
								{weapon2 !== '' && <li className='weapon'>{weapon2}</li>}
								{weapon3 !== '' && <li className='weapon'>{weapon3}</li>}
								{weapon4 !== '' && <li className='weapon'>{weapon4}</li>}
								{dimensions !== '' && (
									<p>
										WYMIARY(dł./wys./szer./): <span>{dimensions}</span>
									</p>
								)}
							</ul>
						</div>
						</div></> : <Spinner/>}
				
			</div>
		</>
	);
};

export default VehicleParams;
