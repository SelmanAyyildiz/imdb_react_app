import "./style.css";
import {useRef, useContext} from "react";
import { movieContext } from "../../App";
import Fixbar from "./fixbar";


export const SearchBox = () => {
    const {setSearchKey} = useContext(movieContext)
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
            <Fixbar/>
        </div>
    )
}
