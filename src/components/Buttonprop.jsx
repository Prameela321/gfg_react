import PropTypes from "prop-types";

Buttonprop.prototype = {
    click : PropTypes.func,
    count : PropTypes.string
}
function Buttonprop(props){
    return (
        <>
           <button onClick={props.click}> clicked {props.count}  times</button>
        </>
    )
}

export default Buttonprop;