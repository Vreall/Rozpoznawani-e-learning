
import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Introduction from './routes/introduction/introduction.component.jsx';
import VehicleList from './routes/vehicleList/vehicleList.component.jsx';
import Bwp1Params from './routes/bojowe_wozy_piechoty/bwp1/bwp1-params.component.jsx';
import Bwp1Picture from './routes/bojowe_wozy_piechoty/bwp1/bwp1-picture.component.jsx';
import Bwp1NightVision from './routes/bojowe_wozy_piechoty/bwp1/bwp1-NightVision.component.jsx';
import Bwp1360 from './routes/bojowe_wozy_piechoty/bwp1/bwp1-360.component.jsx';
import Home from './routes/home/home.component.jsx';
import Bwp2Params from './routes/bojowe_wozy_piechoty/bwp2/bwp2-params.component.jsx';
import Bwp2Picture from './routes/bojowe_wozy_piechoty/bwp2/bwp2-picture.component.jsx';
import Bwp2NightVision from './routes/bojowe_wozy_piechoty/bwp2/bwp2-NightVision.component.jsx';
import Bwp3Params from './routes/bojowe_wozy_piechoty/bwp3/bwp3-params.component.jsx';
import Bwp2360 from './routes/bojowe_wozy_piechoty/bwp2/bwp2-360.component.jsx';
import Bwp3Picture from './routes/bojowe_wozy_piechoty/bwp3/bwp3-picture.component.jsx';
import Bwp3NightVision from './routes/bojowe_wozy_piechoty/bwp3/bwp3-NightVision.component.jsx';
import Bwp3360 from './routes/bojowe_wozy_piechoty/bwp3/bwp3-360.component.jsx';
import BmptParams from './routes/bojowe_wozy_piechoty/bmpt/bmpt-params.component.jsx';
import BmptPicture from './routes/bojowe_wozy_piechoty/bmpt/bmpt-picture.component.jsx';
import Bmpt360 from './routes/bojowe_wozy_piechoty/bmpt/bmpt-360.component.jsx';
import Kruganiec251Picture from './routes/bojowe_wozy_piechoty/kruganiec25/kruganiec25-picture.component.jsx';
import Kruganiec252Picture from './routes/bojowe_wozy_piechoty/kruganiec25/kruganiec25-2-picture.component.jsx';
import T15Params from './routes/bojowe_wozy_piechoty/t15/t15-params.component.jsx';
import T15Picture from './routes/bojowe_wozy_piechoty/t15/t15-picture.component.jsx';
import T15NightVision from './routes/bojowe_wozy_piechoty/t15/t15-NightVision.component.jsx';
import Bmd1Params from './routes/bojowe_wozy_desantu/bmd1/bmd1-params.component.jsx';
import Bmd1Picture from './routes/bojowe_wozy_desantu/bmd1/bmd1-picture.component.jsx';
import Bmd2Params from './routes/bojowe_wozy_desantu/bmd2/bmd2-params.component.jsx';
import Bmd2Picture from './routes/bojowe_wozy_desantu/bmd2/bmd2-picture.component.jsx';
import Bmd2NightVision from './routes/bojowe_wozy_desantu/bmd2/bmd2-NightVision.component.jsx';
import Bmd3Params from './routes/bojowe_wozy_desantu/bmd3/bmd3-params.component.jsx';
import Bmd3Picture from './routes/bojowe_wozy_desantu/bmd3/bmd3-picture.component.jsx';
import Bmd4Params from './routes/bojowe_wozy_desantu/bmd4/bmd4-params.component.jsx';
import Bmd4Picture from './routes/bojowe_wozy_desantu/bmd4/bmd4-picture.component.jsx';
import Btr80Params from './routes/transportery_opancerzone/btr80/btr80-params.component.jsx';
import Btr80Picture from './routes/transportery_opancerzone/btr80/btr80-picture.component.jsx';
import Btr80NightVision from './routes/transportery_opancerzone/btr80/btr80-NightVision.component.jsx';
import Btr80360 from './routes/transportery_opancerzone/btr80/btr80-360.component.jsx';
import Btr82aParams from './routes/transportery_opancerzone/btr82a/btr82a-params.component.jsx';
import Btr82aPicture from './routes/transportery_opancerzone/btr82a/btr82a-picture.component.jsx';
import Btr82aNightVision from './routes/transportery_opancerzone/btr82a/btr82a-NightVision.component.jsx';
import Btr90Params from './routes/transportery_opancerzone/btr90/btr90-params.component.jsx';
import Btr90Picture from './routes/transportery_opancerzone/btr90/btr90-picture.component.jsx';
import Vpk7829Params from './routes/transportery_opancerzone/vpk7829/vpk7829-params.component.jsx';
import Vpk7829Picture from './routes/transportery_opancerzone/vpk7829/vpk7829-picture.component.jsx';
import T72Params from './routes/czolgi/t72/t72-params.component.jsx';
import T72Picture from './routes/czolgi/t72/t72-picture.component.jsx';
import T722Picture from './routes/czolgi/t72/t72-2-picture.component.jsx';
import T723Picture from './routes/czolgi/t72/t72-3-picture.component.jsx';
import T72NightVision from './routes/czolgi/t72/t72-NightVision.component.jsx';
import T72b31Picture from './routes/czolgi/t72/t72b3-picture.component.jsx';
import T72b32Picture from './routes/czolgi/t72/t72b3-2-picture.component.jsx';
import T72m1360 from './routes/czolgi/t72/t72m1-360.component.jsx';
import T72m1reactive360 from './routes/czolgi/t72/t72m1reactive-360.component.jsx';
import T80Params from './routes/czolgi/t80/t80-params.component.jsx';
import T80Picture from './routes/czolgi/t80/t80-picture.component.jsx';
import T80bvPicture from './routes/czolgi/t80/t80bv-picture.component.jsx';
import T80uPicture from './routes/czolgi/t80/t80u-picture.component.jsx';
import T80ukPicture from './routes/czolgi/t80/t80uk-picture.component.jsx';
import T80uk2Picture from './routes/czolgi/t80/t80uk-2-picture.component.jsx';
import T80NightVision from './routes/czolgi/t80/t80-NightVision.component.jsx';
import T80360 from './routes/czolgi/t80/t80-360.component.jsx';
import T80reactive360 from './routes/czolgi/t80/t80reactive-360.component.jsx';
import T90Params from './routes/czolgi/t90/t90-params.component.jsx';
import T90Picture from './routes/czolgi/t90/t90-picture.component.jsx';
import T90msPicture from './routes/czolgi/t90/t90ms-picture.component.jsx';
import T90NightVision from './routes/czolgi/t90/t90-NightVision.component.jsx';
import T90s360 from './routes/czolgi/t90/t90-360.component.jsx';
import G2s1Params from './routes/dziala_samobiezne/2s1/2s1-params.component.jsx';
import G2s1Picture from './routes/dziala_samobiezne/2s1/2s1-picture.component.jsx';
import G2s1NightVision from './routes/dziala_samobiezne/2s1/2s1-NightVision.component.jsx';
import G2s1360 from './routes/dziala_samobiezne/2s1/2s1-360.component.jsx';
import G2s3Params from './routes/dziala_samobiezne/2s3/2s3-params.component.jsx';
import G2s3Picture from './routes/dziala_samobiezne/2s3/2s3-picture.component.jsx';
import G2s3NightVision from './routes/dziala_samobiezne/2s3/2s3-NightVision.component.jsx';
import G2s3360 from './routes/dziala_samobiezne/2s3/2s3-360.component.jsx';
import G2s4Params from './routes/dziala_samobiezne/2s4/2s4-params.component.jsx';
import G2s4Picture from './routes/dziala_samobiezne/2s4/2s4-picture.component.jsx';
import G2s42Picture from './routes/dziala_samobiezne/2s4/2s4-2-picture.component.jsx';
import G2s5Params from './routes/dziala_samobiezne/2s5/2s5-params.component.jsx';
import G2s5Picture from './routes/dziala_samobiezne/2s5/2s5-picture.component.jsx';
import G2s52Picture from './routes/dziala_samobiezne/2s5/2s5-2-picture.component.jsx';
import G2s7Params from './routes/dziala_samobiezne/2s7/2s7-params.component.jsx';
import G2s7Picture from './routes/dziala_samobiezne/2s7/2s7-picture.component.jsx';
import G2s72Picture from './routes/dziala_samobiezne/2s7/2s7-2-picture.component.jsx';
import G2s9Params from './routes/dziala_samobiezne/2s9/2s9-params.component.jsx';
import G2s9Picture from './routes/dziala_samobiezne/2s9/2s9-picture.component.jsx';
import G2s9NightVision from './routes/dziala_samobiezne/2s9/2s9-NightVision.component.jsx';
import G2s19Params from './routes/dziala_samobiezne/2s19/2s19-params.component.jsx';
import G2s19Picture from './routes/dziala_samobiezne/2s19/2s19-picture.component.jsx';
import G2s19NightVision from './routes/dziala_samobiezne/2s19/2s19-NightVision.component.jsx';
import G2s19360 from './routes/dziala_samobiezne/2s19/2s19-360.component.jsx';
import G2s23Params from './routes/dziala_samobiezne/2s23/2s23-params.component.jsx';
import G2s23Picture from './routes/dziala_samobiezne/2s23/2s23-picture.component.jsx';
import G2s25Params from './routes/dziala_samobiezne/2s25/2s25-params.component.jsx';
import G2s25Picture from './routes/dziala_samobiezne/2s25/2s25-picture.component.jsx';
import G2s252Picture from './routes/dziala_samobiezne/2s25/2s25-2-picture.component.jsx';
import G2s31Params from './routes/dziala_samobiezne/2s31/2s31-params.component.jsx';
import G2s31Picture from './routes/dziala_samobiezne/2s31/2s31-picture.component.jsx';
import G2s35Params from './routes/dziala_samobiezne/2s35/2s35-params.component.jsx';
import G2s35Picture from './routes/dziala_samobiezne/2s35/2s35-picture.component.jsx';
import G2s35NightVision from './routes/dziala_samobiezne/2s35/2s35-NightVision.component.jsx';
import Bm21Params from './routes/samobiezne_wyrzutnie_rakietowe/bm21/bm21-params.component.jsx';
import Bm21Picture from './routes/samobiezne_wyrzutnie_rakietowe/bm21/bm21-picture.component.jsx';
import Bm21NightVision from './routes/samobiezne_wyrzutnie_rakietowe/bm21/bm21-NightVision.component.jsx';
import Bm21360 from './routes/samobiezne_wyrzutnie_rakietowe/bm21/bm21-360.component.jsx';
import Bm27Params from './routes/samobiezne_wyrzutnie_rakietowe/bm27/bm27-params.component.jsx';
import Bm27Picture from './routes/samobiezne_wyrzutnie_rakietowe/bm27/bm27-picture.component.jsx';
import Bm272Picture from './routes/samobiezne_wyrzutnie_rakietowe/bm27/bm27-2-picture.component.jsx';
import Bm30Params from './routes/samobiezne_wyrzutnie_rakietowe/bm30/bm30-params.component.jsx';
import Bm30Picture from './routes/samobiezne_wyrzutnie_rakietowe/bm30/bm30-picture.component.jsx';
import Bm30360 from './routes/samobiezne_wyrzutnie_rakietowe/bm30/bm30-360.component.jsx';
import T9k79Params from './routes/samobiezne_wyrzutnie_rakietowe/9k79/9k79-params.component.jsx';
import T9k79Picture from './routes/samobiezne_wyrzutnie_rakietowe/9k79/9k79-picture.component.jsx';
import T9k79360 from './routes/samobiezne_wyrzutnie_rakietowe/9k79/9k79-360.component.jsx';
import Tos1Params from './routes/samobiezne_wyrzutnie_rakietowe/tos1/tos1-params.component.jsx';
import Tos1Picture from './routes/samobiezne_wyrzutnie_rakietowe/tos1/tos1-picture.component.jsx';
import Tos1360 from './routes/samobiezne_wyrzutnie_rakietowe/tos1/tos1-360.component.jsx';
import S300Picture from './routes/systemy_antybalistyczne/s300-picture.component.jsx';
import S300vPicture from './routes/systemy_antybalistyczne/s300v-picture.component.jsx';
import S400Picture from './routes/systemy_antybalistyczne/s400-picture.component.jsx';
import MtlbParams from './routes/inne_pojazdy/mtlb/mtlb-params.component.jsx';
import MtlbPicture from './routes/inne_pojazdy/mtlb/mtlb-picture.component.jsx';
import MtlbNightVision from './routes/inne_pojazdy/mtlb/mtlb-NightVision.component.jsx';
import Brdm2Params from './routes/inne_pojazdy/brdm2/brdm2-params.component.jsx';
import Brdm2Picture from './routes/inne_pojazdy/brdm2/brdm2-picture.component.jsx';
import Brdm2NightVision from './routes/inne_pojazdy/brdm2/brdm2-NightVision.component.jsx';
import Brdm2360 from './routes/inne_pojazdy/brdm2/brdm2-360.component.jsx';
import Gaz2330Params from './routes/inne_pojazdy/gaz2330/gaz2330-params.component.jsx';
import Gaz2330Picture from './routes/inne_pojazdy/gaz2330/gaz2330-picture.component.jsx';
import Gaz23302Picture from './routes/inne_pojazdy/gaz2330/gaz2330-2-picture.component.jsx';
import Gaz23303Picture from './routes/inne_pojazdy/gaz2330/gaz2330-3-picture.component.jsx';
import Exit from "./components/exit/exit.component.jsx";



class App extends React.Component {
	
	
  render() {

    return (
      <div id="scorm_object" className='App'>
   
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exit' element={<Exit />} />
				<Route path='/introduction' element={<Introduction />} />
				<Route path='/vehiclelist' element={<VehicleList />}/>
				<Route path='/Bojowe%20Wozy%20Piechoty'>
					<Route path='bwp1/1' element={<Bwp1Params />}></Route>
					<Route path='bwp1/2' element={<Bwp1Picture />}></Route>
					<Route path='bwp1/3' element={<Bwp1NightVision />}></Route>
					<Route path='bwp1/4' element={<Bwp1360 />}></Route>
					<Route path='bwp2/1' element={<Bwp2Params />}></Route>
					<Route path='bwp2/2' element={<Bwp2Picture />}></Route>
					<Route path='bwp2/3' element={<Bwp2NightVision />}></Route>
					<Route path='bwp2/4' element={<Bwp2360 />}></Route>
					<Route path='bwp3/1' element={<Bwp3Params />}></Route>
					<Route path='bwp3/2' element={<Bwp3Picture />}></Route>
					<Route path='bwp3/3' element={<Bwp3NightVision />}></Route>
					<Route path='bwp3/4' element={<Bwp3360 />}></Route>
					<Route path='bmpt/1' element={<BmptParams />}></Route>
					<Route path='bmpt/2' element={<BmptPicture />}></Route>
					<Route path='bmpt/3' element={<Bmpt360 />}></Route>
					<Route path='kruganiec25/1' element={<Kruganiec251Picture />}></Route>
					<Route path='kruganiec25/2' element={<Kruganiec252Picture />}></Route>
					<Route path='t15/1' element={<T15Params />}></Route>
					<Route path='t15/2' element={<T15Picture />}></Route>
					<Route path='t15/3' element={<T15NightVision />}></Route>
				</Route>
				<Route path='/Bojowe%20Wozy%20Desantu'>
					<Route path='bmd1/1' element={<Bmd1Params />}></Route>
					<Route path='bmd1/2' element={<Bmd1Picture />}></Route>
					<Route path='bmd2/1' element={<Bmd2Params />}></Route>
					<Route path='bmd2/2' element={<Bmd2Picture />}></Route>
					<Route path='bmd2/3' element={<Bmd2NightVision />}></Route>
					<Route path='bmd3/1' element={<Bmd3Params />}></Route>
					<Route path='bmd3/2' element={<Bmd3Picture />}></Route>
					<Route path='bmd4/1' element={<Bmd4Params />}></Route>
					<Route path='bmd4/2' element={<Bmd4Picture />}></Route>
				</Route>
				<Route path='/transportery%20opancerzone'>
					<Route path='btr80/1' element={<Btr80Params />}></Route>
					<Route path='btr80/2' element={<Btr80Picture />}></Route>
					<Route path='btr80/3' element={<Btr80NightVision />}></Route>
					<Route path='btr80/4' element={<Btr80360 />}></Route>
					<Route path='btr82a/1' element={<Btr82aParams />}></Route>
					<Route path='btr82a/2' element={<Btr82aPicture />}></Route>
					<Route path='btr82a/3' element={<Btr82aNightVision />}></Route>
					<Route path='btr90/1' element={<Btr90Params />}></Route>
					<Route path='btr90/2' element={<Btr90Picture />}></Route>
					<Route path='vpk7829/1' element={<Vpk7829Params />}></Route>
					<Route path='vpk7829/2' element={<Vpk7829Picture />}></Route>
				</Route>
				<Route path='/czolgi'>
					<Route path='t72/1' element={<T72Params />}></Route>
					<Route path='t72/2' element={<T72Picture />}></Route>
					<Route path='t72/3' element={<T722Picture />}></Route>
					<Route path='t72/4' element={<T723Picture />}></Route>
					<Route path='t72/5' element={<T72NightVision />}></Route>
					<Route path='t72/6' element={<T72b31Picture />}></Route>
					<Route path='t72/7' element={<T72b32Picture />}></Route>
					<Route path='t72/8' element={<T72m1360 />}></Route>
					<Route path='t72/9' element={<T72m1reactive360 />}></Route>
					<Route path='t80/1' element={<T80Params />}></Route>
					<Route path='t80/2' element={<T80Picture />}></Route>
					<Route path='t80/3' element={<T80bvPicture />}></Route>
					<Route path='t80/4' element={<T80uPicture />}></Route>
					<Route path='t80/5' element={<T80ukPicture />}></Route>
					<Route path='t80/6' element={<T80uk2Picture />}></Route>
					<Route path='t80/7' element={<T80NightVision />}></Route>
					<Route path='t80/8' element={<T80360 />}></Route>
					<Route path='t80/9' element={<T80reactive360 />}></Route>
					<Route path='t90/1' element={<T90Params />}></Route>
					<Route path='t90/2' element={<T90Picture />}></Route>
					<Route path='t90/3' element={<T90msPicture />}></Route>
					<Route path='t90/4' element={<T90NightVision />}></Route>
					<Route path='t90/5' element={<T90s360 />}></Route>
				</Route>
				<Route path='/dziala%20samobiezne'>
					<Route path='2s1/1' element={<G2s1Params />}></Route>
					<Route path='2s1/2' element={<G2s1Picture />}></Route>
					<Route path='2s1/3' element={<G2s1NightVision />}></Route>
					<Route path='2s1/4' element={<G2s1360 />}></Route>
					<Route path='2s3/1' element={<G2s3Params />}></Route>
					<Route path='2s3/2' element={<G2s3Picture />}></Route>
					<Route path='2s3/3' element={<G2s3NightVision />}></Route>
					<Route path='2s3/4' element={<G2s3360 />}></Route>
					<Route path='2s4/1' element={<G2s4Params />}></Route>
					<Route path='2s4/2' element={<G2s4Picture />}></Route>
					<Route path='2s4/3' element={<G2s42Picture />}></Route>
					<Route path='2s5/1' element={<G2s5Params />}></Route>
					<Route path='2s5/2' element={<G2s5Picture />}></Route>
					<Route path='2s5/3' element={<G2s52Picture />}></Route>
					<Route path='2s7/1' element={<G2s7Params />}></Route>
					<Route path='2s7/2' element={<G2s7Picture />}></Route>
					<Route path='2s7/3' element={<G2s72Picture />}></Route>
					<Route path='2s9/1' element={<G2s9Params />}></Route>
					<Route path='2s9/2' element={<G2s9Picture />}></Route>
					<Route path='2s9/3' element={<G2s9NightVision />}></Route>
					<Route path='2s19/1' element={<G2s19Params />}></Route>
					<Route path='2s19/2' element={<G2s19Picture />}></Route>
					<Route path='2s19/3' element={<G2s19NightVision />}></Route>
					<Route path='2s19/4' element={<G2s19360 />}></Route>
					<Route path='2s23/1' element={<G2s23Params />}></Route>
					<Route path='2s23/2' element={<G2s23Picture />}></Route>
					<Route path='2s25/1' element={<G2s25Params />}></Route>
					<Route path='2s25/2' element={<G2s25Picture />}></Route>
					<Route path='2s25/3' element={<G2s252Picture />}></Route>
					<Route path='2s31/1' element={<G2s31Params />}></Route>
					<Route path='2s31/2' element={<G2s31Picture />}></Route>
					<Route path='2s35/1' element={<G2s35Params />}></Route>
					<Route path='2s35/2' element={<G2s35Picture />}></Route>
					<Route path='2s35/3' element={<G2s35NightVision />}></Route>
				</Route>
				<Route path='/samobiezne%20wyrzutnie%20rakietowe'>
					<Route path='bm21/1' element={<Bm21Params />}></Route>
					<Route path='bm21/2' element={<Bm21Picture />}></Route>
					<Route path='bm21/3' element={<Bm21NightVision />}></Route>
					<Route path='bm21/4' element={<Bm21360 />}></Route>
					<Route path='bm27/1' element={<Bm27Params />}></Route>
					<Route path='bm27/2' element={<Bm27Picture />}></Route>
					<Route path='bm27/3' element={<Bm272Picture />}></Route>
					<Route path='bm30/1' element={<Bm30Params />}></Route>
					<Route path='bm30/2' element={<Bm30Picture />}></Route>
					<Route path='bm30/3' element={<Bm30360 />}></Route>
					<Route path='9k79/1' element={<T9k79Params />}></Route>
					<Route path='9k79/2' element={<T9k79Picture />}></Route>
					<Route path='9k79/3' element={<T9k79360 />}></Route>
					<Route path='tos1/1' element={<Tos1Params />}></Route>
					<Route path='tos1/2' element={<Tos1Picture />}></Route>
					<Route path='tos1/3' element={<Tos1360 />}></Route>
				</Route>
				<Route path='/systemy%20antybalistyczne'>
					<Route path='s300/1' element={<S300Picture />}></Route>
					<Route path='s300v/1' element={<S300vPicture />}></Route>
					<Route path='s400/1' element={<S400Picture />}></Route>
				</Route>
				<Route path='/inne%20pojazdy'>
					<Route path='mtlb/1' element={<MtlbParams />}></Route>
					<Route path='mtlb/2' element={<MtlbPicture />}></Route>
					<Route path='mtlb/3' element={<MtlbNightVision />}></Route>
					<Route path='brdm2/1' element={<Brdm2Params />}></Route>
					<Route path='brdm2/2' element={<Brdm2Picture />}></Route>
					<Route path='brdm2/3' element={<Brdm2NightVision />}></Route>
					<Route path='brdm2/4' element={<Brdm2360 />}></Route>
					<Route path='gaz2330/1' element={<Gaz2330Params />}></Route>
					<Route path='gaz2330/2' element={<Gaz2330Picture />}></Route>
					<Route path='gaz2330/3' element={<Gaz23302Picture />}></Route>
					<Route path='gaz2330/4' element={<Gaz23303Picture />}></Route>
				</Route>
			</Routes>
			
		</div>
    );
  }
}

export default App;
