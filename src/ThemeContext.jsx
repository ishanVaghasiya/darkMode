import React, {  createContext, useState } from 'react'

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(JSON.parse(localStorage.getItem("darkmode")));
    // const [darkmode, setDarkmode] = useState(false)
    return (
        <div>
            <ThemeContext.Provider value={{darkmode, setDarkmode}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export  {ThemeProvider, ThemeContext}
