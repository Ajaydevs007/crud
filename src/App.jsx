import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>

      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>

    </>
  )
}

export default App
