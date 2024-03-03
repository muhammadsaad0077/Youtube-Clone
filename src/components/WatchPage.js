import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuClosed } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  const fetchVideoData = async()=>{
    const data = await fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=3AuB8RTfBJc-_Mh1QhMc&key=AIzaSyCGpI5cbnWkgFH2NpPpvfq7ZWRFBsr9q0M`)
    const json = await data.json()
  }
  useEffect(() => {
    dispatch(menuClosed());
    fetchVideoData()
  }, []);

  return (
    <div className="flex flex-col">
    <div className="px-24 pt-8 flex ">
      <div className="">
      <iframe
      className="rounded-lg"
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <div className="">
        <LiveChat />
      </div>
      </div>
        <CommentsContainer />
    
    </div>
  );
};

export default WatchPage;
