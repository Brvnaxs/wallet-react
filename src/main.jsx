import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextSection from './Components/Header/TextSection/index.jsx'
import Header from './Components/Header/Header/index.jsx'
import Sign from './Components/Sign/index.jsx'
import Blocks from './Components/Blocks/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TextSection/>
    <Header/>
    <Sign/>
    <Blocks/>
    
  </React.StrictMode>,
)
