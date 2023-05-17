import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
import Navbar from './components/mencompoments/navbar/Navbar'
import Home from './pages/menpages/homepage/Home'
import Whome from './pages/womenpages/whome/Whome'
import Healthcare from './pages/menpages/healthpage/Healthcare'
import Personalcare from './pages/menpages/personalcarepage/Personalcare'
import Signin from './pages/registersignin/Signin'
import Register from './pages/registersignin/Register'
import Profile from './pages/profilepage/Profile'
import Protectedpage from './components/Protectedpage'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/femaleshop' element={<Whome/>} />
        <Route path='/healthcare' element={<Healthcare/>} />
        <Route path='/personalcare' element={<Personalcare/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element='404 page not exist' />
        <Route element={<Protectedpage/>}>
          <Route path='/myprofile' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
