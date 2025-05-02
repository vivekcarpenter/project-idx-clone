
import { useEffect, useState } from 'react'
import './App.css'
import usePing from './hooks/apis/queries/usePing.js'
import Sample from './sampleComponents/Sample.jsx';

function App() {

 const [toggle,setToggle]  = useState(false);
  

  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>toggle</button>
      {toggle && <Sample/>}
    </div>
  )
}

export default App
