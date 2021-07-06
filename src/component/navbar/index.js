
import { useState , useRef} from "react";
import "./style.css";

export const Navbar = ({setSearchKey}) => {
    const searchInputRef = useRef();

    const handleKey =(e)=>{
        if(e.key === 'Enter'){
            setSearchKey(searchInputRef?.current?.value)
        }
    }

    return(
        
        <div className="navbar-wrapper">
            <input  ref={searchInputRef} type="text" onKeyDown={handleKey}/>
            <button onClick={()=>{setSearchKey(searchInputRef?.current?.value)}}>search</button>
        </div>
    )
}

