import Buttonprop from "./Buttonprop";
import { useState } from "react";
function Sharedbutton(){
    const  [count,setCount] = useState(0);
    
    function submitButton(){
        setCount(count+1);
    }

    return (
        <>
           <Buttonprop click={submitButton} count={count}/>
           <Buttonprop click={submitButton} count={count}/>
        </>
    )
}

export default Sharedbutton;