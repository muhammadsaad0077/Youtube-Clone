import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Suggestion_API_Key } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

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

  const getSearchSuggestion = async () => {
    const data = await fetch(Suggestion_API_Key + search);
    const json = await data?.json();
    setSuggestion(json[1]);

  // update cache
  dispatch(cacheResults({
    [search]: json[1]
  }))
  };
  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2">
      <div className="flex col-span-5">
        <img
          className="h-5 cursor-pointer mt-2 ml-4"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
          onClick={toggleMenuBar}
        ></img>
        <img
          className="h-5 mx-4 mt-2"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="logo"
        ></img>
      </div>
      <div className="col-span-6 px-14">
        <div>
          <input
            value={search}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => {
              setShowSuggestion(true);
              setSearch(e.target.value);
            }}
            placeholder="Search"
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          ></input>
          <button className="border border-gray-400 p-2 rounded-r-full text-white bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-96 shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestion.map((suggest) => (
                <li key={suggest} className="py-2 px-3 hover:bg-gray-100">
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
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
