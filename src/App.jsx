import { DataContext, Data } from './DataContext'
import { Outlet, Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
    <DataContext.Provider value={Data}>
    <header>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
    </header>
      <Outlet />
    </DataContext.Provider>
    </>
  )
}

export default App
