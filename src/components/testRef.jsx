import {useState,useEffect} from 'react';
function TestRef(){
    const [text,setTextbox] = useState('');
    const [count,setCount] = useState(-1);
    useEffect(()=>{
        setCount(count+1);
    },[text])
    return (
        <>
            <input type="text" name="" id=""  onChange={(e) => setTextbox(e.target.value)}/>
            <h1>{text}</h1>
            <h2>{count}</h2>
        </>
    )

}

export default TestRef;