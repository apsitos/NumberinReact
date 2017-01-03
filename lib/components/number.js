import React from 'react';
import Guess from './guessbutton';
import Clear from './clearbutton';
// import Reset from './resetbutton';
import Display from './display';

export default class Number extends React.Component {
  constructor() {
    super();
    this.state = {
      attempt: '',
      randomNum: '',
      min: 1,
      max: 100,
      message: 'No Guesses Yet!'
    };
  }

  componentDidMount() {
    this.generate();
  }

  generate() {
    let randomNum = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
    console.log(randomNum);
    this.setState({ randomNum });
  }

  numberGuessed(e) {
    this.setState({ attempt: e.target.value });
  }

  compare() {
    let userGuess = parseInt(this.state.attempt)
    if (userGuess === this.state.randomNum) {
      this.setState({ message: "Hooray!" })
    }
    if (userGuess > this.state.randomNum) {
      this.setState({ message: "Your guess is too high" })
    }
    if (userGuess < this.state.randomNum) {
      this.setState({ message: "Your guess is too low"})
    }
  }

  erase() {
    this.setState({ attempt: '' });
  }

  // startover() {
  //   generate();
  //   erase();
  // }

  render() {
    return(
      <div>
        <input id='inputbox'
          type='number' value= {this.state.attempt} placeholder='Type Your Guess Here' onChange={(e) => this.numberGuessed(e)}/>
        <div className='buttons'>
          <Guess id='guess' compare={this.compare.bind(this)}/>
          <Clear id='clear' erase={this.erase.bind(this)}/>
          {/* <Reset id='reset' begin={this.startover.bind(this)}/> */}
        </div>
        <div>
          <Display confirm="Your last guess was" guess={this.state.attempt} message={this.state.message}/>
        </div>
      </div>
    );
  }
}
