import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import VideoUploadPage from './Pages/VideoUploadPage'
import UserProfilPage from './Pages/UserProfilPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={< MainLayout />}>
          <Route path='/' element={< Home />}/>
          <Route path='/register' element={< RegisterPage />}/>
          <Route path='/login' element={< LoginPage />}/>
          <Route path='/upload' element={< VideoUploadPage />}/>
          <Route path='/user' element={< UserProfilPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
