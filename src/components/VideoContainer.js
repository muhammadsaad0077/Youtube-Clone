import React, { useEffect, useState } from 'react'
import { Youtube_API_Key } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  const pageClose = useSelector(store=> store.app.isPageOpen)
  const [videos, setVideos] = useState([])
  const getVideos = async ()=>{
    const data = await fetch(Youtube_API_Key)
    const json = await data?.json()
    console.log(json);
    setVideos(json?.items)
  }
  useEffect(()=>{
    getVideos()
  }, [])
  return (
    <>
    {pageClose && (
  
    <div className="md:flex flex-wrap">
       { videos?.map((video) => (
        <Link key={video.id} className="md:w-[31%] w-screen grid md:max-h-screen -ml-6 md:-ml-0" to={"/watch?v=" + video.id}>
         <VideoCard key={video.id} info={video}/>
         </Link>
         ))}
    </div>
    )}
    </>
  )
}

export default VideoContainer
