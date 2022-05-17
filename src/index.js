import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ScormProvider from 'react-scorm-provider';
import { HashRouter } from 'react-router-dom';
import { VehicleProvider } from './contexts/vehicleContext.jsx';
import './index.scss';


var mountNode = document.getElementById("app");
ReactDOM.render(<React.StrictMode>
    <HashRouter>
        <VehicleProvider>
            <ScormProvider
                version='1.2'
                debug={process.env.NODE_ENV !== 'production'}
            >
                <App />
            </ScormProvider>
        </VehicleProvider>
    </HashRouter>
</React.StrictMode>, mountNode);