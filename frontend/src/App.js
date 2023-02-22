// import logo from './logo.svg';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './pages/home'
import Sem1 from './pages/sem1/sem1'
  
  import Bio from './pages/sem1/bio/bio'
    import BioTopicNotes from './pages/sem1/bio/topicwisenotes/topicwisenotes'
    import BioTopicQuestions from './pages/sem1/bio/topicwisequestions/topicwisequestion'
    import BioTopicVideos from './pages/sem1/bio/bioytvideos'
    import Biopreviousyearpapers from './pages/sem1/bio/previousyearpapers/prevpapers'
    
  import Bms from './pages/sem1/bms/bms'
    import BmsTopicNotes from './pages/sem1/bms/topicwisenotes/topicwisenotes'
    import BmsTopicQuestions from './pages/sem1/bms/topicwisequestions/topicwisequestion'
    import BmsTopicVideos from './pages/sem1/bms/bmsytvideos'
    import Bmspreviousyearpapers from './pages/sem1/bms/previousyearpapers/prevpapers'

  import Chem from './pages/sem1/chem/chem'
    import ChemTopicNotes from './pages/sem1/chem/topicwisenotes/topicwisenotes'
    import ChemTopicQuestions from './pages/sem1/chem/topicwisequestions/topicwisequestion'
    import ChemTopicVideos from './pages/sem1/chem/chemytvideos'
    import Chempreviousyearpapers from './pages/sem1/chem/previousyearpapers/prevpapers'
  
  import Chemprac from './pages/sem1/chemprac/chemprac'
    import Chempracexperiments from './pages/sem1/chemprac/experiments/topicwisenotes'
    import Chempracvivaquestions from './pages/sem1/chemprac/vivaquestions/topicwisequestion'
    import Chempracexperimentvideos from './pages/sem1/chemprac/chempracytvideos'
  
  import Engggraph from './pages/sem1/engggraph/engggraph'
    import Engggraphassignment from './pages/sem1/engggraph/assignment/topicwisenotes'
    import Engggraphexperimentvideos from './pages/sem1/engggraph/Engggraphassignmentyoutubevideos'
  
  import Evs from './pages/sem1/evs/evs'
    import EvsTopicNotes from './pages/sem1/evs/topicwisenotes/topicwisenotes'
    import EvsTopicQuestions from './pages/sem1/evs/topicwisequestions/topicwisequestion'
    import EvsTopicVideos from './pages/sem1/evs/evsytvideos'
    import Evspreviousyearpapers from './pages/sem1/evs/previousyearpapers/prevpapers'
  
  import Langlab from './pages/sem1/langlab/langlab'
    import Langlabassignment from './pages/sem1/langlab/assignment/topicwisenotes'

  import Maths1 from './pages/sem1/maths1/maths1'
    import Maths1TopicNotes from './pages/sem1/maths1/topicwisenotes/topicwisenotes'
    import Maths1TopicQuestions from './pages/sem1/maths1/topicwisequestions/topicwisequestion'
    import Maths1TopicVideos from './pages/sem1/maths1/maths1ytvideos'
    import Maths1previousyearpapers from './pages/sem1/maths1/previousyearpapers/prevpapers'
    
import Sem8 from './pages/sem8/sem8'


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
                <Route path="topicwisenotes" element={<BioTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<BioTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<BioTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Biopreviousyearpapers/>}></Route>
              </Route>

              <Route path="bms">
                <Route path="" element={<Bms/>}></Route>
                <Route path="topicwisenotes" element={<BmsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<BmsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<BmsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Bmspreviousyearpapers/>}></Route>
              </Route>

              <Route path="chem">
                <Route path="" element={<Chem/>}></Route>
                <Route path="topicwisenotes" element={<ChemTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<ChemTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<ChemTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Chempreviousyearpapers/>}></Route>
              </Route>

              <Route path="chemprac">
                <Route path="" element={<Chemprac/>}></Route>
                <Route path="experiments" element={<Chempracexperiments/>}></Route>
                <Route path="vivaquestions" element={<Chempracvivaquestions/>}></Route>
                <Route path="experimentyoutubevideos" element={<Chempracexperimentvideos/>}></Route>
              </Route>
              
              <Route path="engggraph">
                <Route path="" element={<Engggraph/>}></Route>
                <Route path="assignments" element={<Engggraphassignment/>}></Route>
                <Route path="assignmentyoutubevideos" element={<Engggraphexperimentvideos/>}></Route>
              </Route>
              
              <Route path="evs">
                <Route path="" element={<Evs/>}></Route>
                <Route path="topicwisenotes" element={<EvsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<EvsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<EvsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Evspreviousyearpapers/>}></Route>
              </Route>

              <Route path="langlab">
                <Route path="" element={<Langlab/>}></Route>
                <Route path="assignments" element={<Langlabassignment/>}></Route>
              </Route>

              <Route path="maths1">
                <Route path="" element={<Maths1/>}></Route>
                <Route path="topicwisenotes" element={<Maths1TopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<Maths1TopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<Maths1TopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Maths1previousyearpapers/>}></Route>
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
