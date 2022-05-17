import React from 'react';
import './navigation.styles.scss';
import { NavLink } from 'react-router-dom';
import { useResizeDetector } from 'react-resize-detector';
import homeLogo from '../../assets/img/home.svg';
const Navigation = (props) => {
	const { width, ref } = useResizeDetector();
	const nav = () => {
		switch (props.slide) {
			case 0:
				return (
					<>
						<div className='widthDetector' ref={ref}></div>
						<div className='navContainer' style={{ width: width }}>
							<NavLink className={'navBtn'} to={'/vehiclelist'}>
								Poprzedni
							</NavLink>

							{console.log(props.category)}
							<NavLink className={'navBtn'} to={'/vehiclelist'}>
								<img src={homeLogo} alt='' />
							</NavLink>
							<NavLink
								className={'navBtn'}
								to={`/${props.category}/${props.nextName}/${props.nextSlide}`}
							>
								Następny
							</NavLink>
						</div>
					</>
				);
			case 1:
				return (
					<>
						<div className='widthDetector' ref={ref}></div>
						<div className='navContainer' style={{ width: width }}>
							<NavLink
								className={'navBtn'}
								to={`/${props.category}/${props.prevName}/${props.prevSlide}`}
							>
								Poprzedni
							</NavLink>
							<NavLink className='navBtn' to={'/vehiclelist'}>
								<img src={homeLogo} alt='' />
							</NavLink>
							<NavLink
								className='navBtn'
								to={`/${props.category}/${props.nextName}/${props.nextSlide}`}
							>
								Następny
							</NavLink>
						</div>
					</>
				);
			case 2:
				return (
					<>
						<div className='widthDetector' ref={ref}></div>
						<div className='navContainer' style={{ width: width }}>
							<NavLink
								className={'navBtn'}
								to={`/${props.category}/${props.prevName}/${props.prevSlide}`}
							>
								Poprzedni
							</NavLink>
							<NavLink className='navBtn' to={'/vehiclelist'}>
								<img src={homeLogo} alt='' />
							</NavLink>
						</div>
					</>
				);
			
			default:
				console.log(`Nie ma takiego slajdu`);
		}
	};
	return <div>{nav()}</div>;
};

export default Navigation;
