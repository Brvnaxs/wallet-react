import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Components/Context/Context'
import App from './App.jsx'
import { ExpenseProvider } from './Components/Context/ExpenseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ExpenseProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ExpenseProvider>
  </BrowserRouter>,
)
