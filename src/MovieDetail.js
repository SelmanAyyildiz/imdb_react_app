import React, {useEffect} from 'react'
import axios from 'axios'


const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/{movie_id}"

function MovieDetail() {

    useEffect(()=> {
     axios.get(
        movieDetailBaseUrl, {
            params:{
                api_key:apiKey,
            }
        }
     ) 
        .then()
        .catch()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default MovieDetail
