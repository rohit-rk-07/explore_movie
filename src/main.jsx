import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    // <App />
    <BrowserRouter basename="/explore_movie">
  <App />
</BrowserRouter>
)
