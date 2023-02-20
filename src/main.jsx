import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById('root')).render(
  // color:'#f6deff',
  <React.StrictMode>
     <IconContext.Provider value={{size: '2.5em'}}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
