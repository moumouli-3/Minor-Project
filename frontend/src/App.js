// import logo from './logo.svg';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './pages/home'
import Sem1 from './pages/sem1/sem1'
// import Sem2 from './pages/sem1/sem2'
// import Sem3 from './pages/sem1/sem3'
// import Sem4 from './pages/sem1/sem4'
// import Sem5 from './pages/sem1/sem5'
// import Sem6 from './pages/sem1/sem6'
// import Sem7 from './pages/sem1/sem7'
import Sem8 from './pages/sem8/sem8'

import Bio from './pages/sem1/bio/bio'
import Bms from './pages/sem1/bms/bms'
// import Bio from './pages/sem1/bio/bio'

import Sem8Sub1 from './pages/sem8_sub1'
import Error from './pages/error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Home/>}/>

            <Route path="sem1">
              <Route path="" element={<Sem1/>}></Route>
              <Route path="bio">
                <Route path="" element={<Bio/>}></Route>
                {/* <Route path="notes" element={<BioNotes/>}></Route> */}
                {/* <Route path="topicwisequestions" element={<BiotopicwiseQuestions/>}></Route> */}
                {/* <Route path="previousyearpapers" element={<Biopreviousyearpapers/>}></Route> */}
              </Route>
              <Route path="bms">
                <Route path="" element={<Bms/>}></Route>
                {/* <Route path="notes" element={<BioNotes/>}></Route> */}
                {/* <Route path="topicwisequestions" element={<BiotopicwiseQuestions/>}></Route> */}
                {/* <Route path="previousyearpapers" element={<Biopreviousyearpapers/>}></Route> */}
              </Route>
            </Route>

            {/* <Route path="sem2">
              <Route path="" element={<Sem2/>}></Route>
              <Route path="aec" element={<Aec/>}></Route>
              <Route path="aeclab" element={<Aeclab/>}></Route>
              <Route path="bee" element={<Bee/>}></Route>
              <Route path="beelab" element={<Beelab/>}></Route>
              <Route path="cprog" element={<Cprog/>}></Route>
              <Route path="maths" element={<Maths/>}></Route>
              <Route path="physics" element={<Physics/>}></Route>
              <Route path="physicslab" element={<Physicslab/>}></Route>
            </Route> */}

            <Route path="sem8">
              <Route path="" element={<Sem8/>}></Route>
              <Route path="sub1" element={<Sem8Sub1/>}></Route>
              <Route path="sub2" element={<div>Sub2</div>}></Route>
            </Route>

          </Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
