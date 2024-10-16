import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github, { gitLoader } from './Components/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "",    
        element: <Home />
    }, {
      path: "About",
      element: <About />
    },{
      path : "Contact",
      element : <Contact />
    },{
      path : "user/:userid",
      element : <User />
    },{
      path: "Github",
      element: <Github />,
      loader: gitLoader
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
