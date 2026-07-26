import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Details from './components/Details.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Top level routes */}
        <Route path="/" element={<App />} />

        
        <Route path='/details/:pid' element={<Details />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
