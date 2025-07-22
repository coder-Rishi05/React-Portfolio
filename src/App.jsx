import './App.css'
import LeftSide from './Components/LeftSide'
import RightSlide from './Components/RightSide'
import { personalData } from './Utils/data'
import { aboutMe } from './Utils/data'

function App() {
 return (
   <>

  <main className='h-screen w-full flex flex-col sm:flex-row  ' >
   <LeftSide data={personalData} />
   <RightSlide data={aboutMe} />
    
  </main>
   
   </>
  )
}

export default App
