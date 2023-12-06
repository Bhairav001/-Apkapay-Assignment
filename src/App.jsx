
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/homepage/HomePage'
import ListBus from './components/listBus/ListBus'
import SearchLayout from './components/searchLayout/SearchLayout'
import Navbar from './pages/navbar/Navbar'
import Footer from './pages/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
     <Routes>
         <Route path='/' element={<HomePage/>}/>
          <Route path='/listbus' element={<ListBus/>}/>
          <Route path='/busLayout' element={<SearchLayout/>}/>
     </Routes>
       <Footer/>   
    </>
  )
}

export default App
  