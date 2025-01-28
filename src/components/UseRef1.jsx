import {useRef , useContext} from 'react';
import {loginContext} from './LoginContextCreate';

function UseRefDom(){
  // const {_id,displayName} = useContext(loginContext);
  const inputText =  useRef();

  function handleSubmit(){
        console.log(inputText.current.value,"text");
  }

   return (
    <>
      <input type="text" name="" id=""  ref={inputText}/>
      <input type="submit" value=""  onClick={handleSubmit}/>
      {/* {displayName} */}
    </>
  )
}
export default UseRefDom;