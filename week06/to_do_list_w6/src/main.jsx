import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/*App 컴포넌트를 BrowserRouter로 감싸줌*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
