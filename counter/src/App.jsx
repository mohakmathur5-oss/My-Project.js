import { useState } from 'react'

import './App.css'



function App( ) {

  let [counter, setcounter] = useState(4)

  const addvalue = () => {
    if(counter<20)
  setcounter(counter +1)

  }
  const removevalue = () => {
    if(counter>0)
    setcounter(counter - 1)
  }
  
  return (
    <>
    <div>Hl0 This is the counnter projectg</div>
     
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addvalue}
     >Add  value  {counter}</button>
     <button
     onClick={removevalue}
     >Decrease value  {counter}</button>
    </>
  )
}

export default App