import {useState}  from  'react';

function Buttonstate(){
    const  [count,setCount] = useState(0);
    
    function submitButton(){
        setCount(count+1);
    }
    return (
        <button onClick={submitButton}> {count} times Clicked</button>
    )
}

export default Buttonstate;