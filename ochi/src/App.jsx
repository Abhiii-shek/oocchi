
import './App.css'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
function App() {
  

  return (
    <>
     <div className='h-screen bg-zinc-700'>
      <div className=''>

      <Navbar/> 
      </div>
      <div>

      <LandingPage/>
      </div>
      <div>

      <Marquee/>
      </div>
      
     </div>
    </>
  )
}

export default App
