import React from 'react';
import Display from './display'

const Guess = ({numberGen, userGuess}) => {
  let newGuess = compare() {
    console.log(numberGen);
    if (userGuess === numberGen) {
    } else if (userGuess > numberGen) {
      return "too high";
    } else {
      return "too low";
    }
  }

  return(
    <div>
      <button onClick={ this.compare() } >Guess</button>
    </div>
  )
}
