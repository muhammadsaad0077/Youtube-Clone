import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return null;
  const { statistics, snippet} = info;
  const {channelTitle, title, thumbnails} = snippet;
    
  return (
    <div className="w-[98%] p-2 m-3 rounded-lg">
      <img className="cursor-pointer rounded-lg" alt='thumbnail' src={thumbnails?.maxres?.url}></img>
      <h1 className="text-x mt-3">{title}</h1>
      <ul>
        <li className="mt-2">{channelTitle}</li> 
         <li>{statistics.viewCount} views</li> 
      </ul>
      
    </div>
  )
}

export default VideoCard


