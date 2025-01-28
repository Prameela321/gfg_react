import React from "react";
import Aboutclass from "./Aboutclass";
import {useState} from  'react';

class SampleClass extends React.Component{
    constructor(){
        super();
        this.state = {
            testingname : "initial"
        }
    }

   

    render(){
        function  submitFn(updateName){
            this.setState({testingname : "here"})
            console.log(updateName);
        }

        return (
            <>  
                <h2>{this.state.testingname}</h2>
                <Aboutclass  submitFn={submitFn} />
            </>
        )
    }
}

export default SampleClass;