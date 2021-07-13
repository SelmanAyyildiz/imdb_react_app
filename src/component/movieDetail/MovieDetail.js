import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './style.css'
import { CardList } from '../cardList';

const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const{id}=useParams();
  const[movieDetail, setMovieDetail] = useState([]);
    
    useEffect(() =>{
    axios.get(movieDetailBaseUrl+id,{
      params:{
        api_key: apiKey,
    
      }
    })
    .then((res)=> setMovieDetail(res?.data))
    .catch((err)=> console.log(err))
  },[id])
  // console.log("MOVIELIST",movieDetail)
  return (
    <div className="detail-wrapper">
      <h1>{movieDetail.original_title}</h1>
      <p>{movieDetail.overview}</p>
      <img className="detailPoster" src={baseImageUrl+movieDetail.poster_path} alt={movieDetail.original_title + ".jpeg"}/>
      <CardList/>
    </div>
  );
}

export default MovieDetail
