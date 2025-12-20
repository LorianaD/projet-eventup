import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Home from './components/Pages/Home'
import VideoUpload from './components/Pages/VideoUploadPage'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route element={< MainLayout />}>
          <Route path='/' element={< Home />}/>
          <Route path='/register' element={< Register />}/>
          <Route path='/login' element={< Login />}/>
          <Route path='/upload' element={< VideoUpload />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
