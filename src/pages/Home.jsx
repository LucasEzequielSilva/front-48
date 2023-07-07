import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import inputActions from '../redux/actions/inputActions'
const Home = () => {
  let inputRef = useRef("")
  let { capture_text } = inputActions
  let dispatch = useDispatch()
  let text = useSelector(store=>store.input.text)
  const mostrarTexto = () => {
    dispatch(capture_text({text:inputRef.current?.value}))
  }
  return (
    <div className='w-full h-screen flex flex-col  items-center'>
      <h1 className='font-bold text-3xl'> Home </h1>
      <input ref={inputRef} className="p-4 border text-center" placeholder='search' type="text" />
      <p>{text}</p>
      <button className='border bg-red-400 p-4 rounded' onClick={mostrarTexto}>Mostrar texto</button>
    </div>
  )
}

export default Home