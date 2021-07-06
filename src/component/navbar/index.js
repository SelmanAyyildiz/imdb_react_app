
import { useState } from "react";
import "./style.css";

export const Navbar = ({setSearchKey}) => {
    const [inputValue, setInputValue] = useState("")

    return(
        
        <div className="navbar-wrapper">
            <input  onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={()=>{setSearchKey(inputValue)}}>search</button>
        </div>
    )
}

