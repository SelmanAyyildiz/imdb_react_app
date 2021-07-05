import "./style.css"
import { Card } from "../card";

export const CardList = ({ movieList, baseImageUrl }) => {
  console.log("CARDLIST", movieList);

  return (
    <div className="card-list-wrapper">
      {movieList?.map((movie, index) => {
        return <Card
         key={index}
          title={movie.title}
           poster={baseImageUrl + movie.poster_path} 
           />;
      })}
    </div>
  );
};
