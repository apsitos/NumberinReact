import React from 'react';
import Clear from './clearbutton';
import Guess from './guessbutton';
import Reset from './resetbutton';

const Buttons = ({ attempt }) => {
  erase() {
    this.setState({ attempt: '' })
  }

  return(
    <div className='buttons'>
      <Guess id='guess' compare={this.compare.bind(this)}/>
      <Clear id='clear' erase={this.erase.bind(this)}/>
      {/* <Reset id='reset' /> */}
    </div>
  );
}

export default Buttons;

// begin={this.startover.bind(this)}
try={this.guess.bind(this)}
