import { useParams } from "react-router-dom";
import { restaurantMenuItems } from "../utils/staticdata";
import { imgUrl } from "../utils/staticdata";
import { useDispatch } from "react-redux";
import {addItem,removeItem}  from '../utils/CartSlice';
function RestaurantDetails(){
    const dispatch = useDispatch();

    function handleAddItem(item){
        dispatch(addItem(item))
    }
    return (
        <>
            {
                restaurantMenuItems.map((product) =>{
                    console.log(product,"product",JSON.stringify(localStorage));
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('test');
                    return (
                    <div key={`menu_${product._id}`}>
                        <center>
                        <h2>{product.id}</h2>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                        <img src={`${imgUrl}${product.imgId}`} alt="" />     
                        <button type="button" onClick={handleAddItem({product})}>+</button>
                        <button>-</button>
                        </center>
                    </div>
                    )  
                })
            }
            
        </>
    )
}
export default RestaurantDetails;