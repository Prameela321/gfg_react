import {useEffect , useState} from 'react';

function EffectInter(){
    const [sec ,setSec] = useState(0);

    useEffect(()=>{
       const interval =  setInterval(()=>{
            setSec(sec+1);
            console.log(sec);
        },100);

        return ()=>{
            clearInterval(interval);
        }
    })

    return(
        <>
            <h1>looking for the </h1>
           <h1>{sec}  times changing</h1>
        </>
    )
}


export default EffectInter;