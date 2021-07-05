import "./style.css";

export const Card = ({ title, poster }) => {
  return (
    <div className="card-wrapper">
    <img src={poster} alt={title + ".jpeg"}/>
      <p>{title}</p>
 
    </div>
  );
};
