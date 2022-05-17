import { NavLink } from 'react-router-dom';
import lector from '../../assets/sounds/s1.mp3';
import './introduction.styles.scss';
import { useRef, useEffect } from 'react';
import React from 'react';
import TopBar from '../../components/topBar/topBar.component.jsx';
const Introduction = (props) => {

	let audio = useRef();
	useEffect(() => {
		audio.current = new Audio(lector);
		audio.current.play();
		return () => {
			audio.current.pause();
		};
	}, []);
	return (
		<>
		<div className='introductionContainer'>
			<TopBar />
			<div className='introductionContentContainer'>
				<div className='textContainer'>
					<h1 className='introTitle'>Wprowadzenie</h1>
					<p className='introParagraph'>
						Poniższa prezentacja zapozna Cię z pojazdami będącymi na
						wyposażeniu Sił Zbrojnych Federacji Rosyjskiej. Analizując
						przedstawione slajdy, zauważysz miedzy innymi czołgi, bojowe wozy
						piechoty, transportery opancerzone, artylerię lufową i rakietową.
						Poza zdjęciami wyżej wymienionego wyposażenia, zamieszczone są
						także trójwymiarowe grafiki pojazdów widziane podczas obserwacji w
						spektrum podczerwieni.
					</p>
					<p className='introParagraph'>
						Dzięki temu będziecie mieli możliwość zauważenia
						charakterystycznych punktów cieplnych pozwalających rozpoznać je
						podczas korzystania ze specjalistycznych urządzeń wykorzystujących
						promieniowanie podczerwone. Ponadto, zostaną przybliżone
						podstawowe dane taktyczno-techniczne każdej z przytoczonych
						jednostek sprzętu wojskowego. Umożliwi to osiągniecie lepszych
						wyników w szkoleniu z użycia przeciwpancernych pocisków
						kierowanych będących na wyposażeniu WOT.
					</p>
				</div>
				<NavLink className={'startCourse'} to={'/vehiclelist'}>
					Dalej
				</NavLink>
			</div>
		</div>
	</>
	);
};

export default Introduction;
