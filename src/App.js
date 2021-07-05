
//import './App.css';
import {CardList} from "./component/cardList"
import { useEffect, useState } from "react";
import axios from "axios";


const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const baseUrl ="https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w300";


function App() {
  const[movieList, setMovieList]=useState(null)
  useEffect(() =>{
    axios.get(baseUrl,{
      params:{
        api_key: apiKey,
        page:1,
        query:'star wars'
      }
    })
    .then((res)=> setMovieList(res?.data?.results))
    .catch((err)=> console.log(err))

  },[])
  console.log("movieList",movieList)
  return (

    <div className="App">
      <header className="App-header">
      <CardList movieList={movieList} baseImageUrl={baseImageUrl}
              
      />
      </header>
    </div>
  );
}

export default App;