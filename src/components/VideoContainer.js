import React, { useEffect, useState } from 'react'
import { Youtube_API_Key } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async ()=>{
    const data = await fetch(Youtube_API_Key)
    const json = await data?.json()
    setVideos(json?.items)
  }
  useEffect(()=>{
    getVideos()
  }, [])
  return (
    <div className="flex flex-wrap">
       { videos?.map((video) => (
        <Link key={video.id} className="w-[31%] grid max-h-screen" to={"/watch?v=" + video.id}>
         <VideoCard key={video.id} info={video}/>
         </Link>
         ))}
    </div>
  )
}

export default VideoContainer
