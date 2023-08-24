import { DataContext, Data } from './DataContext'
import { Outlet, Link } from 'react-router-dom'
import './App.css'
import Header from './sections/header/Header'


function App() {
  return (
    <>
    <DataContext.Provider value={Data}>
      <Header />
      <Outlet />
    </DataContext.Provider>
    </>
  )
}

export default App
