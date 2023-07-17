import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import mangaActions from '../redux/actions/mangaActions'
import { api, apiUrl, endpoints } from '../utils/api'

const Mangas = () => {
  let dispatch = useDispatch()
  let mangas = useSelector((state)=>state.mangas.mangas)
  let titleRef = useRef("")
  
  let [categories, setCategories] = useState([])
  let [categoriesSelected, setCategoriesSelected] = useState([])
  const getMangas = (title) => {
    dispatch(mangaActions.read_mangas(title))
  }
  const deleteManga = (id) => {
    let newMangas = mangas.filter(manga => manga._id !== id)
    dispatch(mangaActions.delete_mangas({id, newMangas}))
  }
  const getCategories = async () => {
    try {
      let { data } = await api.get(apiUrl+endpoints.read_categories)
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }
  const selectCategory = (value) => {
    if(!categoriesSelected.includes(value)){
      setCategoriesSelected([value, ...categoriesSelected])
    }else{
      setCategoriesSelected(categoriesSelected.filter(category=>category!==value))
    }
  }

  useEffect(()=>{
    getMangas(titleRef?.current?.value)
    getCategories()
  }, [titleRef,categoriesSelected])
  return (
    <div className='w-full h-screen flex flex-col items-center gap-4'>
      <h1 className='font-bold text-3xl'>Mangas</h1>
      <input ref={titleRef} onKeyUp={()=>getMangas(titleRef.current.value)} className="border rounded px-28 py-2 text-center" placeholder="search mangas"type="text" />
      <div className='flex w-fit gap-4 '>
        {categories.map(category => <button
        key={category._id}
        onClick={()=>selectCategory(category._id)} className="py-1 px-4 rounded-full" style={{backgroundColor:categoriesSelected.includes(category._id) ? (category.hover) : (category.color)}}>{category.name}</button>)}
      </div>
      <div className='w-full min-h-fit flex flex-wrap gap-4 px-16 justify-center items-center'>
        {mangas.map(manga=>(
          <div className="w-28 h-36 p-2 border rounded"key={manga._id}>
            <img className="object-cover h-1/2 w-full"src={manga.cover_photo} alt={manga.title} />
            <p>{manga.title}</p>
            <svg onClick={()=>deleteManga(manga._id)}className="w-10 h-10 p-2 cursor-pointer rounded-full hover:bg-black/5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Mangas