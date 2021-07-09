import "./style.css"
import { movieContext } from "../../Movie";
import { Card } from "../card";
import { useContext } from "react";

const defaultImage ="https://image.freepik.com/free-vector/cinema-logo-with-popcorn_23-2147494040.jpg"




export const CardList = () => {
  const{ movieList, baseImageUrl } = useContext(movieContext);
  console.log("CARDLIST", movieList);
  return (
    <div className="card-list-wrapper">
      {movieList?.map((movie, index) => {
        return <Card
         key={index}
          title={movie.title}
           poster={movie.poster_path? baseImageUrl + movie.poster_path : defaultImage} 
           />;
      })}
    </div>
  );
};
