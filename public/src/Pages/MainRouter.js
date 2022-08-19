import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Home } from './Home'
import { Login } from './Login'
import { Signup } from './Signup'
import {Cart} from "../Components/Cart"
export const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

<Route path='/login' element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}
