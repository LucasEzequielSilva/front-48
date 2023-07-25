import React from 'react'
import { Link as Anchor} from 'react-router-dom'

export default function ProductDetail({planta}) {
  return (
    <>
          <div className="flex flex-col md:flex-row  items-center px-4 gap-2">
          
          {/* EL OTRO FRAME */}
          <div className="md:w-1/2 flex flex-col gap-2  items-start justify-center">
            <p className="text-parraph">{planta.stock}</p>
            <h1 className="font-medium text-3xl text-secondary">{planta.name}</h1>
            <p className="text-sm font-medium text-secondary">{planta.type}</p>
            <hr className="w-full py-4" />
            <p className="text-sm font-medium text-secondary">
            Lowlight: { planta.lowlight ? "si":"no" }
            </p>
            <Anchor
              to={`detail/${planta._id}`}
              className="border rounded-sm shadow p-4 text-white bg-blue-500 px-8"
            >
              Ver mas
            </Anchor>
          </div>
        </div>
      </>
  )
}
