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
  
  import Chemprac from './pages/sem1/chemPrac/chemprac'
    import Chempracexperiments from './pages/sem1/chemPrac/experiments/topicwisenotes'
    import Chempracvivaquestions from './pages/sem1/chemPrac/vivaquestions/topicwisequestion'
    import Chempracexperimentvideos from './pages/sem1/chemPrac/chempracytvideos'
  
  import Engggraph from './pages/sem1/enggGraph/engggraph'
    import Engggraphassignment from './pages/sem1/enggGraph/assignment/topicwisenotes'
    import Engggraphexperimentvideos from './pages/sem1/enggGraph/Engggraphassignmentyoutubevideos'
  
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
   
    
import Sem2 from './pages/sem2/sem2'
import Aec from './pages/sem2/aec/aec'
import AecTopicNotes from './pages/sem2/aec/topicwisenotes/topicwisenotes'
import AecTopicQuestions from './pages/sem2/aec/topicwisequestions/topicwisequestion'
import AecTopicVideos from './pages/sem2/aec/aecytvideos'
import Aecpreviousyearpapers from './pages/sem2/aec/previousyearpapers/prevpapers'

import AecLab from './pages/sem2/aeclab/aeclab'
import AecLabexperiments from './pages/sem2/aeclab/experiments/topicwisenotes'
import AecLabvivaquestions from './pages/sem2/aeclab/vivaquestions/topicwisequestion'

import Bee from './pages/sem2/bee/bee'
import BeeTopicNotes from './pages/sem2/bee/topicwisenotes/topicwisenotes'
import BeeTopicQuestions from './pages/sem2/bee/topicwisequestions/topicwisequestion'
import BeeTopicVideos from './pages/sem2/bee/beeytvideos'
import Beepreviousyearpapers from './pages/sem2/bee/previousyearpapers/prevpapers'

import BeeLab from './pages/sem2/beelab/beelab'
import BeeLabexperiments from './pages/sem2/beelab/experiments/topicwisenotes'
import BeeLabvivaquestions from './pages/sem2/beelab/vivaquestions/topicwisequestion'

import CProg from './pages/sem2/cprog/cprog'
import CProgexperiments from './pages/sem2/cprog/experiments/topicwisenotes'
import CProgvivaquestions from './pages/sem2/cprog/vivaquestions/topicwisequestion'

import Maths from './pages/sem2/maths/maths'
import MathsTopicNotes from './pages/sem2/maths/topicwisenotes/topicwisenotes'
import MathsTopicQuestions from './pages/sem2/maths/topicwisequestions/topicwisequestion'
import MathsTopicVideos from './pages/sem2/maths/mathsytvideos'
import Mathspreviousyearpapers from './pages/sem2/maths/previousyearpapers/prevpapers'

import Physics from './pages/sem2/physics/physics'
import PhysicsTopicNotes from './pages/sem2/physics/topicwisenotes/topicwisenotes'
import PhysicsTopicQuestions from './pages/sem2/physics/topicwisequestions/topicwisequestion'
import PhysicsTopicVideos from './pages/sem2/physics/physicsytvideos'
import Physicspreviousyearpapers from './pages/sem2/physics/previousyearpapers/prevpapers'

import PhysicsLab from './pages/sem2/physicslab/physicslab'
import PhysicsLabexperiments from './pages/sem2/physicslab/experiments/topicwisenotes'
import PhysicsLabvivaquestions from './pages/sem2/physicslab/vivaquestions/topicwisequestion'

import Yoga from './pages/sem2/yoga/yoga'
import Yogaexperiments from './pages/sem2/yoga/experiments/topicwisenotes'
import Yogavivaquestions from './pages/sem2/yoga/vivaquestions/topicwisequestion'


import Sem4 from './pages/sem4/sem4'
import Coa from './pages/sem4/coa/coa'
import CoaTopicNotes from './pages/sem4/coa/topicwisenotes/topicwisenotes'
import CoaTopicQuestions from './pages/sem4/coa/topicwisequestions/topicwisequestion'
import CoaTopicVideos from './pages/sem4/coa/coaytvideos'
import Coapreviousyearpapers from './pages/sem4/coa/previousyearpapers/prevpapers'

import Dbms from './pages/sem4/dbms/dbms'
import DbmsTopicNotes from './pages/sem4/dbms/topicwisenotes/topicwisenotes'
import DbmsTopicQuestions from './pages/sem4/dbms/topicwisequestions/topicwisequestion'
import DbmsTopicVideos from './pages/sem4/dbms/dbmsytvideos'
import Dbmspreviousyearpapers from './pages/sem4/dbms/previousyearpapers/prevpapers'

import DbmsLab from './pages/sem4/dbmslab/dbmslab'
import DbmsLabexperiments from './pages/sem4/dbmslab/experiments/topicwisenotes'
import DbmsLabvivaquestions from './pages/sem4/dbmslab/vivaquestions/topicwisequestion'

import Os from './pages/sem4/os/os'
import OsTopicNotes from './pages/sem4/os/topicwisenotes/topicwisenotes'
import OsTopicQuestions from './pages/sem4/os/topicwisequestions/topicwisequestion'
import OsTopicVideos from './pages/sem4/os/osytvideos'
import Ospreviousyearpapers from './pages/sem4/os/previousyearpapers/prevpapers'

import OsLab from './pages/sem4/oslab/oslab'
import OsLabexperiments from './pages/sem4/oslab/experiments/topicwisenotes'
import OsLabvivaquestions from './pages/sem4/oslab/vivaquestions/topicwisequestion'

import Wt from './pages/sem4/wt/wt'
import WtTopicNotes from './pages/sem4/wt/topicwisenotes/topicwisenotes'
import WtTopicQuestions from './pages/sem4/wt/topicwisequestions/topicwisequestion'
import WtTopicVideos from './pages/sem4/wt/wtytvideos'
import Wtpreviousyearpapers from './pages/sem4/wt/previousyearpapers/prevpapers'

import WtLab from './pages/sem4/wtlab/wtlab'
import WtLabexperiments from './pages/sem4/wtlab/experiments/topicwisenotes'
import WtLabvivaquestions from './pages/sem4/wtlab/vivaquestions/topicwisequestion'

import Pdc from './pages/sem4/pdc/pdc'
import PdcTopicNotes from './pages/sem4/pdc/topicwisenotes/topicwisenotes'
import PdcTopicQuestions from './pages/sem4/pdc/topicwisequestions/topicwisequestion'
import PdcTopicVideos from './pages/sem4/pdc/pdcytvideos'
import Pdcpreviousyearpapers from './pages/sem4/pdc/previousyearpapers/prevpapers'

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

            <Route path="sem2">
              <Route path="" element={<Sem2/>}></Route>
              {/* <Route path="aec" element={<Aec/>}></Route>
              <Route path="aeclab" element={<Aeclab/>}></Route>
              <Route path="bee" element={<Bee/>}></Route>
              <Route path="beelab" element={<Beelab/>}></Route>
              <Route path="cprog" element={<Cprog/>}></Route>
              <Route path="maths" element={<Maths/>}></Route>
              <Route path="physics" element={<Physics/>}></Route>
              <Route path="physicslab" element={<Physicslab/>}></Route> */}
            </Route>

            <Route path="sem2">

              <Route path="" element={<Sem2/>}></Route>

              <Route path="aec">
                <Route path="" element={<Aec/>}></Route>
                <Route path="topicwisenotes" element={<AecTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<AecTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<AecTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Aecpreviousyearpapers/>}></Route>
              </Route>

              <Route path="aeclab">
                <Route path="" element={<AecLab/>}></Route>
                <Route path="experiments" element={<AecLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<AecLabvivaquestions/>}></Route>
                </Route>
                
                <Route path="bee">
                <Route path="" element={<Bee/>}></Route>
                <Route path="topicwisenotes" element={<BeeTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<BeeTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<BeeTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Beepreviousyearpapers/>}></Route>
                </Route>

              

              <Route path="beelab">
                <Route path="" element={<BeeLab/>}></Route>
                <Route path="experiments" element={<BeeLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<BeeLabvivaquestions/>}></Route>
                </Route>

                <Route path="cprog">
                <Route path="" element={<CProg/>}></Route>
                <Route path="experiments" element={<CProgexperiments/>}></Route>
                <Route path="vivaquestions" element={<CProgvivaquestions/>}></Route>
                </Route>

                <Route path="maths">
                <Route path="" element={<Maths/>}></Route>
                <Route path="topicwisenotes" element={<MathsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<MathsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<MathsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Mathspreviousyearpapers/>}></Route>
                </Route>

                <Route path="physics">
                <Route path="" element={<Physics/>}></Route>
                <Route path="topicwisenotes" element={<PhysicsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<PhysicsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<PhysicsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Physicspreviousyearpapers/>}></Route>
                </Route>

                <Route path="physicslab">
                <Route path="" element={<PhysicsLab/>}></Route>
                <Route path="experiments" element={<PhysicsLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<PhysicsLabvivaquestions/>}></Route>
                </Route>

                <Route path="yoga">
                <Route path="" element={<Yoga/>}></Route>
                <Route path="experiments" element={<Yogaexperiments/>}></Route>
                <Route path="vivaquestions" element={<Yogavivaquestions/>}></Route>
                </Route>
                </Route>


                <Route path="sem4">
              <Route path="" element={<Sem4/>}></Route>
              {/* <Route path="coa" element={<Coa/>}></Route>
              <Route path="dbms" element={<Dbms/>}></Route>
              <Route path="dbmslab" element={<DbmsLab/>}></Route>
              <Route path="os" element={<Os/>}></Route>
              <Route path="oslab" element={<OsLab/>}></Route>
              <Route path="wt" element={<Wt/>}></Route>
              <Route path="wtlab" element={<WtLab/>}></Route>
              <Route path="pdc" element={<Pdc/>}></Route> */}
            </Route>

            <Route path="sem4">

              <Route path="" element={<Sem4/>}></Route>

              <Route path="coa">
                <Route path="" element={<Coa/>}></Route>
                <Route path="topicwisenotes" element={<CoaTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<CoaTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<CoaTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Coapreviousyearpapers/>}></Route>
              </Route>

              <Route path="dbms">
                <Route path="" element={<Dbms/>}></Route>
                <Route path="topicwisenotes" element={<DbmsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<DbmsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<DbmsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Dbmspreviousyearpapers/>}></Route>
              </Route>

              <Route path="dbmslab">
                <Route path="" element={<DbmsLab/>}></Route>
                <Route path="experiments" element={<DbmsLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<DbmsLabvivaquestions/>}></Route>
                </Route>

                <Route path="os">
                <Route path="" element={<Os/>}></Route>
                <Route path="topicwisenotes" element={<OsTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<OsTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<OsTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Ospreviousyearpapers/>}></Route>
                </Route>

              <Route path="oslab">
                <Route path="" element={<OsLab/>}></Route>
                <Route path="experiments" element={<OsLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<OsLabvivaquestions/>}></Route>
                </Route>

                <Route path="wt">
                <Route path="" element={<Wt/>}></Route>
                <Route path="topicwisenotes" element={<WtTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<WtTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<WtTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Wtpreviousyearpapers/>}></Route>
                </Route>

              <Route path="wtlab">
                <Route path="" element={<WtLab/>}></Route>
                <Route path="experiments" element={<WtLabexperiments/>}></Route>
                <Route path="vivaquestions" element={<WtLabvivaquestions/>}></Route>
                </Route>

                <Route path="pdc">
                <Route path="" element={<Pdc/>}></Route>
                <Route path="topicwisenotes" element={<PdcTopicNotes/>}></Route>
                <Route path="topicwisequestions" element={<PdcTopicQuestions/>}></Route>
                <Route path="topicwiseyoutubevideos" element={<PdcTopicVideos/>}></Route>
                <Route path="previousyearpapers" element={<Pdcpreviousyearpapers/>}></Route>
                </Route>
                </Route>

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
