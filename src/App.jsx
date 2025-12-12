import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './Pages/Dashboard'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Layout from './Pages/Layout'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<Products />} />
      </Route>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default App