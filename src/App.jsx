import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './Components/Hero';

const App = () => {

   const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
     {!isOwnerPath && <Navbar />}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>

     </div>
    </div>
  )
}

export default App