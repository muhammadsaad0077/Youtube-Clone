import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import PageCard from './PageCard';
import ButtonList from './ButtonList';

const VideoPage = () => {
  const pageClose = useSelector(store => store.app.isPageOpen);
  const location = useLocation();
  const [videos, setVideos] = useState([])
  const searchTerm = location.search
  console.log(searchTerm);


  const searchVideos = async(term)=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${term}&key=AIzaSyCGpI5cbnWkgFH2NpPpvfq7ZWRFBsr9q0M&`)
   const json = await data.json()
   console.log(json);
   setVideos(json?.items)
  }

  useEffect(()=>{
    searchVideos(searchTerm)
  }, [])

  

  return (
    <>
      <Sidebar />
      <div className="px-56">
      <ButtonList />
      </div>
      {pageClose && (
        <div>
         {videos.map((videos) => (
          <Link key={videos?.id?.videoId} to={"/watch?v=" + videos?.id?.videoId}>
          <PageCard key={videos?.id?.videoId} info={videos}/>
          </Link>
          )
          
         )}
        </div>
      )}
    </>
  );
};

export default VideoPage;




/*import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageOpen } from '../utils/appSlice'
import Sidebar from './Sidebar'
import { useLocation, useSearchParams } from 'react-router-dom'

const VideoPage = () => {
  const pageClose = useSelector(store=> store.app.isPageOpen)
  const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    console.log(searchTerm);
  const dispatch = useDispatch()
  
  dispatch(pageOpen())
  const searchVideos = async()=>{
       const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${props.value}&key=AIzaSyCGpI5cbnWkgFH2NpPpvfq7ZWRFBsr9q0M&`)
      const json = await data.json()
      console.log(json);
     }
  
     useEffect(()=>{
       searchVideos()
     }, [])
//   return (
//     <>
//     <Sidebar />
//    {!pageClose && (
//     <div>
      
//     </div>)} 
//     </>
//   )
// }

// export default VideoPage*/
