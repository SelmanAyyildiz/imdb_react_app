import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Route , Switch } from 'react-router-dom'
import Movie from './Movie'
import MovieDetail from './component/movieDetail/MovieDetail'
import axios from "axios";
import { Navbar } from './component/navbar'

const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const baseUrl ="https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w300";

export const movieContext = createContext()

function App() {
    const [searchKey, setSearchKey]=useState("Allah")
    const[movieList, setMovieList]=useState([])
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
    // console.log("MOVIELIST",movieList)
    // console.log("SEARCHKEY",searchKey)
    return (
        <movieContext.Provider value={{movieList, baseImageUrl, setSearchKey}}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path = "/detail/:id" component={MovieDetail} exact/>
                    <Route path = "/" component={Movie} exact/>
                </Switch>
            </Router>
        </movieContext.Provider>
    )
}
export default App
