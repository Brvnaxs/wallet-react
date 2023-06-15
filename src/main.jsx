import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextSection from './Components/Header/TextSection/index.jsx'
import Header from './Components/Header/Header/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TextSection/>
    <Header/>
    
  </React.StrictMode>,
)
