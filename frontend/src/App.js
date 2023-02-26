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
  
  import Pcomm from './pages/sem1/pcomm/pcomm'
    import PcommTopicNotes from './pages/sem1/pcomm/topicwisenotes/topicwisenotes'
    import PcommTopicQuestions from './pages/sem1/pcomm/topicwisequestions/topicwisequestion'
    import PcommTopicVideos from './pages/sem1/pcomm/pcommytvideos'
    import Pcommpreviousyearpapers from './pages/sem1/pcomm/previousyearpapers/prevpapers'


import Sem3 from './pages/sem3/sem3'
  
  import Dsa from './pages/sem3/dsa/dsa'
    import DsaTopicNotes from './pages/sem3/dsa/topicwisenotes/topicwisenotes'
    import DsaTopicQuestions from './pages/sem3/dsa/topicwisequestions/topicwisequestion'
    import DsaTopicVideos from './pages/sem3/dsa/dsaytvideos'
    import Dsapreviousyearpapers from './pages/sem3/dsa/previousyearpapers/prevpapers'
  
  import Dsalab from './pages/sem3/dsalab/dsalab'
    import Dsalabassignment from './pages/sem3/dsalab/assignment/topicwisenotes'
    
  import Dec from './pages/sem3/dec/dec'
    import DecTopicNotes from './pages/sem3/dec/topicwisenotes/topicwisenotes'
    import DecTopicQuestions from './pages/sem3/dec/topicwisequestions/topicwisequestion'
    import DecTopicVideos from './pages/sem3/dec/decytvideos'
    import Decpreviousyearpapers from './pages/sem3/dec/previousyearpapers/prevpapers'

  import Dms from './pages/sem3/dms/dms'
    import DmsTopicNotes from './pages/sem3/dms/topicwisenotes/topicwisenotes'
    import DmsTopicQuestions from './pages/sem3/dms/topicwisequestions/topicwisequestion'
    import DmsTopicVideos from './pages/sem3/dms/dmsytvideos'
    import Dmspreviousyearpapers from './pages/sem3/dms/previousyearpapers/prevpapers'
  
  import Ee from './pages/sem3/ee/ee'
    import EeTopicNotes from './pages/sem3/ee/topicwisenotes/topicwisenotes'
    import EeTopicQuestions from './pages/sem3/ee/topicwisequestions/topicwisequestion'
    import EeTopicVideos from './pages/sem3/ee/eeytvideos'
    import Eepreviousyearpapers from './pages/sem3/ee/previousyearpapers/prevpapers'
    
  import Oop from './pages/sem3/oop/oop'
    import OopTopicNotes from './pages/sem3/oop/topicwisenotes/topicwisenotes'
    import OopTopicQuestions from './pages/sem3/oop/topicwisequestions/topicwisequestion'
    import OopTopicVideos from './pages/sem3/oop/oopytvideos'
    import Ooppreviousyearpapers from './pages/sem3/oop/previousyearpapers/prevpapers'
  
  import Ooplab from './pages/sem3/ooplab/ooplab'
    import Ooplabassignment from './pages/sem3/ooplab/assignment/topicwisenotes'

  import Ps from './pages/sem3/ps/ps'
    import PsTopicNotes from './pages/sem3/ps/topicwisenotes/topicwisenotes'
    import PsTopicQuestions from './pages/sem3/ps/topicwisequestions/topicwisequestion'
    import PsTopicVideos from './pages/sem3/ps/psytvideos'
    import Pspreviousyearpapers from './pages/sem3/ps/previousyearpapers/prevpapers'
    import Pscalculators from './pages/sem3/ps/calculators/indep_events'
  
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
              
              <Route path="pcomm">
                <Route path="" element={<Pcomm/>}></Route>
                <Route path="topicwisenotes" element={<PcommTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<PcommTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<PcommTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Pcommpreviousyearpapers/>}></Route>
              </Route>

            </Route>

            <Route path="sem3">

              <Route path="" element={<Sem3/>}></Route>

              <Route path="dsa">
                <Route path="" element={<Dsa/>}></Route>
                <Route path="topicwisenotes" element={<DsaTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<DsaTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<DsaTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Dsapreviousyearpapers/>}></Route>
              </Route>

              <Route path="dsalab">
                <Route path="" element={<Dsalab/>}></Route>
                <Route path="assignments" element={<Dsalabassignment/>}></Route>
              </Route>

              <Route path="dec">
                <Route path="" element={<Dec/>}></Route>
                <Route path="topicwisenotes" element={<DecTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<DecTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<DecTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Decpreviousyearpapers/>}></Route>
              </Route>

              <Route path="dms">
                <Route path="" element={<Dms/>}></Route>
                <Route path="topicwisenotes" element={<DmsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<DmsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<DmsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Dmspreviousyearpapers/>}></Route>
              </Route>
              
              <Route path="ee">
                <Route path="" element={<Ee/>}></Route>
                <Route path="topicwisenotes" element={<EeTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<EeTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<EeTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Eepreviousyearpapers/>}></Route>
              </Route>

              <Route path="oop">
                <Route path="" element={<Oop/>}></Route>
                <Route path="topicwisenotes" element={<OopTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<OopTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<OopTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Ooppreviousyearpapers/>}></Route>
              </Route>

              <Route path="ooplab">
                <Route path="" element={<Ooplab/>}></Route>
                <Route path="assignments" element={<Ooplabassignment/>}></Route>
              </Route>

              <Route path="ps">
                <Route path="" element={<Ps/>}></Route>
                <Route path="topicwisenotes" element={<PsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<PsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<PsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Pspreviousyearpapers/>}></Route>
                <Route path="calculators" element={<Pscalculators/>}></Route>
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
