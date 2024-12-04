import React from 'react'
// WRAPPER COMPONENT

const Card = ({children, bg = 'bg-yellow-100'}) => {
  return (
    <div className={` ${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card