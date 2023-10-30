import React from 'react'

const Bnchina = () => {
  return (
      <div className="flex items-center gap-1">
          {/* shapes*/}
          <div className="flex gap-0.5">
         <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
         <div className="w-6 h-6 bg-gray-500 "></div>
          </div>
          {/* line */}
          <div className="w-[0.5px] h-5 bg-gray-500"></div>
          
          {/* text */}
          <div className="flex flex-col text-xs text-gray-100  items-start justify-center -space-y-1">
              <p>Bnchina</p>
              <p>بنچینە</p>

          </div>
      </div>
  )
}

export default Bnchina