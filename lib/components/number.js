import React from 'react';
import Guess from './guessbutton';
import Clear from './clearbutton';
// import Reset from './resetbutton';

export default class Number extends React.Component {
  constructor() {
    super();
    this.state = {
      attempt: '',
    };
  }

  numberGuessed(e) {
    this.setState({ attempt: e.target.value });
  }

  erase() {
    this.setState({ attempt: '' });
  }

  render() {
    return(
      <div>
        <input
          type='text'
          value= {this.state.attempt}
          placeholder='Type Your Guess Here'
          onChange={(e) =>
            this.numberGuessed(e)}/>
        <div className='buttons'>
          <Guess id='guess' />
          <Clear id='clear' erase={this.erase.bind(this)}/>
          {/* <Reset id='reset' begin={this.startover.bind(this)}/> */}
        </div>
      </div>
    );
  }
}
