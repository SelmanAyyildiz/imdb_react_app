import "./style.css";
import { useHistory } from "react-router-dom";


export const Card = ({ title, poster, id}) => {
  const history = useHistory();
  return (
    <div className="card-container">
    <div className="card-wrapper" onClick={()=>history.push(`/detail/${id}`)}>
    <img className="cardPoster" src={poster} alt={title + ".jpeg"}/>
      <p>{title}</p>
 
    </div>
    </div>
  );
};
