 
import { useState} from 'react';
function List(){
   const [selectList , setSelected]  = useState([]);
   
    
   const arr = [
       "mornging",
       "afternoon",
       "evening"
   ]

    function handleList(e){
        
    }
    const display = arr.map(element =>{
        console.log(element,"element");
        return <li key={element}>
                  <input type="checkbox" vlaue={element} onChange={handleList}/>
                  <span> {element}</span>
        </li>
    })

    return (
        <>
                <h1> test</h1>
                 <ul>
                     {display}
                  </ul>
                {/* <h1> Selected</h1> */}
                   {/* <ul>
                       {
                           selectList.map(element =>{
                            return <li key={element}>
                                      <input type="checkbox" vlaue={element}/>
                                      <span> {element}</span>
                            </li>
                           })
                       } 
                   </ul> */}
                {/* <h1>Unselected</h1> */}
                     {/* <ul>
                       {
                           unselectList.map(element =>{
                            return <li key={element}>
                                      <input type="checkbox" vlaue={element}/>
                                      <span> {element}</span>
                            </li>
                           })
                       } 
                   </ul> */}
        </>
    )
}
export default List;