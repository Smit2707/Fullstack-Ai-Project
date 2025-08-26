import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const AppRoutes = () => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
  console.log(token)
  return (
    <Routes>
      {token ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  )
}

export default AppRoutes