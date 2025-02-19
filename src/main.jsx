import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
