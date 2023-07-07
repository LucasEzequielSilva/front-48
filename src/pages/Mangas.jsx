import React, { useState, useEffect } from 'react'
import { api, apiUrl, endpoints } from '../utils/api'

const Mangas = () => {
  let [mangas, setMangas] = useState([])
  console.log(mangas)
  let [categories, setCategories] = useState([])
  let [categoriesSelected, setCategoriesSelected] = useState([])
  let [title, setTitle] = useState("")
  const getMangas = async () => {
    try {
      let { data } = await api.get(apiUrl+endpoints.read_mangas+`?title=${title}&category_id=${categoriesSelected.join(',')}`)
      setMangas(data.mangas)
    } catch (error) {
      console.log(error)
    }
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
    getMangas()
    getCategories()
  }, [title,categoriesSelected])
  return (
    <div className='w-full h-screen flex flex-col items-center gap-4'>
      <h1 className='font-bold text-3xl'>Mangas</h1>
      <input onKeyUp={(e)=>setTitle(e.target.value)} className="border rounded px-28 py-2 text-center" placeholder="search mangas"type="text" />
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mangas