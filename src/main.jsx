import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)
