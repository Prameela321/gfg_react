import {useState, useEffect}  from  'react';

function Useeffectdep(){
    const  [count,setCount] = useState(0);
    const [text,updateText] = useState(0);
    
    function submitButton(){
        setCount(count+1);
    }

    useEffect(()=>{
        document.title = `${count} times title`;
    });

    return (
        <>
            <button onClick={submitButton}> {count} times Clicked</button>
            {/* <button onClick={(e)=> updateText(text+5)}> {text}  times updated</button> */}
        </>
    )
}

export default Useeffectdep;