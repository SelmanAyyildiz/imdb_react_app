
//import './App.css';
import {CardList} from "./component/cardList"
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {Navbar} from "./component/navbar"

const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const baseUrl ="https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w300";

export const movieContext = createContext();

function Movie() {
  const[movieList, setMovieList]=useState([])
  const [searchKey, setSearchKey]=useState("Allah")
  useEffect(() =>{
    axios.get(baseUrl,{
      params:{
        api_key: apiKey,
        page:1,
        query: searchKey
      }
    })
    .then((res)=> setMovieList(res?.data?.results))
    .catch((err)=> console.log(err))

  },[searchKey])
  console.log("MOVIELIST",movieList)
  console.log("SEARCHKEY",searchKey)
  return (

    <div className="App">
     <movieContext.Provider value={{movieList, baseImageUrl, setSearchKey}}>
      <nav className="navbar"><Navbar /></nav>
      <header className="App-header"></header>
      <main>
      <CardList 
              
              />
      </main>
      </movieContext.Provider>
    </div>
  );
}

export default Movie;