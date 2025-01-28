import {useState , useMemo} from 'react';

function Memohook(){
  const [number,setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  
  const styleObj = {
    backgroundColor :   dark ?  "black" : "green",
    color : "blue"
  };

  const calculation =  useMemo(()=>{
    return getExpensivefn(number);
  },[number]);
  return (
    <div style={styleObj}>
        <input type="number" name="" id="" onChange={(e)=> setNumber(e.target.value)} />
        <h2>Calculation : {calculation} </h2>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
    
}

function getExpensivefn(number){
    console.log('loop started');
    for(let i=0;i<1000000000;i++){

    }
    return number;
}

export default  Memohook;