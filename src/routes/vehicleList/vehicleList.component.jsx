// import 'vehicleList.styles.scss';
import { NavLink } from 'react-router-dom';
import vehicles from './vehicleList.json';
import './vehicleList.styles.scss';
import { withScorm } from 'react-scorm-provider';
import TopBar from '../../components/topBar/topBar.component.jsx';
import React from 'react';
import { useState, useEffect } from 'react/cjs/react.production.min';
import { loadImage } from '../../functions/loadImage';
import Spinner from '../../components/spinner/spinner.component.jsx';

const VehicleList = (props) => {
	const [imgsLoaded, setImgsLoaded] = useState(false);

	useEffect(() => {
		const imgs = [];
		vehicles.map((vehicle) => (
			imgs.push(
				`img/vehiclesImg/vehiclesListImg/${vehicle.img}.jpg`
			)
		));
	
		Promise.all(imgs.map((image) => loadImage(image)))
		  .then(() => setImgsLoaded(true))
		  .catch((err) => console.log("Failed to load images", err));
	  }, []);
	

	const listVehicles = vehicles.map((vehicle) => (
		<NavLink
			key={vehicle.name}
			className={'vehicleLink'}
			to={`/${vehicle.directory}`}
		>
			<img
				className='vehiclesListImg'
				sizes=''
				src={`./img/vehiclesImg/vehiclesListImg/${vehicle.img}.jpg`}
				alt={vehicle.name}
			></img>
			<h3 className='vehicleTitle'>{vehicle.name}</h3>
		</NavLink>
	));


	function custom_close(){
		if(confirm(" are you sure you want to close this page ？")){
			 window.opener=null;
			 window.open('','_self');
			 window.close();
		}
		else{}
   } 
	return (
		<>
			<div className='container'>
		<TopBar />
				{imgsLoaded ?  	
					<>
				<h1 className='vahicleListTitle '>Spis treści</h1>
				<div className='vehicleList'>{listVehicles}</div>
						<NavLink to={`/exit`} className='close'>
						
					Zakończ
							

				</NavLink>
				
						</>
			: 
		 <Spinner/>}
		</div>
		</>
	);
};

const EnhancedComponent = withScorm()(VehicleList);
export default EnhancedComponent;
