import React from 'react'

const CategoryItem = ({imgSrc , title}) => {
  return (
      <li className="flex  w-72 flex-col items-center  justify-center mb-4 text-centerrounded-sm group hover:cursor-pointer ">
      <div className="w-32 h-14">
        <img src={imgSrc} alt={title} className="w-full h-full object-contain object-center" />
      </div>
          <h3 className=' font-semibold text-gray-500 mt-4 text-xs text-center '>{title}</h3>
    </li>
  )
}

export default CategoryItem