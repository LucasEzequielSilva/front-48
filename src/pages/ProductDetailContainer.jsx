import React, { useState, useEffect } from "react";
import { api, apiUrl, endpoints } from "../utils/api";
import ProductDetail from "../components/ProductDetail";

export default function ProductDetailContainer() {
  let [equipos, setEquipos] = useState([]);
  //SI ESTUVIESE USANDO EN VEZ DE UNA VARIABLE LOCAL UN ESTADO, SE RE-RENDERIZARÍA.
  async function getData() {
    try {
      let { data } = await api.get(apiUrl + endpoints.read_equipos);
      setEquipos(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
    return () => {
      console.log("se desmontó");
    };
  }, []);
  
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-4 bg-[#F0F2F5]">
      {
        equipos.map(team=> (
      <ProductDetail team={team}/>
        ))
      }
    </div>
  );
}
