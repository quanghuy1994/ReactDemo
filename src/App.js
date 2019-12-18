import React, { Component } from 'react';
import UserInput from './person/UserInput.js'
import UserOutput from './person/UserOutput.js';
import Validation from './validation/Validation.js';
import Char from './char/Char.js';
import styled from 'styled-components';
import './App.css';



class App extends Component {
  state = {
    userInput: 'haha'
  }

  InputChangeHandle = (event) => {
    this.setState({ userInput: event.target.value })
  }
  DeleteCharHandle = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1)
    const updatetext = text.join('');
    this.setState({ userInput: updatetext })
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} Clicked={() => this.DeleteCharHandle(index)}></Char>
    })
    return (
      <div>
        <UserInput Changed={this.InputChangeHandle} CurrentValue={this.state.userInput}></UserInput>
        <Validation inputLength={this.state.userInput.length}></Validation>
        <UserOutput userName={this.state.userInput}></UserOutput>
        {charList}
      </div>
    )
  }
}
export default App;