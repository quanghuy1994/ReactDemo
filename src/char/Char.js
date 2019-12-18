import React from 'react'
//import './Char.css'
import styled from 'styled-components';

const Chardiv = styled.div`
    display: inline-block;
    padding: 16px;
    margin: 16px;
    border: 1px solid black;
    text-align: center;
    background-color: {}transparent;

    &:hover{
        background-color: yellowgreen;
        color: white;
    }
    `

const char = (props) => {
    return (
        <Chardiv onClick={props.Clicked}>
            {props.character}
        </Chardiv>
    )
}
export default char