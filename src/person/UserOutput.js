import React from 'react';

import './UserOutput.css';
const UserOutput =(props)=>{
    return(
        <div >
            <br/>
            <p>this is output</p>
            <p >Here is what you write</p>
            <p className="UserOutput">{props.userName}</p>
            <br/>
        </div>
    )
}
export default UserOutput;