import React, { useContext, useState } from 'react'
import { ThemeContext } from '../ThemeContext';

const ThemeBtn = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext)
  const [btn, setBtn] = useState("fa fa-toggle-off")
  // console.log("From ThemeBtn:",darkmode)
  const handleTheme = () => {
    setDarkmode(!darkmode)
    localStorage.setItem("darkmode", !darkmode)
    return (
      <>
        {!darkmode ? setBtn("fa fa-toggle-on") : setBtn("fa fa-toggle-off")}
      </>
    )
  }
  return (
    <div>
      <button className={`myBtn ${btn} ${darkmode && "DarkBtn"} `} onClick={handleTheme}></button>
    </div>
  )
}

export default ThemeBtn;
