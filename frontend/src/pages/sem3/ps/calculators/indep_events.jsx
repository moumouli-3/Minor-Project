//Not Developed Completely..Pls Ignore
import React,{useState} from 'react'

function Indepevents() {

    const [input,setInput]=useState({
        pa:parseFloat(0),
        pb:parseFloat(0),
        pc:parseFloat(0)
    })

    const handleChange=async(e)=>{
        setInput(e.target.value)
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(input.pa)
        const val={
            pa:parseFloat(input.pa),
            pb:input.pb,
            pc:input.pc,
        }
        console.log(val)
    }

  return (
    <div className='container'>
        <table>
            <tr>
                <th>Probability</th>
                <th>Value</th>
                <th>Probability Complement</th>
                <th>Value</th>
            </tr>
            <tr>
                <th>P(A)</th>
                <th><input onChange={handleChange} value={(input.pa)} type="text" id='pa' className='form-control' placeholder='Enter P(A)'></input></th>
                <th>P'(A)</th>
                <th><input disabled value={(1.0-parseFloat(input.pa)).toFixed(2)} type="text" id='pcoma' className='form-control' placeholder='Enter P(A)'></input></th>
            </tr>
            <tr>
                <th>P(B)</th>
                <th><input onChange={handleChange} value={input.pb} type="text" id='pb' className='form-control' placeholder='Enter P(C)'></input></th>
                {/* <th>P'(B)</th>
                <th><input disabled value={(1.0-parseFloat(document.getElementById('pb').value)).toFixed(2)} type="text" id='pcomb' className='form-control'></input></th> */}
            </tr>
            <tr>
               <th>P(C)</th>
                <th><input onChange={handleChange} value={input.pc} type="text" id='pc' className='form-control' placeholder='Enter P(C)'></input></th>
                {/* <th>P'(C)</th>
                <th><input disabled value={(1.0-parseFloat(document.getElementById('pc').value)).toFixed(2)} type="text" id='pcomc' className='form-control'></input></th> */}
            </tr>
             {/* <tr>
               <th>P(A^B)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pa').value))*(parseFloat(document.getElementById('pb').value))).toFixed(2)} type="text" id='paib' className='form-control'></input></th>
               <th>P'(A^B)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pcoma').value))*(parseFloat(document.getElementById('pcomb').value))).toFixed(2)} type="text" id='pcomaib' className='form-control'></input></th>
            </tr>
            <tr>
               <th>P(B^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pb').value))*(parseFloat(document.getElementById('pc').value))).toFixed(2)} type="text" id='pbic' className='form-control'></input></th>
               <th>P'(B^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pcomb').value))*(parseFloat(document.getElementById('pcomc').value))).toFixed(2)} type="text" id='pcombic' className='form-control'></input></th>
            </tr>
            <tr>
               <th>P(A^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pa').value))*(parseFloat(document.getElementById('pc').value))).toFixed(2)} type="text" id='paic' className='form-control'></input></th>
               <th>P'(A^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pcoma').value))*(parseFloat(document.getElementById('pcomc').value))).toFixed(2)} type="text" id='pcomaic' className='form-control'></input></th>
            </tr>
            <tr>
               <th>P(A^B^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pa').value))*(parseFloat(document.getElementById('pb').value))*(parseFloat(document.getElementById('pc').value))).toFixed(2)} type="text" id='paibic' className='form-control'></input></th>
               <th>P'(A^B^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pcoma').value))*(parseFloat(document.getElementById('pcomb').value))*(parseFloat(document.getElementById('pcomc').value))).toFixed(2)} type="text" id='pcomaibic' className='form-control'></input></th>
            </tr> 
            <tr>
                <th>P(A/B)</th>
                <th><input disabled value={(((parseFloat(document.getElementById('paib').value))/(parseFloat(document.getElementById('pb').value)))).toFixed(2)} type="text" id='paibic' className='form-control'></input></th>
                <th>P'(A^B^C)</th>
                <th><input disabled value={((parseFloat(document.getElementById('pcoma').value))*(parseFloat(document.getElementById('pcomb').value))*(parseFloat(document.getElementById('pcomc').value))).toFixed(2)} type="text" id='pcomaibic' className='form-control'></input></th>
            </tr>  */}
            
        </table>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Indepevents