import React from 'react'

export default function ProductDetail({team}) {
  return (
    <>
          <div className="flex flex-col md:flex-row  items-center px-4 gap-2">
          
          {/* EL OTRO FRAME */}
          <div className="md:w-1/2 flex flex-col gap-2  items-start justify-center">
            <p className="text-parraph">{team.category}</p>
            <h1 className="font-medium text-3xl text-secondary">{team.team_name}</h1>
            <p className="text-sm font-medium text-secondary">{team.league}</p>
            <hr className="w-full py-4" />
            <p className="text-sm font-medium text-secondary">
              {team.primary_color}
            </p>
            <button
              className="border rounded-sm shadow p-4 text-white bg-blue-500 px-8"
            >
              Cambiar
            </button>
          </div>
        </div>
      </>
  )
}
