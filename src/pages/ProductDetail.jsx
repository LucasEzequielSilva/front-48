import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { api, apiUrl, endpoints } from '../utils/api'
const ProductDetail = () => {
    let {id} = useParams()
    console.log(id)
    let [equipo, setEquipo] = useState([]);
    //SI ESTUVIESE USANDO EN VEZ DE UNA VARIABLE LOCAL UN ESTADO, SE RE-RENDERIZARÍA.
    async function getData() {
      try {
        let { data } = await api.get(apiUrl + endpoints.read_equipos);
        setEquipo(data.find(equipo=> equipo.id == id));
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getData();
    }, []);
    console.log(equipo)
  return (
    <div>
        <h1 className='font-bold text-6xl text-center'>{equipo.team_name}</h1>
    </div>
  )
}

export default ProductDetail