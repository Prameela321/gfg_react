import React from "react";
import ProfileClass from "./ProfileClass";

class ProfileProps extends React.Component{
    
    constructor(){
        super();
       
    }

    render(){
        const name ="testing"; 
        return (
            <>
                <ProfileClass testing={name}/>
            </>
        )
    }
}

export default ProfileProps;