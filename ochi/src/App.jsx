
import './App.css'
import About from './Components/About'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
function App() {
  

  return (
    <>
     <div className='h-screen bg-zinc-900'>
      

      <Navbar/> 
      

      <LandingPage/>
      
      

      <Marquee/>
      <About/>
      
      
     </div>
    </>
  )
}

export default App
