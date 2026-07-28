import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Details from './pages/Details.tsx'
import HomePage from './pages/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Top level routes */}
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/details/:pid' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
