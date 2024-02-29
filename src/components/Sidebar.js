import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  // Early Return Pattern
  if(!isMenuOpen) return null;
  return (
    <div className="p-5 w-[13%] fixed">
        <ul>
            <li className="pt-3 pl-10">Home</li>
            <li className="pt-3 pl-10">Shorts</li>
            <li className="pt-3 pl-10">Videos</li>
            <li className="pt-3 pl-10">Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
            <li className="pt-3 pl-10">Music</li>
            <li className="pt-3 pl-10">Sports</li>
            <li className="pt-3 pl-10">Gaming</li>
            <li className="pt-3 pl-10">Movies</li>
        </ul>
        <h1 className="font-bold pt-5 whitespace-nowrap">Watch Later</h1>
        <ul>
            <li className="pt-3 pl-10">Music</li>
            <li className="pt-3 pl-10">Sports</li>
            <li className="pt-3 pl-10">Gaming</li>
            <li className="pt-3 pl-10">Movies</li>
        </ul>
      
    </div>
  )
}

export default Sidebar
