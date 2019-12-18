import React from 'react'
const validation = (props) => {
    let ValidationMessage = 'Text long enough';
    if(props.inputLength <=5){
        ValidationMessage = 'Text too short';
    }
    if(props.inputLength >=12){
        ValidationMessage = 'Text too long';
    }
    return (
        <div>
            <p>{ValidationMessage}</p>
        </div >
    )
}
export default validation;