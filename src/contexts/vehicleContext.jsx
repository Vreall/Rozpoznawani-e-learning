import { createContext, useState } from 'react';
import React from 'react';

import VEHICLES from '../vehicleParamsData.json';

export const VehiclesContext = createContext({
	vehicles: [],
});

export const VehicleProvider = ({ children }) => {
	const [vehicles, setVehicles] = useState(VEHICLES);
	const value = { vehicles };
	return (
		<VehiclesContext.Provider value={value}>
			{children}
		</VehiclesContext.Provider>
	);
};
