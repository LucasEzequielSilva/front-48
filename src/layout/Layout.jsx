import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../generales/Navbar'
import Footer from '../generales/Footer'

export default function Layout() {
  return (
    <>
        <Navbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}
