import React, { useEffect, useState } from 'react'
import { Youtube_API_Key } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async ()=>{
    const data = await fetch(Youtube_API_Key)
    const json = await data.json()
    console.log(json.items);
    setVideos(json.items)
  }
  useEffect(()=>{
    getVideos()
  }, [])
  return (
    <div className="flex flex-wrap">
       {videos?.map(video => <VideoCard key={video.id} info={video}/>)}
      
    </div>
  )
}

export default VideoContainer
