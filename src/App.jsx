import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Pages/Form'
import DisplayMessage from './Components/DisplayMessage'
import { Intro } from './Components/Messages'

function App() {
  
  return (
    <div className="App">
      <Form/>
      {/* <DisplayMessage title={Intro.title} message={Intro.message}/> */}
    </div>
  )
}

export default App
