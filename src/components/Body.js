import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex w-[13%]">
        <Sidebar />
        <MainContainer />
      
    </div>
  )
}

export default Body
