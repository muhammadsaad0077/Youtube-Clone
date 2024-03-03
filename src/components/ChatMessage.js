import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-lg p-2">
        <img
          className="h-5"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"
        ></img>
        
        <span className="font-bold px-2">{name}:</span>
        <span className="px-1"> {message}</span>
        
      
    </div>
  )
}

export default ChatMessage
