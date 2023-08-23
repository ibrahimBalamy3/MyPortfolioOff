import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<h1>home</h1>} />
        <Route path='/about' element={<h1>about</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
