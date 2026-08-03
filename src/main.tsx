import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router'
import Details from './pages/Details.tsx'
import HomePage from './pages/HomePage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          {/* Top level routes */}
          <Route element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='/details/:pid' element={<Details />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>,
)
