import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuBar = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2 m-2">
        <div className="flex col-span-5">
            <img className="h-5 cursor-pointer mt-2 ml-4" src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png' alt='menu' onClick={toggleMenuBar} ></img>
            <img className="h-5 mx-4 mt-2" src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png' alt='logo'></img>
        </div>
        <div className="col-span-6 px-14">
            <input placeholder='Search' type='text' className="w-1/2 border border-gray-400 p-2 rounded-l-full"></input>
            <button className="border border-gray-400 p-2 rounded-r-full text-white bg-gray-200">🔍</button>
        </div>
        <div className="col-span-1">
            <img className="h-5" src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png' alt='user-icon'></img>
        </div>
      
    </div>
  )
}

export default Header
