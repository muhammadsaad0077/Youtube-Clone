import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Suggestion_API_Key } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector(store => store.search)
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[search]){
        setShowSuggestion(searchCache[search])
      } else{
       getSearchSuggestion()
      }
      }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      // Hide suggestions when scrolling
      setShowSuggestion(false);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  key - i
  render the component
  useEffect
  start timer => make api call after 200ms

  key - ip
  destroy the component(useEffect return method)
  re-render the component
  useEffect
  start timer => make api call after 200ms
*/
  const handleSearch = () => {
    // Clear search input after navigation
    setSearch("");
  };
  
  /*const searchVideos = async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyCGpI5cbnWkgFH2NpPpvfq7ZWRFBsr9q0M&`)
   const json = await data.json()
   console.log(json);
  }

  useEffect(()=>{
   searchVideos()
  }, )*/


  const getSearchSuggestion = async () => {
    const data = await fetch(Suggestion_API_Key + search);
    const json = await data?.json();
    setSuggestion(json[1]);

  // update cache
  dispatch(cacheResults({
  //  [search]: json[1]
  }))
  };
  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  };
  
return (
   
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-4">
        <img
          className="hidden md:inline-block md:h-5 md:cursor-pointer md:mt-2 md:ml-4 md:fixed"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
          //onClick={toggleMenuBar}
        ></img>
        <img
          className="md:h-5 md:mx-14 md:mt-2 md:fixed h-4 mx-1 mt-2"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-6 px-14">
        <div className="flex justify-center md:block">
          <input
          onClick={()=> setShowSuggestion(false)}
            value={search}
            //onFocus={() => setShowSuggestion(true)}
           // onBlur={() => setShowSuggestion(false)}
            onChange={(e) => {
              setShowSuggestion(true);
              setSearch(e.target.value);
            }}
            placeholder="Search"
            type="text"
            className="w-8/12 md:w-1/2 border border-gray-400 p-2 rounded-l-full md:mx-0 mx-12"
          ></input>
          <Link
           to={"/searchresult?_q=" + search}
           
           onClick={handleSearch} // Handle search button click
           className="border border-gray-400 p-2 rounded-r-full text-white bg-gray-200 md:-mx-0 -mx-12"
         >
           🔍
         </Link>
          
        </div>
        { showSuggestion && (
        <div className="bg-white py-2 px-5 w-96 shadow-lg rounded-lg border-gray-100 absolute">
          <ul>
            {suggestion.map((suggest) => (
              <li key={suggest} className="py-2 px-3 cursor-pointer hover:bg-gray-100">
                <Link to={"/searchresult?_q=" + encodeURIComponent(suggest)}>{suggest}</Link>
              </li>
            ))}
          </ul>
        </div>
  )}

        
        
      </div>
      <div className="col-span-2">
        <img
          className="h-5"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;