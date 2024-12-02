import { useState } from "react";
import "./student.css";
const StudentState=() => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button
             onClick={()=> {setCount(count+1)}}>
                Increment
            </button>
            <button
             onClick={()=> {if(count>0){
                setCount(count-1);
             }}}>
                Decrement
            </button>
         </div>
        
    )
}

export default StudentState