import React from 'react';
import Guess from './guessbutton';
import Clear from './clearbutton';
// import Reset from './resetbutton';

export default class Number extends React.Component {
  constructor() {
    super();
    this.state = {
      attempt: '',
      randomNum: '',
      min: 1,
      max: 100,
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
      console.log("hooray!");
    }
    if (userGuess > this.state.randomNum) {
      return "your guess is too high"
    }
  }

  erase() {
    this.setState({ attempt: '' });
  }

  render() {
    return(
      <div>
        <input
          type='number' value= {this.state.attempt} placeholder='Type Your Guess Here' onChange={(e) => this.numberGuessed(e)}/>
        <div className='buttons'>
          <Guess id='guess' compare={this.compare.bind(this)}/>
          <Clear id='clear' erase={this.erase.bind(this)}/>
          {/* <Reset id='reset' begin={this.startover.bind(this)}/> */}
        </div>
      </div>
    );
  }
}
