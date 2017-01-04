import React from 'react';

export default class Display extends React.Component {
  constructor() {
    super();
    }

  render() {
    let { attempt, randomNum } = this.props;
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

    return(
        <section id="message">{show}</section>
    );
  }
}
