import React from 'react'
import { Link as Anchor, useNavigate, useLocation } from 'react-router-dom'
export default function Navbar() {
  let navigate = useNavigate()
  function redirigir(){
    navigate("/")
  }

  return (
    <div className='flex justify-between items-center h-[20vh] px-16'>
      <h3>Navbar</h3>
      <div className='flex gap-4'>
        <Anchor to="/" className='hover:bg-black/5 px-4 py-2 hover:text-black/80 rounded'>
          Home
        </Anchor>
        <Anchor to="/mangas" className='hover:bg-black/5 px-4 py-2 hover:text-black/80 rounded'>
          Mangas
        </Anchor>
        <Anchor to="/equipos" className='hover:bg-black/5 px-4 py-2 hover:text-black/80 rounded'>
          Plantas
        </Anchor>
        <Anchor to="/signin" className='hover:bg-black/5 px-4 py-2 hover:text-black/80 rounded'>
          Sign In
        </Anchor>
        <Anchor to="/signup" className='hover:bg-black/5 px-4 py-2 hover:text-black/80 rounded'>
          Sign Up
        </Anchor>
      </div>
      <button onClick={redirigir}>
        Botón
      </button>
    </div>
  )
}
