import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatsSlice'
import { generateName, randomMessage } from '../utils/helper'


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMesagages = useSelector((store)=> store.chat.messages)
    useEffect(()=>{
       const interval = setInterval(()=>{
        // API Polling
        console.log("API Polling");
        dispatch(addMessages({
            name: generateName(),
            message: randomMessage(21)
        }))
        }, 1500);

        return()=> clearInterval(interval)
    }, [])
  return (
    <>
    
    
    <div className="relative right-[415px] md:right-0 top-56 md:top-0 md:ml-2 w-[145%] h-[450px] p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
      <div>{chatMesagages.map((data, index)=> (
        <ChatMessage key={index} name={data.name} message={data.message}/>
      ))}
      </div>
      </div>
      <form className="relative top-56 md:top-0 right-[410px] md:right-0" onSubmit={(e)=>{e.preventDefault();
    dispatch(addMessages({
        name: "Saad",
        message: liveMessage
    }))
    setLiveMessage("")
    }}>
        <input value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} className="mx-4 p-1 m-2 border border-gray-500 rounded-lg w-96" placeholder="Say Something..."></input>
        <button className="px-2 mx-2 bg-green-100">Submit</button>
    </form>
      
    </>
  )
}

export default LiveChat
