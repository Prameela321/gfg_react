import {useState, useEffect, useRef} from 'react';
import UseRefDom from './UseRef1';

function UseRef(){
    const [text,setText] = useState('');
    const count = useRef(0);

    useEffect(()=>{
       count.current = count.current+1;
    })

    return (
        <>  
          <input type="text" name="" id=""  onChange={(e)=> setText(e.target.value)}/>
           <h1>{text}</h1>
           <h1>{count.current}</h1>
           <UseRefDom/>
        </>
    )
}
export default UseRef;