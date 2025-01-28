import Restaurantcard from "./Restaurantcard";
import { restaurantData } from "../utils/staticdata";
import Search from "./Search";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Swiggybody(){
  const [restaurantDetails , setRestaurantData] = useState(restaurantData);
  const [searchData,setSearchData] = useState({searchTerm : '', topSearch : 0});

  function searchFn(searchObj){
      //  setSearchData(searchObj);
       console.log("testing searchfn",searchData)
  }

    useEffect(()=>{
        fetch('https://node-mongo-1.onrender.com/listRestaurant')
        .then(data => data.json())
        .then(res => {
          setRestaurantData(res.data)
        })
        .catch(err => console.log(err));
    } ,[])

    // console.log("searchFN");
    // useEffect(()=>{
    //   console.log("useEffect",restaurantDetails);
    //   const data =  restaurantDetails.filter(restaurant =>{
    //       return restaurant.displayName.toLowerCase().includes(searchText.toLowerCase());
    //   });
      
    //  const res =  data.filter(res =>{
    //          return res.avgRating > 4.5;
       
    //   });
    //   setRestaurantData(res);
    // },[searchText,topText]);



   return (
      <>  
         <div className="Swiggy">
          <Search searchFn={searchFn}/>
          <div className="restaurantContainer">
           { 
             restaurantDetails.map((product) =>{
             console.log(product,"product");
             return <Link to='/restaurantDetails' key={"item"+product._id}><Restaurantcard key={product._id} obj={product}/></Link>
             })
           }
           </div>
        </div>
           
      </>
   )
    
}
export default Swiggybody;