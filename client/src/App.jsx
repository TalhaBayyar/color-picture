import './App.css'
import Picker from './components/Picker'
import { subscribe, init } from './socketApi'
import { useEffect, useState } from 'react'

function App() {
  const [activeColor, setActiveColor] = useState("#282c34")
  useEffect(()=>{
    init();
    subscribe((color) => {
      setActiveColor(color)
    })
  },[])

  return (
    <div className='bg-sky-500' style={{backgroundColor: activeColor}}>
      <Picker activeColor={activeColor}/>
    </div>
  )
}

export default App
