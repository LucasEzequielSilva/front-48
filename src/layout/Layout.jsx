import React, { Children } from 'react'
import Navbar from '../generales/Navbar'
import Footer from '../generales/Footer'

export default function Layout({children}) {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
