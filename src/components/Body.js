import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex w-[13%]">
        <Sidebar />
        <MainContainer />
        <Outlet />
      
    </div>
  )
}

export default Body
