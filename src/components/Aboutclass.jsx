import React from "react";
import PropTypes from "prop-types";


class Aboutclass extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <>
               <h1>classbased Components</h1>
                <button onClick={this.props.submitFn.bind(this,"testing fn")}>testing fn</button>
            </>

        )
    }
}

// Aboutclass.prototype = {
//     name : PropTypes.string,
//     submitFn : PropTypes.func
//   }
export default Aboutclass;