import React from 'react'

const PageCard = (props) => {
    if(props?.info?.length === 0) return null;
   // const { statistics, snippet} = props.info;
   // const { title, thumbnails} = snippet;
      
    return (
      <div className="w-[98%] m-3 rounded-lg flex md:mx-56">
        <img className="cursor-pointer rounded-2xl md:w-[320px] md:h-[180px] h-[50%] w-[35%] mt-4 md:mt-0" alt='thumbnail' src={props?.info?.snippet?.thumbnails?.medium?.url}></img>     
            <h1 className="text-x mt-3 mx-2">{props?.info?.snippet?.title}</h1>
         <ul className="whitespace-nowrap">
           {/* <li className=''>{props?.info?.snippet?.channelTitle}</li>   */}
        </ul>
        
      </div>
      
     
    )
}

export default PageCard

// src={props?.info?.snippet?.thumbnails?.default?.url}
