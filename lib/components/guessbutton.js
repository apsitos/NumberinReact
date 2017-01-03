import React from 'react';
import Display from './display'

export default class Guess extends React.Component {
  let randomNum = generate(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  compare() {
    let userGuess = parseInt(//input.value);
    if (userGuess === randomNum) {
      return "correct!"
    } else if (userGuess > randomNum) {
      return "too high"
    } else {
      return "too low"
    }
  }

  render() {
    return(
      <div>
        <button onClick={ this.guess() } >Guess</button>
      </div>
    )
  }
}
