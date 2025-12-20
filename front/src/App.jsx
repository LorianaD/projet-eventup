import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './components/Layout/MainLayout'
import Home from './components/Pages/Home'
import VideoUpload from './components/Pages/VideoUploadPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={< MainLayout />}>
          <Route path='/' element={< Home />}/>
          <Route path='/upload' element={< VideoUpload />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
