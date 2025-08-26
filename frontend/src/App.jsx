import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
  <BrowserRouter>
    <AppRoutes />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
  </BrowserRouter>
  )
}

export default App