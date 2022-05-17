import React from 'react';
import spinner from '../../assets/img/spinner/Gear.svg';
import './spinner.styles.scss';
const Spinner = () => {
    return (
        <img className='spinner' src={spinner}></img>
    )
}


export default Spinner;