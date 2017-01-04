import React from 'react';
import compareGuess from './helpers';

export default class Display extends React.Component {

  render() {
    let {guess, randomNum} = this.props
    if (!guess) {
      return(
        <div>
          <h3>Try Your Luck!</h3>
        </div>
      )
    } return (
      <div>
        <h3>Your Last Guess Was</h3>
        <section id="number">{guess}</section>
        <h3>{compareGuess(guess, randomNum)}</h3>
      </div>
    )
  }
}
