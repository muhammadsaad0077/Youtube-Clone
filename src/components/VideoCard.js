import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return null;
  const { statistics, snippet} = info;
  const { title, thumbnails} = snippet;

  const formatViews = (views) => {
    if (views < 1000) {
      return views;
    } else if (views >= 1000 && views < 1000000) {
      return (views / 1000).toFixed(1) + 'K';
    } else {
      return (views / 1000000).toFixed(1) + 'M';
    }
  };
    
  return (
    <div className="md:w-[98%] p-2 m-3 rounded-lg w-[85%] ml-10">
      <img className="cursor-pointer rounded-lg" alt='thumbnail' src={thumbnails?.maxres?.url}></img>
      <h1 className="text-x mt-3">{title}</h1>
      <ul>
        {/* <li className="mt-2">{channelTitle}</li>  */}
         <li>{formatViews(statistics.viewCount)} views</li> 
      </ul>
      
    </div>
  )
}

export default VideoCard


