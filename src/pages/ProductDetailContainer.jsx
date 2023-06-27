import React, { useState, useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import axios from "axios";

export default function ProductDetailContainer() {
  let [equipos, setEquipos] = useState([]);
  //SI ESTUVIESE USANDO EN VEZ DE UNA VARIABLE LOCAL UN ESTADO, SE RE-RENDERIZARÍA.
  async function getData() {
    try {
      let { data } = await axios("http://localhost:8080/api/equipos/read");
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
  console.log(equipos)
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
