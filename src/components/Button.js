import React from 'react'

const Button = (props) => {
  return (
    <div className="">
      <button className="m-2 px-5 py-2 bg-gray-200 rounded-lg whitespace-nowrap text-xs font-bold font-medium">{props.name}</button>
    </div>
  )
}

export default Button
