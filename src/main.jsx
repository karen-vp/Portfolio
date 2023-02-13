import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconContext.Provider value={{  color:'#f6deff', size: '2.5em'}}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
