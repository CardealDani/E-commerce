import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import SetImage from './pages/setImage'
import Product from './pages/product/product'
const Rout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/setImage' element={<SetImage/>}/>
        <Route path='/product' element={<Product/>}/>

    </Routes>
  )
}

export default Rout