import React, { useState, useEffect } from "react";
import { api, apiUrl, apiUrlRender, endpoints } from "../utils/api";
import ProductDetail from "../components/ProductDetail";

export default function ProductDetailContainer() {
  let [plantas, setPlantas] = useState([]);
  //SI ESTUVIESE USANDO EN VEZ DE UNA VARIABLE LOCAL UN ESTADO, SE RE-RENDERIZARÍA.
  async function getData() {
    try {
      let { data } = await api.get(apiUrlRender + endpoints.read_plantas);
      setPlantas(data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center gap-4 bg-[#F0F2F5]">
      {
        plantas.map(planta=> (
      <ProductDetail key={planta._id} planta={planta}/>
        ))
      }
    </div>
  );
}
