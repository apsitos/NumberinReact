import React from 'react';
// import compare from './helpers';

export default class Display extends React.Component {
  compare(attempt, randomNum) {
    console.log(attempt, randomNum);
    let show;

    if (!attempt) {
      show = <div>
        <h3>Try Your Luck!</h3>
      </div>
    } else if (attempt > randomNum) {
      show = <div>
        <h3>Your Last Guess Was</h3>
        <section id="number">{attempt}</section>
        <h3>Nice try! You're too high!</h3>
      </div>
    } else if (attempt < randomNum) {
      show = <div>
        <h3>Your Last Guess Was</h3>
        <section id="number">{attempt}</section>
        <h3>Uh oh! You're too low!</h3>
      </div>
    } else {
      show = <div>
        <h3>Your Last Guess Was</h3>
        <section id="number">{attempt}</section>
        <h3>Right on the money!</h3>
      </div>
    }
    return show;
  }

  render() {
    let {attempt, randomNum} = this.props
    return (
      <section id="message" >{this.compare(attempt, randomNum)}</section>
    );
  }
}
