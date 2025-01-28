import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Restaurantcard.prototype = {
    imgId : PropTypes.string,
    offerLine : PropTypes.string,
    avgRating : PropTypes.string,
    displayName : PropTypes.string,
    deliveryTime : PropTypes.string,
    cuisines : PropTypes.string,
    location : PropTypes.string,
    props : PropTypes.object
};
function Restaurantcard(props){
    // console.log("tstings soooooo",props.obj)
    const {imgId,offerLine,avgRating,displayName,deliveryTime,cuisines,location } = props.obj;
    return (
        <>  
           <div>
                <div className="restaurantCard">
                      <img src={imgId} alt=""/>
                        <h3 className="offerLine">{offerLine}</h3>
                        <h3>{displayName}</h3>
                        <div className="priceData">
                            <span>{avgRating}</span>
                            <span>{deliveryTime}</span>
                        </div>
                        <div className="location-cuisine">
                            <span>{cuisines}</span>
                            <span>{location}</span>
                        </div>
                </div>
           </div>
        </>
    )
}
export default Restaurantcard;