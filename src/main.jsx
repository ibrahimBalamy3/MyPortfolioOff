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
          <Route path='/about-me' element={<h1>about</h1>} />
          <Route path='/my-skills' element={<h1>my-skills</h1>} />
          <Route path='/my-projects' element={<h1>my-projects</h1>} />
          <Route path='/contact-me' element={<h1>contact-me</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
