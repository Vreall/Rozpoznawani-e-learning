import React from 'react';
import TopBar from '../topBar/topBar.component.jsx';
import './exit.styles.scss';

const Exit = () => {
    return (
        <>
			<div className='container'>
				<TopBar />
				<div className='exitContentContainer'>
				<h1 className='exitText'>Kurs zakończony. Możesz zamknąć przeglądarkę.</h1>
				</div>
			</div>
		</>
    )
}

export default Exit;