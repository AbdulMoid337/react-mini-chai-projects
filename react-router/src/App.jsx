import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
<Header />
<Outlet />
<Footer />
    </>
  )
}

export default App
