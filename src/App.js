import React, { useContext } from 'react'
import ThemeBtn from './darkmode/ThemeBtn'
import { ThemeContext } from './ThemeContext'
import './index.css'

const App = () => {
  const { darkmode } = useContext(ThemeContext)
  console.log("From App:", darkmode)
  // console.log(setDarkmode(!darkmode));
  return (
    <>
      <div className= { `"body container" ${darkmode && "bodyDark"} `} >
      <ThemeBtn />
        <h1 className='container myHedaing'><center>Hello world this dark mode practice website</center></h1>
      </div>
    </>
  )
}

export default App
