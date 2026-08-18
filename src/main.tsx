import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter, Routes, Route } from 'react-router'
import Details from './pages/Details.tsx'
import HomePage from './pages/HomePage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SearchByType from './pages/SearchByType.tsx'
import PokemonByType from './pages/PokemonByType.tsx'
import SearchByGeneration from './pages/SearchByGeneration.tsx'
import PokemonByGeneration from './pages/PokemonByGeneration.tsx'

import './App.css'
import SearchByRegion from './pages/SearchByRegion.tsx'
import PokemonByRegion from './pages/PokemonByRegion.tsx'

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
            <Route path='/search/type' >
              <Route index element={<SearchByType />} />
              <Route path='/search/type/:name' element={<PokemonByType />} />
            </Route>
            <Route path='/search/generation'>
              <Route index element={<SearchByGeneration />} />
              <Route path='/search/generation/:name' element={<PokemonByGeneration />} />
            </Route>
            <Route path='/search/region'>
              <Route index element={<SearchByRegion />} />
            <Route path='/search/region/:name' element={<PokemonByRegion />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
