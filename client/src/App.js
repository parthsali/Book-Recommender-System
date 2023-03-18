import React from 'react'
import Recommend from './pages/Recommend/Recommend'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recommend' element={<Recommend/>}/>
        
      </Routes>
    </>
  )
}

export default App