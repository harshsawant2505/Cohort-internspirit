import React from 'react'

function Card({title, color, count}) {
  return (
    <div className={`w-[300px] px-5 bg-white border-l-6 border-${color}-500 rounded-xl h-24 flex-col gap-5`}>

      <p className='font-bold text-2xl'>{title}</p>
      <p className='font-bold text-xl'>{count}</p>

    </div>
  )
}

export default Card