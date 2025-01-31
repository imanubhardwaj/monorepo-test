import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@repo/ui'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={createTheme()}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
