import { useState } from "react";

function UseEffectObj(){
    const [details, setDetails] = useState({counter: 0, fname : ''});

    // function updateDetails(e){
        
    // }

    return (
        <>
            <input type="text" name="" id=""  onChange={(e) => setDetails({...details,fname: e.target.value})}/>
             <h2>{details.fname} clicked {details.counter}  times </h2>
            <input type="button" value="Click me" onClick={(e) => setDetails({...details,counter: details.counter+1})} />
        </>
    )
}

export default UseEffectObj;