import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import { ScrollToTop } from './components/scroll-to-top'
import { Router } from './routes'
import { theme } from './theme'

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ScrollToTop />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}

export default App
