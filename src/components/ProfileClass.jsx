import  React from  'react';
import PropTypes from 'prop-types';

class ProfileClass extends React.Component{
     constructor(props){
        super(props)
        // console.log(props);
     }


     render(){
        return(
            <>
                <h1>Profile Class</h1>
                 
                 <h2>{this.props.testing}</h2>
            </>
        )
     }
}

ProfileClass.proptype = {
    testing : PropTypes.string
}

export default ProfileClass;