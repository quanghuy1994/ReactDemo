import React from 'react'
import './UserInput.css'
import styled from 'styled-components';
const Inputtext= styled.input`
    width: 60%;
    padding: 16px;
    margin: 16px;
    border: 2px solid black;
    background-color: blue;
    text-align: center;
`

const userinput = (props) => {
    return (
        <div>
            <div >
                <p>this is input page</p>
                <p>please enter what you want:</p>
                <Inputtext className='UserInput' 
                onChange={props.Changed} 
                value={props.CurrentValue}></Inputtext>
            </div>
        </div>
    )
}
export default userinput;