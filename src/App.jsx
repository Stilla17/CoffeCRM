import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './Pages/Dashboard/Dashboard'
import Categories from './Pages/Categories/Categories'
import Products from './Pages/Products/Products'
import Layout from './Pages/Layout'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'

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