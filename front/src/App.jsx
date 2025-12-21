import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Home from './Pages/Home'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import UserProfilPage from './Pages/UserProfilPage'
import VideoPage from './Pages/videos/VideoPage'
import ImagesPage from './Pages/images/ImagesPage'
import VideoUploadPage from './Pages/videos/VideoUploadPage'
import ImageUploadPage from './Pages/images/ImageUploadPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={< MainLayout />}>
          <Route path='/' element={< Home />}/>
          <Route path='/videos' element={< VideoPage />}/>
          <Route path='/images' element={< ImagesPage />}/>
          <Route path='/register' element={< RegisterPage />}/>
          <Route path='/login' element={< LoginPage />}/>
          <Route path='/videos/upload' element={< VideoUploadPage />}/>
          <Route path='/images/upload' element={< ImageUploadPage />}/>
          <Route path='/user' element={< UserProfilPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
