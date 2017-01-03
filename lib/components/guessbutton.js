import React from 'react';
import Display from './display'

export default class Guess extends React.Component {

  compare({numberGen, userGuess}) {

    if (userGuess === numberGen) {
      console.log(randomNum);
    } else if (userGuess > randomNum) {
      return "too high"
    } else {
      return "too low"
    }
  }

  render() {
    return(
      <div>
        <button onClick={ this.compare() } >Guess</button>
      </div>
    )
}
