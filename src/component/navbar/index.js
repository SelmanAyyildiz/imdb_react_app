
import "./style.css";
import {useRef, useContext} from "react";
import { movieContext } from "../../Movie";
import Fixbar from "./fixbar";

export const Navbar = () => {
    const searchInputRef = useRef();
    const {setSearchKey} = useContext(movieContext)
    const handleKey =(e)=>{
        if(e.key === 'Enter'){
            setSearchKey(searchInputRef?.current?.value)
        }
    }

    return(
        
        <div className="navbar-wrapper">
            <input  ref={searchInputRef} type="text" onKeyDown={handleKey}/>
            <button onClick={()=>{setSearchKey(searchInputRef?.current?.value)}}>search</button>
            <Fixbar/>
        </div>
    )
}

